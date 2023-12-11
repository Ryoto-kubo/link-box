import { style } from '@vanilla-extract/css'

export const navigationWrap = style({
  position: 'absolute',
  inset: 0,
  minWidth: '100vw',
  minHeight: '100vh',
})

export const backgroundWrap = style({
  position: 'absolute',
  inset: 0,
  minWidth: '100vw',
  minHeight: '100vh',
  backgroundColor: '#000',
  opacity: 0,
  zIndex: 2,
})

export const backgroundWrapOpen = style({
  opacity: 0.8,
  transition: 'all 0.3s ease',
})

export const sidebarWrap = style({
  position: 'absolute',
  inset: 0,
  top: 0,
  left: '-100%',
  transition: 'left 0.3s ease-in-out',
  zIndex: 3,
})

export const sidebarOpen = style({
  left: 0,
  transition: 'all 0.3s ease',
})
