---
to: <%= path %>/<%= name%>.stories.tsx
---

import type { Meta, StoryObj } from '@storybook/react';

import <%= name %> from '.';

const meta: Meta<typeof <%= name %>> = {
  component: <%= name %>,
};

export default meta;

type Story = StoryObj<typeof <%= name %>>;

export const Default: Story = {
  args: {
    name: '<%= name %>',
  },
  storyName: '<%= name %>',
};
