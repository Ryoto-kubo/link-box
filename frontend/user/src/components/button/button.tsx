import clsx from 'clsx'

import { buttonStyles, layouts } from './styles.css'
import { ButtonProps } from './type.js'

export const Button = ({
  text,
  color = 'primary',
  variant = 'contained',
  type = 'button',
  startIcon,
  endIcon,
  ...props
}: ButtonProps) => {
  const isIcon = !!startIcon || !!endIcon

  return (
    <button
      type={type}
      {...props}
      className={clsx(buttonStyles.color[color].variant[variant], isIcon && layouts.flex)}
    >
      {startIcon && <div className={buttonStyles.iconPosition.start}>{startIcon.icon}</div>}
      <div>{text}</div>
      {endIcon && <div className={buttonStyles.iconPosition.end}>{endIcon.icon}</div>}
    </button>
  )
}
