# CLAUDE.md - AI Assistant Guide for reakeys

## Project Overview

**reakeys** is a React hotkeys library that provides a `useHotkeys` hook for registering keyboard shortcuts in React applications. It wraps the `ctrl-keys` library and provides a simple, declarative API for managing keyboard shortcuts with support for global and element-scoped bindings.

- **Version**: 2.0.6
- **License**: Apache-2.0
- **Package Type**: ES Module
- **React Compatibility**: React 16+

## Codebase Structure

```
reakeys/
├── src/                    # Source code
│   ├── index.ts           # Main exports
│   ├── useHotkeys.ts      # Core hook implementation
│   ├── utils.ts           # Utility functions (isMac, getHotkeyText, MODIFIER_KEY)
│   └── Hotkey.story.tsx   # Storybook stories for testing/demos
├── .storybook/            # Storybook configuration
│   ├── main.ts            # Storybook main config
│   ├── preview.tsx        # Storybook preview config
│   ├── theme.ts           # Storybook theme
│   └── manager.ts         # Storybook manager config
├── .github/               # GitHub configuration
│   └── workflows/         # CI/CD workflows
│       ├── build.yml      # PR build workflow
│       ├── release.yml    # Release workflow
│       └── npm-publish.yml # NPM publish workflow
├── dist/                  # Build output (generated)
├── vite.config.ts         # Vite build configuration
├── tsconfig.json          # TypeScript configuration
├── .eslintrc.js           # ESLint configuration
├── .prettierrc            # Prettier configuration
└── package.json           # Project dependencies and scripts
```

## Key Source Files

### `src/useHotkeys.ts`
The main React hook that manages keyboard shortcuts. Key features:
- Registers global event listeners for `keypress`, `keyup`, and `keydown`
- Supports element-scoped shortcuts via `ref` property
- Automatically ignores shortcuts when typing in input fields
- Uses `ctrl-keys` library for key handling
- Manages a global `hotkeys` array for tracking all registered shortcuts

### `src/utils.ts`
Utility functions:
- `isMac()`: Detects macOS platform
- `getHotkeyText(hotkey)`: Formats hotkey string for display (e.g., `mod+shift+a` → `⌘+⇧+a`)
- `MODIFIER_KEY`: Platform-specific modifier key symbol (`⌘` on Mac, `CTRL` elsewhere)

### `src/index.ts`
Simple re-export of `useHotkeys` and `utils`.

## Development Commands

```bash
# Install dependencies
yarn install

# Start Storybook dev server (port 9009)
yarn start

# Build library for production
yarn build

# Build Storybook
yarn build-storybook

# Run tests
yarn test

# Run tests with coverage
yarn test:coverage

# Lint code
yarn lint

# Fix lint issues
yarn lint:fix

# Format code with Prettier
yarn prettier

# Run Chromatic visual tests
yarn chromatic
```

## Architecture & Key Concepts

### HotkeyShortcuts Interface
```typescript
interface HotkeyShortcuts {
  name: string;                           // Required: Shortcut name
  keys: string | string[];                // Required: Key combo(s)
  callback: Callback;                     // Required: Handler function
  ref?: RefObject<HTMLElement | null>;    // Optional: Element scope
  disabled?: boolean;                     // Optional: Disable shortcut
  action?: 'keypress' | 'keydown' | 'keyup'; // Optional: Event type
  description?: string;                   // Optional: Description
  category?: string;                      // Optional: Category grouping
  hidden?: boolean;                       // Optional: Hide from listing
}
```

### Key Modifiers
- `mod` or `modifier`: Platform-specific (Meta on Mac, Ctrl elsewhere)
- `meta`: Meta key (Command on Mac)
- `ctrl`: Control key
- `shift`: Shift key
- `alt`: Alt key

### Global vs Element-Scoped Shortcuts
- **Global**: No `ref` property - listens on `window`
- **Element-scoped**: With `ref` property - listens on the referenced element

### Input Focus Handling
Shortcuts are automatically disabled when:
- User is typing in an `<input>` (except checkbox, radio, button types)
- User is typing in a `<textarea>`
- User is typing in a `<select>`
- Element has `contentEditable` enabled

## Code Style & Conventions

### TypeScript
- Target: ES2015
- Module: ESNext
- Strict mode enabled
- JSX: React

### ESLint
- Extends: `eslint:recommended`, `plugin:react/recommended`, `plugin:react-hooks/recommended`, `prettier`
- Parser: `@typescript-eslint/parser`

### Prettier
- Semicolons: Yes
- Single quotes: Yes

### Pre-commit Hooks
Uses Husky + lint-staged to run Prettier on staged files before commit.

## Testing

- Test framework: Vitest
- Environment: jsdom
- Currently configured with `--passWithNoTests` flag
- Stories in `*.story.tsx` files serve as visual integration tests via Chromatic

## Build System

Uses Vite with two modes:
1. **Library mode** (`yarn build`): Builds for npm distribution
   - Output formats: ES module (`dist/index.js`) and UMD (`dist/index.umd.cjs`)
   - Generates TypeScript declarations
   - External peer dependencies (React, React DOM)

2. **Development mode** (`yarn start`): Runs Storybook for development

## Common Tasks for AI Assistants

### Adding a New Feature
1. Modify `src/useHotkeys.ts` for hook behavior changes
2. Update `src/utils.ts` for utility functions
3. Add story to `src/Hotkey.story.tsx` for demonstration
4. Export new items from `src/index.ts`
5. Run `yarn lint:fix` and `yarn prettier`
6. Test with `yarn test` and `yarn start`

### Debugging Shortcuts
- Check if shortcut uses correct key format (lowercase recommended)
- Verify `mod` vs `meta` vs `ctrl` for cross-platform compatibility
- Check if input focus wrapper is interfering
- Ensure `disabled` is not set to `true`
- For element-scoped: verify `ref` is attached and element is focusable

### Adding Stories
Create stories in `src/Hotkey.story.tsx` following existing patterns:
```tsx
export const MyStory = () => {
  const hotkeys = useHotkeys([{
    name: 'MyShortcut',
    keys: 'SHIFT+A',
    callback: () => alert('Pressed!')
  }]);
  return <div>Press SHIFT + A</div>;
};
```

## Dependencies

### Runtime
- `ctrl-keys`: Core keyboard event handling library

### Peer Dependencies
- `react`: >=16
- `react-dom`: >=16

## CI/CD

- **build.yml**: Runs on PRs to master - builds library and Storybook
- **release.yml**: Release automation
- **npm-publish.yml**: Publishes to npm registry

## Notes for AI Assistants

1. This is a minimal, focused library - avoid adding unnecessary features
2. Cross-platform compatibility is important (Mac vs Windows/Linux)
3. The `mod` alias is key for cross-platform shortcuts
4. Stories serve as both documentation and visual regression tests
5. Keep the API simple and React-idiomatic
6. Shortcuts should not interfere with form inputs by default
