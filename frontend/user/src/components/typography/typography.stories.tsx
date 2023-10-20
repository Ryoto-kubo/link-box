import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './index';

const meta: Meta<typeof Typography> = {
  component: Typography,
  parameters: {
    controls: { expanded: true },
  },
  title: 'components/typography',
  argTypes: {
    variant: {
      options: ['h1', 'h2', 'title'],
      control: { type: 'radio' },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Typography>;

export const Base: Story = {
  args: {
    variant: 'h1',
    children: 'Typography',
  },
};
