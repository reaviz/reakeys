import { useEffect, useState } from 'react';
import Mousetrap, { ExtendedKeyboardEvent } from 'mousetrap';

export type HotkeyShortcuts = {
  name: string;
  category?: string;
  description?: string;
  keys: string | string[];
  ref?: any;
  hidden?: boolean;
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
      const mousetrap = k.ref?.current ? Mousetrap(k.ref.current) : Mousetrap;
      mousetrap.bind(k.keys, k.callback, k.action);
    });
  };

  const removeKeys = (nextKeys: HotkeyShortcuts[]) => {
    keys = keys.filter((k) => !nextKeys.includes(k));

    nextKeys.forEach((s) => {
      Mousetrap.unbind(s.keys, s.action);
    });
  };

  return () => {
    const [state, setState] = useState<HotkeyShortcuts[]>([]);

    useEffect(() => {
      setState(keys);
    }, []);

    return [state, addKeys, removeKeys] as [
      HotkeyShortcuts[],
      (keys: HotkeyShortcuts[]) => void,
      (keys: HotkeyShortcuts[]) => void
    ];
  };
};

export const useHotkeyState = createStateHook();
