import { MdAdd } from 'react-icons/md';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Base: Story = {
  args: {
    text: 'Button',
    color: 'primary',
  },
};

export const StartIconButton: Story = {
  args: {
    text: 'Button',
    color: 'primary',
    startIcon: {
      icon: <MdAdd size={20} />,
    },
  },
};

export const EndIconButton: Story = {
  args: {
    text: 'Button',
    color: 'primary',
    endIcon: {
      icon: <MdAdd size={20} />,
    },
  },
};
