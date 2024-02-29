import { RefObject, useLayoutEffect, useRef, useState } from 'react';
import keys, { Callback, Handler, Key } from 'ctrl-keys';

type Keys = [Key] | [Key, Key] | [Key, Key, Key] | [Key, Key, Key, Key];

export interface HotkeyShortcut {
  name: string;
  keys: Key | Keys;
  ref?: RefObject<HTMLElement | null>;
  disabled?: boolean;
  callback: Callback;
  action?: 'keypress' | 'keydown' | 'keyup';
  description?: string;
  category?: string;
}

let isGlobalListenersBinded = false;

const keypressGlobalHandler = keys();
const keyupGlobalHandler = keys();
const keydownGlobalHandler = keys();

/**
 * Map of specific elements handlers
 */
const handlers = new Map<HTMLElement, Handler>();

const extractKeys = (keys: Key | Keys): Keys => {
  return Array.isArray(keys) ? keys : [keys];
};

const filter = (callback: Callback) => (event: any) => {
  const target = event.target;

  const isInput = target.tagName === 'INPUT' && !['checkbox', 'radio', 'range', 'button', 'file', 'reset', 'submit', 'color'].includes(target.type);
  if (target.isContentEditable || ((isInput || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') && !target.readOnly)) {
    return;
  }

  return callback(event);
};

const registerGlobalShortcut = (shortcut: HotkeyShortcut) => {
  if (!shortcut.action || shortcut.action === 'keypress') {
    keypressGlobalHandler.add(...extractKeys(shortcut.keys), filter(shortcut.callback));
  }
  if (shortcut.action === 'keyup') {
    keyupGlobalHandler.add(...extractKeys(shortcut.keys), filter(shortcut.callback));
  }
  if (shortcut.action === 'keydown') {
    keydownGlobalHandler.add(...extractKeys(shortcut.keys), filter(shortcut.callback));
  }
};

const removeGlobalShortcut = (shortcut: HotkeyShortcut) => {
  if (!shortcut.action || shortcut.action === 'keypress') {
    keypressGlobalHandler.remove(...extractKeys(shortcut.keys), filter(shortcut.callback));
  }
  if (shortcut.action === 'keyup') {
    keyupGlobalHandler.remove(...extractKeys(shortcut.keys), filter(shortcut.callback));
  }
  if (shortcut.action === 'keydown') {
    keydownGlobalHandler.remove(...extractKeys(shortcut.keys), filter(shortcut.callback));
  }
};

const registerElementShortcut = (shortcut: HotkeyShortcut) => {
  const handler = keys();

  handler.add(...extractKeys(shortcut.keys), filter(shortcut.callback));

  shortcut.ref?.current?.addEventListener(shortcut.action ?? 'keypress', handler.handle);

  handlers.set(shortcut.ref?.current as HTMLElement, handler);
};

const removeElementShortcut = (shortcut: HotkeyShortcut) => {
  if (shortcut.ref?.current && !shortcut.disabled) {
    const handler = handlers.get(shortcut.ref?.current) as Handler;

    handler.remove(...extractKeys(shortcut.keys), filter(shortcut.callback));

    shortcut.ref?.current?.removeEventListener(shortcut.action ?? 'keypress', handler.handle);
  }
};

export const useHotkeys = (shortcuts: HotkeyShortcut[]) => {
  /**
   * Register global listeners for "keypress", "keyup" and "keydown" events
   */
  useLayoutEffect(() => {
    if (!isGlobalListenersBinded && window !== undefined) {
      window.addEventListener('keypress', keypressGlobalHandler.handle);
      window.addEventListener('keyup', keyupGlobalHandler.handle);
      window.addEventListener('keydown', keydownGlobalHandler.handle);

      isGlobalListenersBinded = true;
    }
  }, []);

  /**
   * Register shortcuts
   */
  useLayoutEffect(() => {
    shortcuts.map((shortcut) => {
      if (shortcut.disabled) {
        return;
      }

      if (shortcut.ref?.current) {
        registerElementShortcut(shortcut);
      } else if (!shortcut.ref) {
        registerGlobalShortcut(shortcut);
      }
    });

    // Remove all shortcuts on destroy
    return () => {
      shortcuts.map((shortcut) => {
        removeGlobalShortcut(shortcut);
        removeElementShortcut(shortcut);
      });
    };
  }, [shortcuts]);
};
