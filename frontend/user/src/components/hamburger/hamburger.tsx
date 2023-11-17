import clsx from 'clsx';
import React, { useState } from 'react';

import * as styles from './styles.css';
import { HamburgerProps } from './type';

export const Hamburger = (props: HamburgerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      type='button'
      className={styles.hamburger}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <span className={clsx(styles.hamburgerLine, isOpen && styles.firstLine)} />
      <span className={clsx(styles.hamburgerLine, isOpen && styles.middleLine)} />
      <span className={clsx(styles.hamburgerLine, isOpen && styles.thirdLine)} />
    </button>
  );
};
