type ModifierKey = '⌘' | 'CTRL';

function isMac(): boolean {
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
  return hotkey.replace('modifier', getModifierKey()).replace('mod', getModifierKey()).replace('shift', '⇧');
}
