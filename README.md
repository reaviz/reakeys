<div align="center">
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
  <a href="https://discord.gg/tt8wGExq35">
    <img src="https://img.shields.io/discord/773948315037073409?label=discord">
  </a>
</div>

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
  disabled?: boolean;
  callback: (e: ExtendedKeyboardEvent, combo: string) => void;
  action?: 'keypress'| 'keydown'| 'keyup';
};
```

You can also get all the hotkeys that are registered by just
calling the `useHotkeys` hook and it will return the current
hotkeys.

```ts
const hotkeys = useHotkeys();
```

This is useful for creating a dialog to present the user
with all the options. Below is an example of how to make
a dialog using [realayers](https://github.com/reaviz/realayers):

```jsx
import React, { useState, FC, useCallback, useMemo } from 'react';
import { Dialog } from 'realayers';
import { useHotkeys, getHotkeyText } from 'reakeys';
import groupBy from 'lodash/groupBy';
import sortBy from 'lodash/sortBy';

export const HotkeyCombos: FC = () => {
  // useHotkeys returns the same object if the hotkeys haven't changed, meaning
  // that you can use useMemo to avoid expensive recalculation in that case.
  //
  // Note that the object will change if another component passes a different
  // object to their useHotkeys, even if that component doesn't actually change
  // anything. In React <18, it will cause two re-renders in a row.
  //
  // There is another long comment at the bottom of this example explaining why
  // useMemo is important.

  const hotkeys = useHotkeys();
  const categories = useMemo(() => groupBy(hotkeys, 'category'), [hotkeys]);

  const sorted = useMemo(() => Object.keys(categories).reduce((prev, cur) => {
    const category = sortBy(categories[cur], 'name');
    const label = cur === 'undefined' ? 'General' : cur;

    return {
      ...prev,
      [label]: category.filter(k => !k.hidden)
    };
  }, {}), [categories]);

  const { General, ...rest } = sorted as any;
  const others = sortBy(Object.keys(rest || {}));

  const renderKeyCode = useCallback(keyCode => {
    const wrapped = Array.isArray(keyCode) ? keyCode : [keyCode];
    const formatted = wrapped.map(k => getHotkeyText(k));

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
  const openDialog = useCallback(() => setVisible(true), [setVisible]);
  const closeDialog = useCallback(() => setVisible(false), [setVisible]);

  // If your hotkeys haven't changed, it's important to provide the same object
  // to useHotkeys, or else it will remove and replace your hotkeys.
  //
  // That isn't always a bad thing, and works perfectly fine, but it would cause
  // unnecessary updates if other components also call useHotkeys() to retrieve
  // the list of hotkeys, because this component would update it every render.
  //
  // Ideally, you should only change the object passed to useHotkeys when the
  // actual hotkeys have changed (name for instance, when using i18n).
  // useMemo is good for this.

  useHotkeys(useMemo(() => [
    {
      name: 'Hotkey Dialog',
      keys: 'SHIFT+?',
      hidden: true,
      callback: openDialog
    }
  ], [openDialog]));

  const combosRenderer = useCallback(() => <HotkeyCombos />, [HotkeyCombos]);

  return (
    <Dialog
      size="800px"
      header="Hotkeys"
      open={visible}
      onClose={closeDialog}
    >
      {combosRenderer}
    </Dialog>
  );
};
```

You can also get a formatted version of the hotkey combo text:

```ts
import { getHotkeyText } from 'reakeys';

getHotkeyText('mod+shift+a'); //=> '⌘+⇧+a'
```

## 🔭 Development

If you want to run reakeys locally, its super easy!

- Clone the repo
- `yarn install`
- `yarn start`
- Browser opens to Storybook page

## ❤️ Contributors

Thanks to all our contributors!

<a href="https://github.com/reaviz/reakeys/graphs/contributors"><img src="https://opencollective.com/reaviz/contributors.svg?width=890" /></a>
