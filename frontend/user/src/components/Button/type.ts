import { ComponentProps } from 'react';

export type ButtonProps = ComponentProps<'button'> & {
  text: string;
  color?: 'primary' | 'error';
  variant?: 'contained' | 'outlined' | 'text';
  startIcon?: {
    icon: JSX.Element;
  };
  endIcon?: {
    icon: JSX.Element;
  };
};
