import clsx from 'clsx';

import {
  primaryContained,
  errorOutlined,
  primaryOutlined,
  primaryText,
  errorText,
  errorContained,
  flex,
  start,
  end,
} from './styles.css';
import { ButtonProps } from './type';

export const Button = ({
  text,
  color = 'primary',
  variant = 'contained',
  type = 'button',
  startIcon,
  endIcon,
  ...props
}: ButtonProps) => {
  const isIcon = startIcon || endIcon;

  function getColorClass() {
    if (color === 'primary' && variant === 'contained') return primaryContained;
    if (color === 'error' && variant === 'contained') return errorContained;

    if (color === 'primary' && variant === 'outlined') return primaryOutlined;
    if (color === 'error' && variant === 'outlined') return errorOutlined;

    if (color === 'primary' && variant === 'text') return primaryText;
    if (color === 'error' && variant === 'text') return errorText;

    return undefined;
  }

  return (
    <button type={type} {...props} className={clsx(getColorClass(), isIcon && flex)}>
      {startIcon && <div className={start}>{startIcon.icon}</div>}
      <div>{text}</div>
      {endIcon && <div className={end}>{endIcon.icon}</div>}
    </button>
  );
};
