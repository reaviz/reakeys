import { Preview } from '@storybook/react';
import theme from './theme';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: { hideNoControlsWarning: true },
    docs: {
      theme
    },
  }
};

export default preview;
