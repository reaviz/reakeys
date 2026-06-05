import { Preview } from '@storybook/react-vite';
import theme from './theme';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    docs: {
      theme,
      codePanel: true,
    },
  },
};

export default preview;
