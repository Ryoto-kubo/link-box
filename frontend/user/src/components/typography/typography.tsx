import clsx from 'clsx';
import React from 'react';

import { typographyStyles } from './styles.css';
import { TypographyProps } from './type';

export const Typography = ({ variant, className, children }: TypographyProps) => {
  function component() {
    if (variant === 'h1') {
      return <h1 className={clsx(typographyStyles.variant[variant], className)}>{children}</h1>;
    }
    if (variant === 'title') {
      return <p className={clsx(typographyStyles.variant[variant], className)}>{children}</p>;
    }
  }
  return component();
};
