---
to: <%= abs_path %>/<%= component_name %>.tsx
---
import { <%= h.changeCase.pascal(component_name) %>Props } from './type'

export const <%= h.changeCase.pascal(component_name) %> = (props: <%= h.changeCase.pascal(component_name) %>Props) => {
  return ()
}
