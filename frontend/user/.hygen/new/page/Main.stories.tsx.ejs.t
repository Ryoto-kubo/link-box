---
to: <%= features_path %>/<%= main %>/<%= main %>.stories.tsx
---
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { <%= h.changeCase.pascal(main) %> } from './<%=main %>'

const meta: ComponentMeta<typeof <%= h.changeCase.pascal(main) %>> = {
  component: <%= h.changeCase.pascal(main) %>,
  parameters: {
    controls: { expanded: true },
  },
  title:
    'features/<%= dir %>/<%=main %>/sandbox',
}
export default meta

const Template: ComponentStory<typeof <%= h.changeCase.pascal(main) %>> = () => (
  <<%= h.changeCase.pascal(main) %> />
)
export const Base = Template.bind({})
Base.parameters = {
  msw: {
    handlers: [],
  },
}
