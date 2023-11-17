import { style } from '@vanilla-extract/css';

export const hamburger = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50px',
  width: '50px',
  background: 'red',
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  gap: '5px',
  boxSizing: 'border-box',
  ':focus': {
    outline: 'none',
  },
});

export const hamburgerLine = style({
  width: '20px',
  height: '3px',
  background: 'white',
  borderRadius: '3px',
  transition: 'all 0.5s ease',
});

export const firstLine = style({
  transform: 'translateY(9px) rotate(45deg)',
  height: '4px',
  width: '25px',
  transformOrigin: 'center',
  transition: 'all 0.5s ease',
});

export const middleLine = style({
  opacity: 0,
  transition: 'all 0.5s ease',
});

export const thirdLine = style({
  transform: 'translateY(-9px) rotate(-45deg)',
  height: '4px',
  width: '25px',
  transformOrigin: 'center',
  transition: 'all 0.5s ease',
});
