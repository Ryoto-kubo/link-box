import { style } from '@vanilla-extract/css';

import { vars } from '@src/styles/theme.css';

export const sidebar = style({
  width: '240px',
  height: '100%',
  position: 'fixed',
  top: '0',
  left: '0',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  borderRight: '1px solid #DDDDDDDD',
  boxSizing: 'border-box',
});

export const titleWrap = style({
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const title = style({
  fontSize: '30px !important',
  textAlign: 'center',
  color: vars.color.primaryMain,
});

export const navLinkWrap = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const navLinkItem = style({
  listStyle: 'none',
  height: '40px',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  padding: '0 10px',
  margin: '10px 0',
  width: '174px',
  gap: '5px',
  border: `1px solid #fff`,

  ':hover': {
    border: `1px solid #DDDDDDDD`,
    cursor: 'pointer',
    borderRadius: '10px',
    transition: 'all 0.3s ease',
  },
});

export const linkButtonWrap = style({
  position: 'absolute',
  inset: 0,
});

export const navButtonSapn = style({
  position: 'absolute',
  inset: 0,
  display: 'none',
});

export const navLink = style({
  color: vars.color.primaryMain,
});

export const logoutWrap = style({
  position: 'absolute',
  bottom: '20px',
  left: '20px',
});