import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './index'

const meta: Meta<typeof Typography> = {
  component: Typography,
  parameters: {
    controls: { expanded: true },
  },
  title: 'components/typography',
}
export default meta
type Story = StoryObj<typeof Flex>;

export const Base: Story = {
  args: {},
}
