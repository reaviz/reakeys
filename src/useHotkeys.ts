import { RefObject, useEffect, useLayoutEffect, useState } from 'react';
import type { Callback, HandlerInterface, Key } from 'ctrl-keys';
import keys from 'ctrl-keys';

type Keys = [Key] | [Key, Key] | [Key, Key, Key] | [Key, Key, Key, Key];

export interface HotkeyShortcuts {
  name: string;
  keys: string | string[];
  ref?: RefObject<HTMLElement | null>;
  disabled?: boolean;
  callback: Callback;
  action?: 'keypress' | 'keydown' | 'keyup';
  description?: string;
  category?: string;
  hidden?: boolean;
}

let isGlobalListenersBinded = false;

const keypressGlobalHandler = keys();
const keyupGlobalHandler = keys();
const keydownGlobalHandler = keys();

/**
 * Map of specific elements handlers
 */
const handlers = new Map<HTMLElement, HandlerInterface>();
let hotkeys: HotkeyShortcuts[] = [];

const extractKeys = (keys: string | string[]): Keys => {
  return (Array.isArray(keys) ? keys.map((key) => key.toLowerCase()) : [keys.toLowerCase()]) as Keys;
};

const focusInputWrapper = (callback: Callback) => (event: any) => {
  const target = event.target;

  const isInput = target.tagName === 'INPUT' && !['checkbox', 'radio', 'range', 'button', 'file', 'reset', 'submit', 'color'].includes(target.type);
  if (target.isContentEditable || ((isInput || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') && !target.readOnly)) {
    return;
  }

  return callback(event);
};

const registerGlobalShortcut = (shortcut: HotkeyShortcuts) => {
  if (!shortcut.action || shortcut.action === 'keypress') {
    keypressGlobalHandler.add(...extractKeys(shortcut.keys), shortcut.callback);
  }
  if (shortcut.action === 'keyup') {
    keyupGlobalHandler.add(...extractKeys(shortcut.keys), shortcut.callback);
  }
  if (shortcut.action === 'keydown') {
    keydownGlobalHandler.add(...extractKeys(shortcut.keys), shortcut.callback);
  }
};

const removeGlobalShortcut = (shortcut: HotkeyShortcuts) => {
  if (!shortcut.action || shortcut.action === 'keypress') {
    keypressGlobalHandler.remove(...extractKeys(shortcut.keys), shortcut.callback);
  }
  if (shortcut.action === 'keyup') {
    keyupGlobalHandler.remove(...extractKeys(shortcut.keys), shortcut.callback);
  }
  if (shortcut.action === 'keydown') {
    keydownGlobalHandler.remove(...extractKeys(shortcut.keys), shortcut.callback);
  }
};

const registerElementShortcut = (shortcut: HotkeyShortcuts) => {
  const handler = keys();

  handler.add(...extractKeys(shortcut.keys), shortcut.callback);

  shortcut.ref?.current?.addEventListener(shortcut.action ?? 'keypress', handler.handle);

  handlers.set(shortcut.ref?.current as HTMLElement, handler);
};

const removeElementShortcut = (shortcut: HotkeyShortcuts) => {
  if (shortcut.ref?.current && !shortcut.disabled) {
    const handler = handlers.get(shortcut.ref?.current) as HandlerInterface;

    handler?.remove(...extractKeys(shortcut.keys), shortcut.callback);
    shortcut.ref?.current?.removeEventListener(shortcut.action ?? 'keypress', handler.handle);
  }
};

export const useHotkeys = (shortcuts: HotkeyShortcuts[] = []) => {
  const [registered, setRegistered] = useState<HotkeyShortcuts[]>([]);
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

      // Wrap callback in input focus wrapper to avoid trigger shortcut for input
      shortcut.callback = focusInputWrapper(shortcut.callback);

      if (shortcut.ref?.current) {
        registerElementShortcut(shortcut);
        hotkeys = [...hotkeys, shortcut];
      } else if (!shortcut.ref) {
        registerGlobalShortcut(shortcut);
        hotkeys = [...hotkeys, shortcut];
      }
    });

    // Remove all shortcuts on destroy
    return () => {
      shortcuts.map((shortcut) => {
        removeElementShortcut(shortcut);
        removeGlobalShortcut(shortcut);
        hotkeys = hotkeys.filter((hotkey) => shortcut !== hotkey);
      });
    };
  }, [shortcuts]);

  useEffect(() => {
    setRegistered(hotkeys);
  }, []);

  return registered;
};
