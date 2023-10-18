---
to: <%= repository_path %>/<%= repository_name %>.ts
inject: true
before: "// Do Not Remove this line ===@import api client==="
---


export const <%= h.changeCase.camel(api_client_name) %> = async (
  instance: AxiosInstance,
  params: DefaultApi<%= h.changeCase.pascal(api_client_name) %>Request
) => {
  return await <%= factory_name %>.<%= h.changeCase.camel(api_client_name) %>(
    params
  )
}
