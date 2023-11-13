import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { GoGear } from 'react-icons/go';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdLogout } from 'react-icons/md';

import * as styles from './styles.css';
import { Typography } from '..';

const Sidebar: React.FC = () => {
  const links = [
    { name: 'Dashboard', href: '/dashboard', icon: <LuLayoutDashboard size='25' /> },
    { name: 'Settings', href: '/settings', icon: <GoGear size='25' /> },
    // 他のリンクをここに追加
  ];

  const router = useRouter();

  return (
    <div className={styles.sidebar}>
      <div className={styles.titleWrap}>
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
        <li className={styles.navLinkItem}>
          <MdLogout size='25' />
          <Link href={'/'}>Logout</Link>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
