---
to: <%= features_path %>/<%= main %>/<%= main %>.tsx
---

import { PageHeaderContainer, PageHeader } from '@src/features/_components'

export const <%= h.changeCase.pascal(main) %> = () => {
  return (
    <>
      <PageHeaderContainer>
        <PageHeader title="" />
      </PageHeaderContainer>
      <h1><%= h.changeCase.pascal(main) %></h1>
    </>
  )
}
