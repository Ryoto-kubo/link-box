import { ComponentProps } from 'react'

export type ButtonProps = ComponentProps<'button'> & {
  text: string
  color?: ButtonColor
  variant?: ButtonVariant
  startIcon?: {
    icon: JSX.Element
  }
  endIcon?: {
    icon: JSX.Element
  }
}

export type ButtonColor = 'primary' | 'error'

export type ButtonVariant = 'contained' | 'outlined' | 'text'

export type ButtonIconPosition = 'start' | 'end'

export type ButtonStyles = {
  ['color']: {
    [key in ButtonColor]: {
      ['variant']: {
        [key in ButtonVariant]: string
      }
    }
  }
  ['iconPosition']: {
    [key in ButtonIconPosition]: string
  }
}
