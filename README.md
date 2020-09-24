<p align="center">
  <h1>⌨️ reakeys</h1>
  <br />
  React Hook for Mousetrap
  <br /><br />
  <a href="https://npm.im/realayers">
    <img src="https://img.shields.io/npm/v/reakeys.svg" />
  </a>
  <a href="https://npm.im/realayers">
    <img src="https://badgen.net/npm/dw/reakeys" />
  </a>
  <a href="https://github.com/realayers/reakeys/blob/master/LICENSE">
    <img src="https://badgen.now.sh/badge/license/apache2" />
  </a>
  <a href="https://bundlephobia.com/result?p=reakeys">
    <img src="https://badgen.net/bundlephobia/minzip/reakeys">
  </a>
</p>

---

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
