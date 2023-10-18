const fs = require('fs')
const path = require('path')

const repositoryDir = path.join(__dirname, '../../../src/api/repositories')
const repositoryItem = fs
  .readdirSync(repositoryDir, { withFileTypes: true })
  .filter((file) => file.isDirectory())
  .map((file) => file.name)

const defaultValueOfHooksName = (hooks_type, api_client_name) => {
  const camelCaseApiClientName = api_client_name
    .replace('get', '')
    .split('-')
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase()
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join('')
  const pascalCaseApiClientName = api_client_name
    .replace(/([a-z0-9])([A-Z])|(\W+)/g, '$1_$2')
    .toLowerCase()
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')

  if (hooks_type === 'fetchers') {
    return `useFetch${camelCaseApiClientName}`
  } else {
    return `use${pascalCaseApiClientName}`
  }
}

const defaultValueOfMockName = (api_client_name) => {
  const pascalCaseApiClientName = api_client_name
    .replace(/([a-z0-9])([A-Z])|(\W+)/g, '$1_$2')
    .toLowerCase()
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')

  return `${pascalCaseApiClientName}`
}

const mockTypeName = (mock_name) => {
  // mockから始まる場合は、その部分を取り除く
  if (mock_name.startsWith('mock')) {
    mock_name = mock_name.substring(4)
  }

  // Responseから終わる場合は、その部分を"200ResponseInner"に変更する
  if (mock_name.endsWith('Response')) {
    mock_name =
      mock_name.substring(0, mock_name.length - 'Response'.length) +
      '200ResponseInner'
  }

  // 最初の文字を大文字にして、"Get"を前に追加する
  mock_name = mock_name.charAt(0).toUpperCase() + mock_name.slice(1)

  return mock_name
}

module.exports = {
  prompt: ({ inquirer }) => {
    return inquirer
      .prompt([
        {
          type: 'select',
          name: 'api_type',
          message: 'Which api type?',
          choices: ['USER_API', 'IAM'],
        },
        {
          type: 'select',
          name: 'repository_name',
          message: 'Where is the repository?',
          choices: [...repositoryItem],
        },
        {
          type: 'input',
          name: 'api_client_name',
          message:
            'Enter the name of the api client in kebab-case or camelCase. Reference URL: https://github.com/upsidr/core/blob/master/user-api/api-schema/bank/paths/users/%7BuserId%7D/email_notifications/get.yml#L2',
          initial: 'get-some-lists',
        },
        {
          type: 'select',
          name: 'hooks_type',
          message: 'Which hooks type?',
          choices: ['fetchers', 'mutations'],
        },
      ])
      .then(({ api_type, repository_name, api_client_name, hooks_type }) => {
        return inquirer
          .prompt([
            {
              type: 'input',
              name: 'hooks_name',
              message: `Is the name of the hooks ${defaultValueOfHooksName(
                hooks_type,
                api_client_name
              )} ? Correct if necessary.`,
              default: defaultValueOfHooksName(hooks_type, api_client_name),
            },
            {
              type: 'input',
              name: 'mock_name',
              message: `Is the name of the mock ${defaultValueOfMockName(
                api_client_name
              )} ? Correct if necessary.`,
              default: `mock${defaultValueOfMockName(api_client_name)}Response`,
            },
          ])
          .then(({ hooks_name, mock_name }) => {
            const repository_path = `src/api/repositories/${repository_name}`
            const hooks_path = `src/hooks/queries/${repository_name}/${hooks_type}`
            const mock_path = `src/hooks/queries/${repository_name}`
            const factory_name =
              api_type === 'USER_API'
                ? 'userApiDefaultApiFactory(instance)'
                : 'iamDefaultApiFactory(instance)'
            const import_api_type_path =
              api_type === 'USER_API'
                ? '@src/api/generated/user-api'
                : '@src/api/generated/iam'
            return {
              repository_path,
              repository_name,
              api_client_name,
              import_api_type_path,
              api_type,
              factory_name,
              hooks_path,
              hooks_name,
              hooks_type,
              mock_path,
              mock_name,
              mock_type_name: mockTypeName(mock_name),
            }
          })
      })
  },
}
