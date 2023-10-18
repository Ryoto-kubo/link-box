---
to: <%= mock_path %>/mock/examples.ts
inject: true
before: "// Do Not Remove this line ===@import mock ==="
---
export const <%= mock_name %>: <%= mock_type_name %> =
  apiSchema.paths[
    // Enter the API path
  ].get.responses[200]
    .content['application/json'].examples.base.value
