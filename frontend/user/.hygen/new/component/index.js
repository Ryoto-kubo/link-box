module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'input',
        name: 'component_name',
        message: 'Component Name (ex: u-input-text)',
        initial: 'u-',
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { project, component_name } = answers;
      const abs_path = `src/components/${component_name}`;
      const storybook_path = abs_path.replace('src/', '');
      return {
        abs_path,
        storybook_path,
        project,
        component_name,
      };
    });
  },
};
