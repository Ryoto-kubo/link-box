import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  color: {
    // Primary
    primaryMain: 'rgba(51, 44, 71, 1)',
    primaryDark: 'rgba(26, 34, 64, 1)',
    primaryHue: 'rgba(26, 34, 64, 0.04)',

    // Error
    errorMain: 'rgba(211, 47, 47, 1)',
    errorDark: 'rgba(160, 18, 18, 1)',
    errorHue: 'rgba(211, 47, 47, 0.04)',

    // Text
    textPrimaryMain: 'rgba(51, 44, 71, 1)',
    textSecondaryMain: 'rgba(204, 211, 184, 1)',

    // Color
    white: 'rgba(255, 255, 255, 1)',

    background: 'rgba(253,252,248, 1)',
  },
  font: {
    body: 'Roboto Mono, monospace',
  },
})
