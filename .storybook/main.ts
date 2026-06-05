import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.story.tsx'],
  // NOTE: @storybook/addon-docs is deliberately NOT installed: its jsxDecorator
  // calls context.originalStoryFn() a second time on every render (even when
  // source rendering is skipped), which re-runs story hooks — useHotkeys
  // registered twice and handlers fired twice per keypress. Re-add it (for the
  // docs Code Panel) once fixed upstream:
  // https://github.com/storybookjs/storybook/issues/33584
  addons: [],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};

export default config;
