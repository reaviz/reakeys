let isMac: boolean = false;
try {
  isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
} catch {
  // Ignore
}

export const MODIFIER_KEY = isMac ? '⌘' : 'CTRL';

export function getHotkeyText(hotkey: string) {
  return hotkey
    .replace('modifier', MODIFIER_KEY)
    .replace('mod', MODIFIER_KEY)
    .replace('shift', '⇧');
}
