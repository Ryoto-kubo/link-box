---
to: <%= features_path %>/index.page.tsx
---

import { UContainer } from '@src/components'

import { <%= h.changeCase.pascal(main) %> } from './<%= main %>'

export const <%= h.changeCase.pascal(page_name) %> = () => {
  return (
    <UContainer maxWidth="lg">
      <<%= h.changeCase.pascal(main) %> />
    </UContainer>
  )
}
