import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.story.tsx'],
  // KNOWN ISSUE: addon-docs' jsxDecorator calls context.originalStoryFn() a
  // second time on every canvas render, re-running story hooks — stories that
  // call useHotkeys in the story body register handlers twice, so callbacks
  // fire twice per keypress IN THE STORYBOOK CANVAS ONLY (the published
  // library is unaffected; see src/useHotkeys.test.tsx for proof of correct
  // hook behavior). Tracked upstream:
  // https://github.com/storybookjs/storybook/issues/33584
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};

export default config;
