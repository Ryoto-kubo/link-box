import { style } from '@vanilla-extract/css'

export const LayoutWrap = style({
  display: 'flex',
  minHeight: '100vh',
  maxWidth: '1280px',
  margin: '0 auto',
})

export const sidebarStyle = style({
  width: '240px',
  flexShrink: 0,
  minHeight: '100vh',
  display: 'flex',
  '@media': {
    'screen and (max-width: 999px)': {
      display: 'none',
    },
  },
})

export const titleWrap = style({
  display: 'none',
  '@media': {
    'screen and (max-width: 999px)': {
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
    },
  },
})

export const title = style({
  fontSize: '30px !important',
})

export const navigationWrap = style({
  position: 'absolute',
  minHeight: '100vh',
})

export const headerStyle = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '20px',
  boxSizing: 'border-box',
  gap: '1rem',
})

export const contentWrap = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  width: '100%',
  minHeight: '100vh',
})

export const mainStyle = style({
  flexGrow: 1,
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
})
