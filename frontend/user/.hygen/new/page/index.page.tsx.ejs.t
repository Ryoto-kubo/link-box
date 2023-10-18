---
to: <%= page_path %>/index.page.tsx
---
import { ReactElement } from 'react'

import { <%= h.changeCase.pascalCase(page_name) %> } from '@src/features/<%= dir %>/page'
import { useRedirectRules } from '@src/hooks'
import { DefaultLayout } from '@src/layouts/default-layout'
import { CustomHead } from '@src/meta/head'
import { NextPageWithLayout } from '@src/pages/_app.page'

export const Page: NextPageWithLayout = () => {
  useRedirectRules()
  return <<%= h.changeCase.pascalCase(page_name) %> />
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <CustomHead title="" />
      <DefaultLayout>{page}</DefaultLayout>
    </>
  )
}

export default Page
