import { style } from '@vanilla-extract/css'

export const breadcrumb = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  listStyle: 'none',
})

export const link = style({
  ':hover': {
    textDecoration: 'underline',
  },
})
