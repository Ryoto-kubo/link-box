import clsx from 'clsx';
import React from 'react';

import { typographyStyles } from './styles.css';
import { TypographyProps } from './type';

export const Typography = ({ variant, className, children }: TypographyProps) => {
  function component() {
    const Tag = variant;
    if (variant === 'h1' || variant === 'h2') {
      return <Tag className={clsx(typographyStyles.variant[variant], className)}>{children}</Tag>;
    }
    if (variant === 'title') {
      return <p className={clsx(typographyStyles.variant[variant], className)}>{children}</p>;
    }
  }

  return component();
};
