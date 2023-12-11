import { ReactNode } from 'react'

export type TypographyProps = {
  variant: TypographyVariant
  className?: string
  children: ReactNode
}

export type TypographyVariant =
  | 'h1'
  | 'h2'
  // | 'h3'
  // | 'h4'
  // | 'h5'
  // | 'h6'
  | 'title'
// | 'subtitle1'
// | 'body1'
// | 'body2'
// | 'caption';

export type TypographyStyles = {
  variant: {
    [key in TypographyVariant]: string
  }
}
