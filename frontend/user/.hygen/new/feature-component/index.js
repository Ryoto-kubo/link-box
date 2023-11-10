const fs = require('fs');
const path = require('path');

const featuresDir = path.join(__dirname, '../../../src/features');
const featureItems = fs
  .readdirSync(featuresDir, { withFileTypes: true })
  .filter((file) => file.isDirectory())
  .map((file) => file.name);

module.exports = {
  prompt: ({ inquirer }) => {
    return inquirer
      .prompt([
        {
          type: 'select',
          name: 'feature_name',
          message: 'Which component category?',
          choices: [...featureItems],
        },
      ])
      .then(({ feature_name }) => {
        // 指定されたディレクトリ構造を配列に変換する関数
        function convertToDirectoriesArray(rootDir) {
          const directories = [];

          // 再帰的にディレクトリを探索する関数
          function exploreDirectories(dirPath) {
            const files = fs.readdirSync(dirPath);

            files.forEach((file) => {
              const filePath = path.join(dirPath, file);
              const stat = fs.statSync(filePath);
              if (stat.isDirectory()) {
                const relativePath = path.relative(rootDir, filePath) + '/';

                const isPageDirectory = file === 'page';
                if (isPageDirectory && relativePath === 'page/') {
                  directories.push(feature_name);
                } else if (isPageDirectory && relativePath.includes('/page')) {
                  directories.push(relativePath.replace('/page/', ''));
                }

                exploreDirectories(filePath);
              }
            });
          }

          exploreDirectories(rootDir);
          return directories;
        }

        const feature_path = path.join(__dirname, `../../../src/features/${feature_name}/`);
        const paths = convertToDirectoriesArray(feature_path);

        return inquirer
          .prompt([
            {
              type: 'select',
              name: 'path',
              message: 'Which path?',
              choices: [...paths],
            },
            {
              type: 'input',
              name: 'component_name',
              message: 'Component Name',
              initial: '',
            },
          ])
          .then(({ path, component_name }) => {
            let abs_path = '';
            if (feature_name === path) {
              abs_path = `src/features/${feature_name}/page/${component_name}`;
            } else {
              abs_path = `src/features/${feature_name}/${path}/page/${component_name}`;
            }
            const storybook_path = abs_path.replace('src/', '').replace('/page', '');
            return {
              abs_path,
              storybook_path,
              component_name,
            };
          });
      });
  },
};
