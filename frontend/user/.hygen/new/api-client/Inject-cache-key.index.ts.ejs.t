---
to: "<%= hooks_type === 'fetchers' ? 'src/consts/react-query-cache-keys/react-query-cache-keys.ts' : null %>"
inject: true
before: "// Do Not Remove this line ===@import cache key ==="
---
<% if(hooks_type === 'fetchers'){ -%>  <%= h.changeCase.constant(api_client_name) %>: '<%= h.changeCase.kebab(api_client_name) %>',<% } -%>