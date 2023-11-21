import clsx from 'clsx';
import React from 'react';

import * as styles from './styles.css';
import { HamburgerProps } from './type';

export const Hamburger = (props: HamburgerProps) => {
  const { onClick } = props;

  return (
    <button type='button' className={styles.hamburger} onClick={onClick}>
      {[1, 2, 3].map((_, index) => (
        <span key={index} className={clsx(styles.hamburgerLine)} />
      ))}
    </button>
  );
};
