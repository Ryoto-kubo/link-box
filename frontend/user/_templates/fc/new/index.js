module.exports = {
  prompt: ({ inquirer, _args }) => {
    const questions = [
      {
        type: 'input',
        name: 'dir',
        message: 'Where is tha directory? ex: src/common/components/',
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of component? ex: Button',
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { dir, name, haveProps } = answers;
      const { join } = require('node:path');

      const lowerCaseName = name.charAt(0).toLowerCase() + name.slice(1);
      const path = join(`${dir || 'src/'}`, '/', name);
      const type_annotate = haveProps ? `FC<${name}Props>` : 'FC';
      const props = haveProps ? '(props)' : '()';
      return { ...answers, path, type_annotate, props, lowerCaseName };
    });
  },
};
