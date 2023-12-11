import { style } from '@vanilla-extract/css'

export const hamburger = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  gap: '5px',
  boxSizing: 'border-box',
  ':focus': {
    outline: 'none',
  },
})

export const hamburgerLine = style({
  width: '20px',
  height: '3px',
  background: 'black',
  borderRadius: '3px',
  transition: 'all 0.5s ease',
})
