import clsx from 'clsx';
import React from 'react';

import * as styles from './styles.css';
import { Hamburger } from '../hamburger';
import Sidebar from '../sidebar/sidebar';

export const Menu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };
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
