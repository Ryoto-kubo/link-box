---
to: <%= repository_path %>/<%= repository_name %>.ts
inject: true
before: "// Do Not Remove this line ===@import api type==="
---

  DefaultApi<%= h.changeCase.pascal(api_client_name) %>Request,