---
to: <%= hooks_path %>/index.ts
inject: true
before: "// Do Not Remove this line ===@import hooks ==="
---
export * from './<%= h.changeCase.kebab(hooks_name) %>'