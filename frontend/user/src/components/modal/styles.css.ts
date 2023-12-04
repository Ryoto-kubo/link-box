import { style, keyframes } from '@vanilla-extract/css';

import { vars } from '@src/styles/theme.css';

const animationDuration = '350ms';

const appear = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});

const appearFromTop = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(-1rem)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const fadeout = keyframes({
  '0%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
});

export const modalWrapper = style({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  animation: `${appear} ${animationDuration} ease-in-out 0ms 1 forwards`,
  inset: 0,
  zIndex: vars.zIndex['1000'],
  backdropFilter: 'blur(4px)',
});

export const isModalClosing = style({
  animationDelay: `calc(${animationDuration} - 100ms)`, // 50% of animationDuration
  animationName: `${fadeout}`,
});

export const modalMainBody = style({
  backgroundColor: vars.color.white,
  animation: 'inherit',
  animationDelay: `calc(${animationDuration} + 50ms)`, // 50% of animationDuration
  animationName: `${appearFromTop}`,
  borderRadius: '4px',
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
  padding: '20px',
  position: 'relative',
  width: 'clamp(300px, 300px, 70%)',
  opacity: 0,
});

export const modalBackdrop = style({
  position: 'absolute',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: vars.zIndex['minus1'],
  border: 0,
  padding: 0,
  borderRadius: 0,
});
