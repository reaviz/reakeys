import { useEffect, useState } from 'react';
import Mousetrap from 'mousetrap';

export type HotkeyShortcuts = {
  name: string;
  category?: string;
  description?: string;
  keys: string | string[];
  ref?: any;
  hidden?: boolean;
  callback: (e: ExtendedKeyboardEvent, combo: string) => void;
};

/**
 * Creates a global state singleton.
 * Ref: https://stackoverflow.com/questions/57602715/react-custom-hooks-fetch-data-globally-and-share-across-components
 */
const createStateHook = (initialVal = []) => {
  let keys: HotkeyShortcuts[] = initialVal;
  let observers: React.Dispatch<React.SetStateAction<HotkeyShortcuts[]>>[] = [];

  const addKeys = (nextKeys: HotkeyShortcuts[]) => {
    keys = [...keys, ...nextKeys];

    nextKeys.forEach((k) => {
      const mousetrap = k.ref?.current ? Mousetrap(k.ref.current) : Mousetrap;

      mousetrap.bind(k.keys, k.callback);
    });

    observers.forEach((update) => update(keys));
  };

  const removeKeys = (nextKeys: HotkeyShortcuts[]) => {
    keys = keys.filter((k) => !nextKeys.includes(k));

    nextKeys.forEach((s) => {
      Mousetrap.unbind(s.keys);
    });

    observers.forEach((update) => update(keys));
  };

  return () => {
    const [keysState, setKeysState] = useState<HotkeyShortcuts[]>(keys);

    useEffect(() => {
      observers.push(setKeysState);
      setKeysState(keys);

      return () => {
        observers = observers.filter((update) => update !== setKeysState);
      };
    }, [keysState]);

    return [keys, addKeys, removeKeys] as [
      HotkeyShortcuts[],
      (keys: HotkeyShortcuts[]) => void,
      (keys: HotkeyShortcuts[]) => void
    ];
  };
};

export const useHotkeyState = createStateHook();
