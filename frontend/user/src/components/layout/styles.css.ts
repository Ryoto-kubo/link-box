import { style } from '@vanilla-extract/css';

export const LayoutWrap = style({
  display: 'flex',
  minHeight: '100vh',
});

export const sidebarStyle = style({
  width: '240px',
  flexShrink: 0,
  minHeight: '100vh',
});

export const headerStyle = style({
  width: '100%',
  height: '150px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '0 3rem',
  boxSizing: 'border-box',
  gap: '1rem',
});

export const mainStyle = style({
  flexGrow: 1,
  padding: '0 3rem',
});
