import { style } from '@vanilla-extract/css';

import { FlexStyles } from './type';

export const flexStyles: FlexStyles = {
  flex: style({
    display: 'flex',
  }),
  alignItems: {
    center: style({
      alignItems: 'center',
    }),
    stretch: style({
      alignItems: 'stretch',
    }),
    flexStart: style({
      alignItems: 'flex-start',
    }),
    flexEnd: style({
      alignItems: 'flex-end',
    }),
  },
  justifyContent: {
    center: style({
      justifyContent: 'center',
    }),
    spaceBetween: style({
      justifyContent: 'space-between',
    }),
    spaceAround: style({
      justifyContent: 'space-around',
    }),
    flexStart: style({
      justifyContent: 'flex-start',
    }),
    flexEnd: style({
      justifyContent: 'flex-end',
    }),
  },
};
