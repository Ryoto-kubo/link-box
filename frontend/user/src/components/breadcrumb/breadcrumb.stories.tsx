import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumb } from './index';

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
  parameters: {
    controls: { expanded: true },
  },
  title: 'components/breadcrumb',
};
export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Base: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Product 1', href: '/products/1' },
    ],
  },
};
