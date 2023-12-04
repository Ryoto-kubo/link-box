import { style } from '@vanilla-extract/css';

import { vars } from '@src/styles/theme.css';

import { ButtonStyles } from './type';

export const buttonStyles: ButtonStyles = {
  color: {
    primary: {
      variant: {
        contained: style({
          border: `1px solid ${vars.color.primaryMain}`,
          backgroundColor: vars.color.primaryMain,
          color: vars.color.white,
          ':hover': {
            background: vars.color.primaryDark,
          },
        }),
        outlined: style({
          border: `1px solid ${vars.color.primaryMain}`,
          color: vars.color.textPrimaryMain,
          ':hover': {
            background: vars.color.primaryHue,
          },
        }),
        text: style({
          border: `1px solid transparent`,
          color: vars.color.textPrimaryMain,
          ':hover': {
            background: vars.color.primaryHue,
          },
        }),
      },
    },
    error: {
      variant: {
        contained: style({
          border: `1px solid ${vars.color.errorMain}`,
          backgroundColor: vars.color.errorMain,
          color: vars.color.white,
          ':hover': {
            background: vars.color.errorDark,
          },
        }),
        outlined: style({
          border: `1px solid ${vars.color.errorMain}`,
          color: vars.color.errorMain,
          ':hover': {
            background: vars.color.errorHue,
          },
        }),
        text: style({
          border: `1px solid transparent`,
          color: vars.color.errorMain,
          ':hover': {
            background: vars.color.errorHue,
          },
        }),
      },
    },
  },
  iconPosition: {
    start: style({
      marginRight: 8,
      display: 'inherit',
    }),
    end: style({
      marginLeft: 8,
      display: 'inherit',
    }),
  },
};

export const buttonLayout = style({
  cursor: 'pointer',
  boxSizing: 'border-box',
});

export const textStyle = style({
  textAlign: 'center',
});

export const layouts = {
  flex: style({
    display: 'flex',
    alignItems: 'center',
  }),
};
