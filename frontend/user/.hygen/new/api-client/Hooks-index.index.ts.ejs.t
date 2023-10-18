---
to: <%= hooks_path %>/<%= h.changeCase.kebab(hooks_name) %>/index.ts
---
export * from './<%= h.changeCase.kebab(hooks_name) %>'
