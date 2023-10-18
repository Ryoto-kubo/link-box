---
to: <%= features_path %>/index.page.stories.tsx
---
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { setLocalStorage } from '@src/utils'

import { <%= h.changeCase.pascal(page_name) %> } from './index'

const LocalComponent = () => {
  setLocalStorage({})
  return <<%= h.changeCase.pascal(page_name) %> />
}

const meta: ComponentMeta<typeof LocalComponent> = {
  component: LocalComponent,
  parameters: {
    controls: { expanded: true },
  },
  title: 'features/<%= dir %>/page/sandbox',
}
export default meta

const Template: ComponentStory<typeof LocalComponent> = () => <LocalComponent />
export const Base = Template.bind({})
