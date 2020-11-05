<p align="center">
  <h1>⌨️ reakeys</h1>
  <br />
  React Hook for Mousetrap Hotkeys
  <br /><br />
  <a href="https://github.com/reaviz/reakeys/workflows/build/">
    <img src="https://github.com/reaviz/reakeys/workflows/build/badge.svg?branch=master" />
  </a>
  <a href="https://npm.im/reakeys">
    <img src="https://img.shields.io/npm/v/reakeys.svg" />
  </a>
  <a href="https://npm.im/reakeys">
    <img src="https://badgen.net/npm/dw/reakeys" />
  </a>
  <a href="https://github.com/realayers/reakeys/blob/master/LICENSE">
    <img src="https://badgen.now.sh/badge/license/apache2" />
  </a>
  <a href="https://bundlephobia.com/result?p=reakeys">
    <img src="https://badgen.net/bundlephobia/minzip/reakeys">
  </a>
  <a href="https://discord.gg/Jt4YBq5e">
    <img src="https://img.shields.io/discord/773948315037073409?label=discord">
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
with all the options. Below is an example of how to make
a dialog using realayers:

```jsx
import React, { useState, FC, useCallback } from 'react';
import { Dialog } from 'shared/Dialog';
import { useHotkeys } from 'reakeys';
import groupBy from 'lodash/groupBy';
import sortBy from 'lodash/sortBy';

const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

export const HotkeyCombos: FC = () => {
  const hotkeys = useHotkeys();
  const categories = groupBy(hotkeys, 'category');

  const sorted = Object.keys(categories).reduce((prev, cur) => {
    const category = sortBy(categories[cur], 'name');
    const label = cur === 'undefined' ? 'General' : cur;

    return {
      ...prev,
      [label]: category.filter(k => !k.hidden)
    };
  }, {});

  const { General, ...rest } = sorted as any;
  const others = sortBy(Object.keys(rest || {}));

  const renderKeyCode = useCallback(keyCode => {
    const wrapped = Array.isArray(keyCode) ? keyCode : [keyCode];
    const formatted = wrapped.map(k => k.replace('mod', isMac ? '⌘' : 'CTRL'));

    return (
      <div className={css.keyComboContainer}>
        {formatted.map((k, i) => (
          <kbd key={i} className={css.keyCombo}>
            {k}
          </kbd>
        ))}
      </div>
    );
  }, []);

  const renderGroups = useCallback(
    group => {
      if (!sorted[group]) {
        return null;
      }

      return (
        <div key={group}>
          <h3>{group}</h3>
          <ul className={css.list}>
            {sorted[group].map(kk => (
              <li key={kk.name} className={css.listItem}>
                <label>{kk.name}</label>
                {renderKeyCode(kk.keys)}
                {kk.description && <p>{kk.description}</p>}
              </li>
            ))}
          </ul>
        </div>
      );
    },
    [renderKeyCode, sorted]
  );

  return (
    <div className={css.groups}>
      {renderGroups('General')}
      {others.map(renderGroups)}
    </div>
  );
};

export const HotkeyDialog: FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useHotkeys([
    {
      name: 'Hotkey Dialog',
      keys: 'SHIFT+?',
      hidden: true,
      callback: () => setVisible(true)
    }
  ]);

  return (
    <Dialog
      size="800px"
      header="Hotkeys"
      open={visible}
      onClose={() => setVisible(false)}
    >
      {() => <HotkeyCombos />}
    </Dialog>
  );
};
```
