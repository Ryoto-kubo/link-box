import { style } from '@vanilla-extract/css';

export const inputWrapper = style({
  width: '100%',
  height: '37.5px',
  borderRadius: '8px',
  outline: '1px solid #C0C0C0',
  position: 'relative',
  ':focus-within': {
    outline: '2px solid #0080FF',
  },
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
  boxSizing: 'border-box',
  borderRadius: '4px',
});

export const placeholder = style({
  fontSize: '18px',
  position: 'absolute',
  left: '16px',
  top: '50%',
  transform: 'translateY(-50%)',
  transition: 'all 0.2s',
  zIndex: 1,
  backgroundColor: '#fff',
});

export const placeholderFocused = style({
  fontSize: '14px',
  fontWeight: 900,
  top: '-1px',
  left: '8px',
  transition: 'all 0.2s',
  zIndex: 3,
  padding: '0 2px',
});

export const iconWrapper = style({
  position: 'absolute',
  right: '16px',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 3,
  color: '#C0C0C0',
});

export const inputWrapperError = style({
  outline: '2px solid red',
});

export const errorText = style({
  fontSize: '14px',
  color: 'red',
  marginTop: '5px',
  fontWeight: 900,
});
