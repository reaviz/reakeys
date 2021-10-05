import { RefObject, useEffect, useState, useMemo } from 'react';
import Mousetrap, { ExtendedKeyboardEvent, MousetrapInstance, MousetrapStatic } from 'mousetrap';

export type HotkeyShortcuts = {
  name: string;
  category?: string;
  description?: string;
  keys: string | string[];
  ref?: RefObject<HTMLElement | null>;
  hidden?: boolean;
  disabled?: boolean;
  callback: (e: ExtendedKeyboardEvent, combo: string) => void;
};

const mousetraps: WeakMap<HTMLElement, MousetrapInstance> = new WeakMap();

const getMousetrap = ((element: HTMLElement | null | undefined) => {
  if (element) {
    let mousetrap = mousetraps.get(element);
    
    if (!mousetrap) {
      mousetrap = Mousetrap(element);
      mousetraps.set(element, mousetrap);
    }

    return mousetrap;
  }
  
  return Mousetrap;
}) as ((element: HTMLElement) => MousetrapInstance) | ((element: null | undefined) => MousetrapStatic)

/**
 * Creates a global state singleton.
 */
const createStateHook = () => {
  let keys: HotkeyShortcuts[] = [];

  const addKeys = (nextKeys: HotkeyShortcuts[]) => {
    keys = [...keys, ...nextKeys];

    nextKeys.forEach((k) => {
      if (!k.disabled) {
        getMousetrap(k.ref?.current).bind(k.keys, k.callback);
      }
    });
  };

  const removeKeys = (nextKeys: HotkeyShortcuts[]) => {
    keys = keys.filter((k) => !nextKeys.includes(k));
    nextKeys.forEach((s) => Mousetrap.unbind(s.keys));
  };

  return () => {
    const [state, setState] = useState<HotkeyShortcuts[]>(keys);
    useEffect(() => setState(keys), [keys]);

    return useMemo(() => [state, addKeys, removeKeys] as [
      HotkeyShortcuts[],
      (keys: HotkeyShortcuts[]) => void,
      (keys: HotkeyShortcuts[]) => void
    ], [state]);
  };
};

export const useHotkeyState = createStateHook();
