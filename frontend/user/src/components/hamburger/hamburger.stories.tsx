import type { Meta, StoryObj } from '@storybook/react'

import { Hamburger } from './index'

const meta: Meta<typeof Hamburger> = {
  component: Hamburger,
  parameters: {
    controls: { expanded: true },
  },
  title: 'components/hamburger',
}

export default meta
type Story = StoryObj<typeof Hamburger>

export const Base: Story = {
  args: {},
}
