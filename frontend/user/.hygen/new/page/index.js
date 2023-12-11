module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'dir',
        message:
          'Enter directory name in kebab case. The file is created under src/pages/ and under src/features (ex: settings/email-notification)',
      },
    ]
    return inquirer.prompt(questions).then((answers) => {
      const { dir } = answers
      const page_path = `src/pages/${dir}`
      const page_name = dir.replaceAll('/', '-') + '-page'
      const main = dir.replaceAll('/', '-') + '-main'
      const features_path = `src/features/${dir}/page`
      return { page_path, page_name, main, features_path, dir }
    })
  },
}
