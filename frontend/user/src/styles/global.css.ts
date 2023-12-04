import { globalStyle } from '@vanilla-extract/css';

import { vars } from './theme.css';

globalStyle('html, body', {
  backgroundColor: vars.color.background,
  fontFamily: vars.font.body,
  margin: 0,
  padding: 0,
  height: '100%',
});

globalStyle('button', {
  background: 'transparent',
  color: vars.color.textPrimaryMain,
  borderRadius: 4,
  padding: '10px 16px',
  cursor: 'pointer',
  transition:
    'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  WebkitTransition:
    'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
});
