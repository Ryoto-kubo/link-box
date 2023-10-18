---
to: <%= abs_path %>/<%= component_name %>.stories.tsx
---

import type { Meta, StoryObj } from '@storybook/react';

import { <%= h.changeCase.pascal(component_name) %> } from './index'

const meta: Meta<typeof <%= h.changeCase.pascal(component_name) %>> = {
  component: <%= h.changeCase.pascal(component_name) %>,
  parameters: {
    controls: { expanded: true },
  },
  title: '<%= storybook_path %>',
}
export default meta
type Story = StoryObj<typeof Flex>;

export const Base: Story = {
  args: {},
}
