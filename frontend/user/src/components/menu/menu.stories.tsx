import type { Meta, StoryObj } from '@storybook/react';

import { Menu } from './index';

const meta: Meta<typeof Menu> = {
  component: Menu,
  parameters: {
    controls: { expanded: true },
  },
  title: 'components/menu',
};
export default meta;
type Story = StoryObj<typeof Menu>;

export const Base: Story = {
  args: {},
};
