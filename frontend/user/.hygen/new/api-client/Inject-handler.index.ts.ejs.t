---
to: <%= mock_path %>/mock/handlers.ts
inject: true
before: "// Do Not Remove this line ===@import handler ==="
---
<%= h.changeCase.camel(api_client_name) %>: (
  // Set args
) =>
    rest.get(
      // Set path
    , (_req, _res, ctx) => {
      return delayedResponse({})(
        ctx.status(200),
        ctx.json<<%= mock_type_name %>>(
          <%= mock_name %>
        )
      )
    }),