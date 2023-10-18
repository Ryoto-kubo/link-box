---
to: <%= abs_path %>/<%= component_name %>.stories.tsx
---

import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { <%= h.changeCase.pascal(component_name) %> } from './index'

const meta: ComponentMeta<typeof <%= h.changeCase.pascal(component_name) %>> = {
  component: <%= h.changeCase.pascal(component_name) %>,
  parameters: {
    controls: { expanded: true },
  },
  title: '<%= storybook_path %>/sandbox',
}
export default meta

export const Base: ComponentStoryObj<typeof <%= h.changeCase.pascal(component_name) %>> = {
  args: {},
}
