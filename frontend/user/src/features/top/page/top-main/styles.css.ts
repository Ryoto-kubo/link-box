import { style } from '@vanilla-extract/css'

export const headerContainer = style({
  padding: '1rem 4%',
  maxWidth: 1280,
  margin: 'auto',
})

export const logoContainer = style({
  width: 200,
})

export const logoItem = style({
  width: '100%',
  height: 'auto',
})

export const perspectiveContainer = style({
  transformStyle: 'preserve-3d',
  perspective: 800,
})

export const symbolContainer = style({
  transition: 'all 0.2s linear 0s',
})

export const symbolItem = style({
  width: '100%',
  maxWidth: 380,
  height: 'auto',
  '@media': {
    'screen and (max-width: 480px)': {
      maxWidth: 250,
    },
  },
})

export const mainContainer = style({
  maxWidth: 1050,
  margin: 'auto',
  paddingRight: '4%',
  paddingLeft: '4%',
})

export const firstViewContainer = style({
  '@media': {
    'screen and (max-width: 999px)': {
      flexDirection: 'column',
    },
  },
})

export const mainTitleContainer = style({
  marginRight: 24,
  '@media': {
    'screen and (max-width: 999px)': {
      marginRight: 0,
      marginBottom: 32,
      textAlign: 'center',
    },
  },
})

export const mainTitleButtonContainer = style({
  '@media': {
    'screen and (max-width: 999px)': {
      justifyContent: 'center',
    },
  },
})
