import { style } from '@vanilla-extract/css';

export const inputWrapper = style({
  width: '100%',
  height: '30px',
  borderRadius: '4px',
  border: '1px solid black',
  position: 'relative',
});

export const inputWrapperFocused = style({
  borderColor: 'blue',
});

export const inputMain = style({
  width: '100%',
  height: '100%',
  border: 'none',
  outline: 'none',
  position: 'absolute',
  zIndex: 2,
  left: 0,
  top: 0,
  padding: '0 16px',
});

export const placeholder = style({
  fontSize: '18px',
  position: 'absolute',
  left: '16px',
  top: '50%',
  transform: 'translateY(-50%)',
  transition: 'all 0.2s',
  zIndex: 1,
  backgroundColor: 'white',
});

export const placeholderFocused = style({
  fontSize: '14px',
  fontWeight: 900,
  top: '-1px',
  left: '8px',
  transition: 'all 0.2s',
});
