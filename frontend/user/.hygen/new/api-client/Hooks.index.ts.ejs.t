---
to: <%= hooks_path %>/<%= h.changeCase.kebab(hooks_name) %>/<%= h.changeCase.kebab(hooks_name) %>.ts
---

<% if(hooks_type === 'fetchers'){ -%>
import { useQuery } from 'react-query'

import { <%= h.changeCase.camel(api_client_name) %> } from '@src/api'
import { DefaultApi<%= h.changeCase.pascal(api_client_name) %>Request } from '<%= import_api_type_path %>'
import { REACT_QUERY_CACHE_KEYS } from '@src/consts'
import { useAxios } from '@src/hooks'

export const <%= h.changeCase.camel(hooks_name) %> = (
  params: DefaultApi<%= h.changeCase.pascal(api_client_name) %>Request
) => {
  <% if(api_type === 'USER_API'){ -%>
const { axiosInstance } = useAxios()
  <% } else { -%>
const { axiosInstance } = useAxios('IAM')
  <% } -%>

  return useQuery({
    enabled // Set "enabled" if necessary,
    queryFn: () => <%= h.changeCase.camel(api_client_name) %>(axiosInstance, params),
    queryKey: [
      REACT_QUERY_CACHE_KEYS.<%= h.changeCase.constant(api_client_name) %>,
      // Set key if necessary
    ],
  })
}


<% } else { -%>
import { useMutation } from 'react-query'

import { <%= h.changeCase.camel(api_client_name) %> } from '@src/api'
import { DefaultApi<%= h.changeCase.pascal(api_client_name) %>Request } from '<%= import_api_type_path %>'
import { useAxios } from '@src/hooks/use-axios'

export const <%= h.changeCase.camel(hooks_name) %> = () => {
  <% if(api_type === 'USER_API'){ -%>
  const { axiosInstance } = useAxios()
  <% } else { -%>
  const { axiosInstance } = useAxios('IAM')
  <% } -%>

  return useMutation({
    mutationFn: (params: DefaultApi<%= h.changeCase.pascal(api_client_name) %>Request) =>
      <%= h.changeCase.camel(api_client_name) %>(axiosInstance, params),
  })
}

<% } -%>
