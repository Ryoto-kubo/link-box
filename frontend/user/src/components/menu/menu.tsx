import clsx from 'clsx';
import React, { useState } from 'react';

import * as styles from './styles.css';
import { Hamburger } from '../hamburger';
import Sidebar from '../sidebar/sidebar';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Hamburger onClick={handleToggleOpen} />
      {isOpen && (
        <span className={clsx(styles.backgroundWrap, isOpen && styles.backgroundWrapOpen)}></span>
      )}
      <Sidebar
        onClick={handleToggleOpen}
        className={clsx(styles.sidebarWrap, isOpen && styles.sidebarOpen)}
      />
    </>
  );
};
