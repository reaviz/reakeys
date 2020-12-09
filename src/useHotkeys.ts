import { createRef, useLayoutEffect, useRef } from 'react';
import { HotkeyShortcuts, useHotkeyState } from './useHotkeyState';

export const useHotkeys = (shortcuts?: HotkeyShortcuts[]) => {
  const [keys, addKeys, removeKeys] = useHotkeyState();

  useLayoutEffect(() => {
    if (shortcuts) {
      addKeys(shortcuts);
    }

    return () => {
      if (shortcuts) {
        removeKeys(shortcuts);
      }
    };
  }, [shortcuts]);

  return keys.reduce((agg, cur) => {
    if (!agg.find((a) => a.keys === cur.keys && a.ref && cur.ref)) {
      agg.push(cur);
    }
    return agg;
  }, []);
};
