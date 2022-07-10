import { RefObject, useEffect, useState } from 'react';
import Mousetrap, {
  ExtendedKeyboardEvent,
  MousetrapInstance,
  MousetrapStatic,
} from 'mousetrap';

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
  const mousetraps = new Map<
    HTMLElement | undefined,
    MousetrapStatic | MousetrapInstance
  >();
  let keys: HotkeyShortcuts[] = [];

  const addKeys = (nextKeys: HotkeyShortcuts[]) => {
    keys = [...keys, ...nextKeys];

    nextKeys.forEach((k) => {
      if (k.ref && !k.ref.current) {
        // exit early if ref is provided but null
        // we do not want to attach global event handlers in this case
        return;
      }

      if (k.disabled) {
        return;
      }

      const element = k.ref?.current ?? undefined;

      if (!mousetraps.has(element)) {
        mousetraps.set(element, new Mousetrap(element));
      }

      const mousetrap = mousetraps.get(element)!;
      mousetrap.bind(k.keys, k.callback, k.action);
    });
  };

  const removeKeys = (nextKeys: HotkeyShortcuts[]) => {
    // remove keys from the array
    keys = keys.filter((k) => !nextKeys.includes(k));

    // unbind mousetrap events
    nextKeys.forEach((k) => {
      const element = k.ref?.current ?? undefined;
      const mousetrap = mousetraps.get(element)!;
      mousetrap.unbind(k.keys, k.action);
    });

    // drop mousetrap instances that became unused
    for (const [element] of mousetraps) {
      if (
        keys.some((k) => {
          const kElement = k.ref ? k.ref.current : undefined;
          return kElement === element;
        })
      ) {
        // do not drop if there's at least one key that's still relying on this instance
        continue;
      }

      mousetraps.delete(element);
    }
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
