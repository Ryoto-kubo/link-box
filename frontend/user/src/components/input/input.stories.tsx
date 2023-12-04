import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './index';

const meta: Meta<typeof Input> = {
  component: Input,
  parameters: {
    controls: { expanded: true },
  },
  title: 'components/input',
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Base: Story = {
  args: {},
};
