import { style } from '@vanilla-extract/css'

import { TypographyStyles } from './type'

export const typographyStyles: TypographyStyles = {
  variant: {
    h1: style({
      fontSize: 'clamp(1rem,10vw,4rem)',
      fontWeight: 'bold',
    }),
    h2: style({
      fontSize: 'clamp(1rem,10vw, 2rem)',
      fontWeight: 'bold',
    }),
    title: style({
      fontSize: 20,
    }),
  },
}
