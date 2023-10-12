import type { StorybookConfig } from '@storybook/nextjs';

import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
    ({
      name: "@storybook/addon-styling-webpack",
      options: {plugins: [new VanillaExtractPlugin(), new MiniCssExtractPlugin()],
        rules: [{
      test: /\.css$/,
      sideEffects: true,
      use: [
          require.resolve("style-loader"),
          {
              loader: require.resolve("css-loader"),
              options: {
                  
                  
              },
          },
      ],exclude: /\.vanilla\.css$/,
    },{
    // Targets only CSS files generated by vanilla-extract
    test: /\.vanilla\.css$/i,
    sideEffects: true,
    use: [
      MiniCssExtractPlugin.loader,
      {
          loader: require.resolve('css-loader'),
          options: {
              // Required as image imports should be handled via JS/TS import statements
              url: false,
          },
      },
    ],
    },],
      }
    })
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
