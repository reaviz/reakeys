import { RefObject, useEffect, useState } from 'react';
import Mousetrap, {
  ExtendedKeyboardEvent,
  MousetrapInstance,
  MousetrapStatic,
} from 'mousetrap';

export interface HotkeyShortcuts {
  name: string;
  category?: string;
  description?: string;
  keys: string | string[];
  ref?: RefObject<HTMLElement | null>;
  hidden?: boolean;
  disabled?: boolean;
  callback: (e: ExtendedKeyboardEvent, combo: string) => void;
  action?: 'keypress' | 'keydown' | 'keyup';
}

/**
 * Creates a global state singleton.
 */
const createStateHook = () => {
  const mousetraps = new Map<
    HTMLElement | undefined,
    MousetrapStatic | MousetrapInstance
  >();
  let keys: HotkeyShortcuts[] = [];

  const bindKeys = (nextKeys: HotkeyShortcuts[]) => {
    nextKeys.forEach((k) => {
      if (k.disabled) {
        return;
      }

      if (k.ref) {
        if (!k.ref.current) {
          // exit early if ref is provided but null
          // we do not want to attach global event handlers in this case
          return;
        }

        const element = k.ref.current;

        if (!mousetraps.has(element)) {
          mousetraps.set(element, new Mousetrap(element));
        }

        mousetraps.get(element)!.bind(k.keys, k.callback, k.action);
      } else {
        if (!mousetraps.get(undefined)) {
          mousetraps.set(undefined, Mousetrap);
        }

        mousetraps.get(undefined)!.bind(k.keys, k.callback, k.action);
      }
    });
  };

  const addKeys = (nextKeys: HotkeyShortcuts[]) => {
    keys = [...keys, ...nextKeys];

    bindKeys(nextKeys);
  };

  const removeKeys = (nextKeys: HotkeyShortcuts[]) => {
    // remove keys from the array
    keys = keys.filter((k) => !nextKeys.includes(k));

    // unbind mousetrap events
    nextKeys.forEach((k) => {
      if (k.ref) {
        if (!k.ref.current) {
          return;
        }

        mousetraps.get(k.ref.current)?.unbind(k.keys, k.action);
      } else {
        mousetraps.get(undefined)?.unbind(k.keys, k.action);
      }
    });

    // drop mousetrap instances that have no keys attached anymore
    for (const [element] of mousetraps) {
      if (element === undefined) {
        if (keys.some((k) => k.ref === undefined)) {
          continue;
        }
      } else {
        if (keys.some((k) => k.ref?.current === element)) {
          continue;
        }
      }

      mousetraps.delete(element);
    }

    // re-bind keys to restore listeners that were overwritten by the ones we just removed
    bindKeys(keys);
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
