---
to: <%= page_path %>/test.page.stories.tsx
---
import { expect } from '@storybook/jest'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { waitFor } from '@storybook/testing-library'

import { PATHS } from '@src/consts'
import { setLocalStorage } from '@src/utils'

import Page from './index.page'

const LocalComponent = ({
  isBookkeeper,
  isGeneralUser,
  isViewer,
}: {
  isBookkeeper: boolean
  isGeneralUser: boolean
  isViewer: boolean
}) => {
  setLocalStorage({
    isBookkeeper,
    isGeneralUser,
    isViewer,
  })

  return <Page />
}

const meta: ComponentMeta<typeof LocalComponent> = {
  component: LocalComponent,
  parameters: {
    controls: { expanded: true },
    msw: {
      // Define handlers if necessary
    },
    nextRouter: {
      pathname: '/<%= dir %>',
    },
  },
  title: 'pages/<%= dir %>/test',
}
export default meta

export const RedirectRulesForBookkeeper: ComponentStoryObj<
  typeof LocalComponent
> = {
  args: {
    isBookkeeper: true,
  },
}
RedirectRulesForBookkeeper.storyName = 'Redirect rules for bookkeeper'
RedirectRulesForBookkeeper.play = async () => {
  await waitFor(() =>
    expect(document.location.pathname).toEqual(
      // Define redirect destinations
    )
  )
}

export const RedirectRulesForViewer: ComponentStoryObj<typeof LocalComponent> = {
  args: {
    isViewer: true,
  },
}
RedirectRulesForViewer.storyName = 'Redirect rules for viewer'
RedirectRulesForViewer.play = async () => {
  await waitFor(() =>
    expect(document.location.pathname).toEqual(
      // Define redirect destinations
    )
  )
}

export const RedirectRulesForGeneralUser: ComponentStoryObj<
  typeof LocalComponent
> = {
  args: {
    isGeneralUser: true,
  },
}
RedirectRulesForGeneralUser.storyName = 'Redirect rules for general user'
RedirectRulesForGeneralUser.play = async () => {
  await waitFor(() =>
    expect(document.location.pathname).toEqual(
      // Define redirect destinations
    )
  )
}
