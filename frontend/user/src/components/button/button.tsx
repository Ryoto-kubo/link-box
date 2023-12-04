import clsx from 'clsx';

import { buttonStyles, layouts, buttonLayout, textStyle } from './styles.css';
import { ButtonProps } from './type.js';

export const Button = ({
  text,
  color = 'primary',
  variant = 'contained',
  type = 'button',
  startIcon,
  endIcon,
  isFullWidth,
  ...props
}: ButtonProps) => {
  const isIcon = !!startIcon || !!endIcon;

  return (
    <button
      type={type}
      {...props}
      className={clsx(
        buttonLayout,
        buttonStyles.color[color].variant[variant],
        isIcon && layouts.flex,
      )}
      style={{ width: isFullWidth ? '100%' : 'auto' }}
    >
      {startIcon && <div className={buttonStyles.iconPosition.start}>{startIcon.icon}</div>}
      <div className={textStyle}>{text}</div>
      {endIcon && <div className={buttonStyles.iconPosition.end}>{endIcon.icon}</div>}
    </button>
  );
};
