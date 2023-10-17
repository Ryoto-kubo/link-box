import { MdAdd } from 'react-icons/md';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'components/button',
  argTypes: {
    color: {
      options: ['primary', 'error'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'radio' },
    },
  },
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
