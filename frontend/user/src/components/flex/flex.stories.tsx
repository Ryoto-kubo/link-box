import type { Meta, StoryObj } from '@storybook/react'

import { Flex } from './index'

const meta: Meta<typeof Flex> = {
  component: Flex,
  parameters: {
    controls: { expanded: true },
  },
  title: 'components/flex',
}
export default meta
type Story = StoryObj<typeof Flex>

export const Base: Story = {
  args: {},
}
