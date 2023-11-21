import clsx from 'clsx';
import { useRouter } from 'next/router';
import React from 'react';
import { GoGear } from 'react-icons/go';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdLogout } from 'react-icons/md';

import * as styles from './styles.css';
import { SidebarProps } from './type';
import { Typography } from '..';
import { Hamburger } from '../hamburger';

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { className, onClick } = props;
  const links = [
    { name: 'Dashboard', href: '/dashboard', icon: <LuLayoutDashboard size='25' /> },
    { name: 'Settings', href: '/settings', icon: <GoGear size='25' /> },
    // 他のリンクをここに追加
  ];

  const router = useRouter();

  return (
    <div className={clsx(styles.sidebar, className)}>
      <div className={clsx(styles.titleWrap, onClick && styles.hasMenu)}>
        {onClick && <Hamburger onClick={onClick} />}
        <Typography variant='title' className={styles.title}>
          LinkBox
        </Typography>
      </div>
      <nav className={styles.navLinkWrap}>
        {links.map((link) => (
          <li className={styles.navLinkItem} key={link.name}>
            <button
              type='button'
              className={styles.linkButtonWrap}
              onClick={() => {
                router.push(link.href);
              }}
            >
              <span className={styles.navButtonSapn}>sidebar navigation item button</span>
            </button>
            {link.icon}
            <div className={styles.navLink}>{link.name}</div>
          </li>
        ))}
      </nav>
      <div className={styles.logoutWrap}>
        <div className={styles.navLinkItem}>
          <button
            type='button'
            className={styles.linkButtonWrap}
            onClick={() => {
              router.push('/');
            }}
          >
            <span className={styles.navButtonSapn}>sidebar navigation item button</span>
          </button>
          <MdLogout size='25' />
          <div className={styles.navLink}>Logout</div>
        </div>
        <div className={styles.navLinkItem}></div>
      </div>
    </div>
  );
};

export default Sidebar;
