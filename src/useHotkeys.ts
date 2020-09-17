import { createGlobalState, useEffectOnce } from 'react-use';
import Mousetrap from 'mousetrap';

type HotkeyShortcuts = {
  name: string;
  category?: string;
  description?: string;
  keys: string | string[];
  ref?: any;
  hidden?: boolean;
  callback: (e: ExtendedKeyboardEvent, combo: string) => void;
};

const keys = [];
const useHotkeysShortcuts = createGlobalState<HotkeyShortcuts[]>([]);

export const useHotkeys = (shortcuts?: HotkeyShortcuts[]) => {
  const [hotkeys, setHotkeys] = useHotkeysShortcuts();

  useEffectOnce(() => {
    if (shortcuts) {
      shortcuts.forEach((s) => {
        if (!keys.includes(s)) {
          const mousetrap = s.ref?.current
            ? Mousetrap(s.ref.current)
            : Mousetrap;

          mousetrap.bind(s.keys, s.callback);

          if (!keys.find((k) => k.name === s.name)) {
            keys.push(s);
          }
        }
      });

      setHotkeys(keys);
    }

    return () => {
      if (shortcuts) {
        shortcuts.forEach((s) => {
          Mousetrap.unbind(s.keys);

          const idx = keys.indexOf(s);
          if (idx > -1) {
            keys.splice(idx, 1);
          }
        });

        setHotkeys(keys);
      }
    };
  });

  return hotkeys as HotkeyShortcuts[];
};
