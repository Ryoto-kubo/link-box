import { style } from '@vanilla-extract/css';

export const title = style({
  textAlign: 'center',
  marginBottom: '20px',
});

export const loginModalWrapper = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 3rem',
});

export const formContainer = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  margin: '5% 0',
});

export const closeBtnWrap = style({
  position: 'absolute',
  top: '15px',
  right: '15px',
  width: '20px',
  height: '20px',
});

export const buttonStyle = style({
  width: '100%',
  height: '100%',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  inset: 0,
  position: 'absolute',
});
