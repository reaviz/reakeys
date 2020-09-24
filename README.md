# ⌨️ React Hotkeys Hook
React Hook for [Mousetrap](https://www.npmjs.com/package/mousetrap)

## 🚀 Quick Links

- Checkout the [demos](https://chromatic.com/library?appId=5f6c9043bb0f530022c5df01&branch=master)

## 📦 Usage

Install via NPM:

```
yarn add reakeys
```

Then in your component, just add the `useHotkeys` hook
and specify your keys like:

```js
import React, { FC } from 'react';
import { useHotkeys } from 'reakeys';

export const YourComponent: FC = () => {
  useHotkeys([
    {
      name: 'Dashboard',
      keys: 'mod+shift+d',
      category: 'Navigation',
      callback: event => {
        event.preventDefault();
        history.push('/dashboard');
      }
    }
  ]);
};
```

Below are the options you can set in the hook array:

```ts
type HotkeyShortcuts = {
  name: string;
  category?: string;
  description?: string;
  keys: string | string[];
  ref?: any;
  hidden?: boolean;
  callback: (e: ExtendedKeyboardEvent, combo: string) => void;
}
```

You can also get all the hotkeys that registered by just calling
the `useHotkeys` hook and it will return the current hotkeys.

```ts
const hotkeys = useHotkeys();
```

This is useful for creating a dialog to present the user
with all the options.
