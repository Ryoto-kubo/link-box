import { style } from '@vanilla-extract/css';

import { vars } from '@src/styles/theme.css';

export const primaryContained = style({
  border: `1px solid ${vars.color.primaryMain}`,
  backgroundColor: vars.color.primaryMain,
  color: vars.color.white,
  ':hover': {
    background: vars.color.primaryDark,
  },
});

export const errorContained = style({
  border: `1px solid ${vars.color.errorMain}`,
  backgroundColor: vars.color.errorMain,
  color: vars.color.white,
  ':hover': {
    background: vars.color.errorDark,
  },
});

export const primaryOutlined = style({
  border: `1px solid ${vars.color.primaryMain}`,
  color: vars.color.textPrimaryMain,
  ':hover': {
    background: vars.color.primaryHue,
  },
});

export const errorOutlined = style({
  border: `1px solid ${vars.color.errorMain}`,
  color: vars.color.errorMain,
  ':hover': {
    background: vars.color.errorHue,
  },
});

export const primaryText = style({
  border: `1px solid transparent`,
  color: vars.color.textPrimaryMain,
  ':hover': {
    background: vars.color.primaryHue,
  },
});

export const errorText = style({
  border: `1px solid transparent`,
  color: vars.color.errorMain,
  ':hover': {
    background: vars.color.errorHue,
  },
});

export const start = style({
  marginRight: 8,
  display: 'inherit',
});

export const end = style({
  marginLeft: 8,
  display: 'inherit',
});

export const flex = style({
  display: 'flex',
  alignItems: 'center',
});
