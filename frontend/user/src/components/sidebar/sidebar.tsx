import clsx from 'clsx'
import { useRouter } from 'next/router'
import React from 'react'

import * as styles from './styles.css'
import { SidebarLinks, SidebarProps } from './type'
import { Typography } from '..'
import { Hamburger } from '../hamburger'
import { CustomLink as Link } from '../Link/Link'

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { className, onClick } = props
  const links: SidebarLinks[] = [
    { name: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
    { name: 'Settings', href: '/settings', icon: 'gear' },
    // 他のリンクをここに追加
  ]

  const router = useRouter()

  return (
    <div className={clsx(styles.sidebar, className)}>
      <div className={clsx(styles.titleWrap, onClick && styles.hasMenu)}>
        {onClick && <Hamburger onClick={onClick} />}
        <Typography variant='title' className={styles.title}>
          LinkBox
        </Typography>
      </div>
      <nav className={styles.navLinkWrap}>
        <div>
          {links.map((link) => (
            <li className={styles.navLinkItem} key={link.name}>
              <Link href={link.href} icon={link.icon} iconSize={25}>
                {link.name}
              </Link>
            </li>
          ))}
        </div>
        <div className={styles.navLinkItem}>
          <Link href={'/'} icon={'logout'} iconSize={25}>
            Logout
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
