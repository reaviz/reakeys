type ModifierKey = '⌘' | 'CTRL';

export function isMac(): boolean {
  try {
    return navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  } catch {
    return false;
  }
}

function getModifierKey(): ModifierKey {
  return isMac() ? '⌘' : 'CTRL';
}

export const MODIFIER_KEY = getModifierKey();

export function getHotkeyText(hotkey: string) {
  return hotkey.toLowerCase().replace('modifier', getModifierKey()).replace('mod', getModifierKey()).replace('shift', '⇧');
}

/**
 * The key-matching handler reads `event.key.toLowerCase()` with no guard, so a
 * key event whose `key` is missing throws a TypeError out of our key
 * listeners. Some browser extensions and password managers dispatch synthetic
 * key events with no `key`, so wrap the handler to ignore those; real
 * keystrokes always carry a `key`.
 */
export const ignoreKeylessEvents =
  (handle: (event: KeyboardEvent) => void) =>
  (event: KeyboardEvent): void => {
    if (event.key == null) {
      return;
    }

    handle(event);
  };
