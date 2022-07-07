import { RefObject, useEffect, useState } from 'react';
import Mousetrap, { ExtendedKeyboardEvent } from 'mousetrap';

export type HotkeyShortcuts = {
  name: string;
  category?: string;
  description?: string;
  keys: string | string[];
  ref?: RefObject<HTMLElement | null>;
  hidden?: boolean;
  disabled?: boolean;
  callback: (e: ExtendedKeyboardEvent, combo: string) => void;
  action?: 'keypress' | 'keydown' | 'keyup';
};

/**
 * Creates a global state singleton.
 */
const createStateHook = () => {
  let keys: HotkeyShortcuts[] = [];

  const addKeys = (nextKeys: HotkeyShortcuts[]) => {
    keys = [...keys, ...nextKeys];

    nextKeys.forEach((k) => {
      if (!k.disabled) {
        const mousetrap = k.ref?.current ? Mousetrap(k.ref.current) : Mousetrap;
        mousetrap.bind(k.keys, k.callback, k.action);
      }
    });
  };

  const removeKeys = (nextKeys: HotkeyShortcuts[]) => {
    keys = keys.filter((k) => !nextKeys.includes(k));
    nextKeys.forEach((s) => Mousetrap.unbind(s.keys, s.action));
  };

  return () => {
    const [state, setState] = useState<HotkeyShortcuts[]>([]);

    useEffect(() => {
      setState(keys);
    }, []);

    return [state, addKeys, removeKeys] as const;
  };
};

export const useHotkeyState = createStateHook();
