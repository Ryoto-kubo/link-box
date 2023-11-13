import type { Meta, StoryObj } from '@storybook/react';

import Sidebar from './sidebar';

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  parameters: {
    controls: { expanded: true },
  },
  title: 'components/sidebar',
};
export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Base: Story = {
  args: {},
};
