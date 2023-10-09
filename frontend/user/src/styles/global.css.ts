import { globalStyle } from '@vanilla-extract/css';

import { vars } from './theme.css';

globalStyle('button', {
  background: 'transparent',
  color: vars.color.textPrimaryMain,
  borderRadius: 8,
  padding: '6px 16px',
  cursor: 'pointer',
  transition:
    'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  WebkitTransition:
    'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
});