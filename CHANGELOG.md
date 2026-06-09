# 2.1.0 - 6/9/26
- [breaking] ESM-only build — dropped the UMD/CommonJS output (`require` no longer resolves) and modernized the dev toolchain (Vite 8, Vitest 4.1, Storybook 10.4, ESLint 10, React 19, Node 22 CI) #38
- [docs] Add a CLAUDE.md guide for AI assistants #37

# 2.0.6 - 4/14/25
- [feature] Add a `mod` alias for the platform modifier key and lowercase the input in `getHotkeyText` #36

# 2.0.5 - 2/3/25
- [fix] Use the named `{ keys }` export from ctrl-keys #35

# 2.0.4 - 1/28/25
- [fix] Make element-shortcut removal null-safe and switch to `import type` / `HandlerInterface` from ctrl-keys #34

# 2.0.3 - 6/24/24
- [chore] Bump the ctrl-keys dependency #32

# 2.0.2 - 5/8/24
- [fix] SSR-safe modifier detection — recompute the modifier at call time and stop warning when `navigator` is undefined #31

# 2.0.1 - 4/30/24
- [fix] Fix a dependency error

# 2.0.0 - 2/29/24
- [breaking] Migrate the key engine from Mousetrap to ctrl-keys

# 1.3.1 - 6/14/23
- [fix] Fix the package `exports` map

# 1.3.0 - 6/1/23
- [chore] Migrate the build to Vite and update Storybook

# 1.2.10 - 5/15/23
- [fix] Guard against `navigator` being undefined during SSR (Next.js)

# 1.2.9 - 7/20/22
- [feature] Add the `getHotkeyText` helper and use a global Mousetrap instance for global events

# 1.2.8 - 7/20/22
- [fix] Revert the listener-restore change from 1.2.7

# 1.2.7 - 7/18/22
- [fix] Track a Mousetrap instance per shortcut, restore overwritten listeners, and improve types

# 1.2.6 - 11/8/21
- [fix] Revert the per-shortcut Mousetrap caching from 1.2.3 and improve types

# 1.2.5 - 11/3/21
- [fix] Revert the keys-change state update from 1.2.4

# 1.2.4 - 11/3/21
- [fix] Trigger state updates when a shortcut's keys change

# 1.2.3 - 11/3/21
- [feature] Cache the Mousetrap instance per shortcut and only unbind shortcuts that were bound

# 1.2.2 - 10/6/21
- [chore] Refine the HotkeyShortcuts interface and update examples

# 1.2.1 - 10/4/21
- [fix] Memoize the hotkeys array so dependent effects don't re-run unnecessarily

# 1.2.0 - 8/23/21
- [feature] Add the `action` (keypress/keydown/keyup) and `disabled` options

# 1.1.0 - 12/9/20
- [chore] Remove SCSS, upgrade dependencies, and fix a state-update issue

# 1.0.2 - 11/17/20
- [fix] Fix type imports and rename the state module to `useHotkeyState`

# 1.0.1 - 9/29/20
- [chore] Add Storybook and extract the hotkey state module

# 1.0.0 - 9/16/20
- [feature] Initial release — `useHotkeys` hook powered by Mousetrap
