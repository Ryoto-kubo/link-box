import { useRouter } from 'next/router'
import { FC } from 'react'

import * as styles from './styles.css'
import { Typography } from '..'
import { Breadcrumb } from '../breadcrumb'
import { BreadcrumbItem } from '../breadcrumb/type'
import { Menu } from '../menu'
import Sidebar from '../sidebar/sidebar'

interface LayoutProps {
  children: React.ReactNode
}

const generateBreadcrumbItems = (path: string): BreadcrumbItem[] => {
  const paths = path.split('/').filter((p) => p)
  let pathAccumulator = ''

  return paths.map((segment, index) => {
    pathAccumulator += `/${segment}`
    return {
      label: segment.charAt(0).toUpperCase() + segment.slice(1), // 最初の文字を大文字に、残りはそのまま
      href: pathAccumulator,
    }
  })
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter()
  const breadcrumbItems = generateBreadcrumbItems(router.asPath)

  const currentRouteName = breadcrumbItems[breadcrumbItems.length - 1].label

  return (
    <div className={styles.LayoutWrap}>
      <Sidebar className={styles.sidebarStyle} />
      <div className={styles.contentWrap}>
        <header className={styles.headerStyle}>
          <div className={styles.titleWrap}>
            <Menu />
            <Typography variant='title' className={styles.title}>
              LinkBox
            </Typography>
          </div>
          {breadcrumbItems.length > 1 && <Breadcrumb items={breadcrumbItems} />}
          <Typography variant='h2'>{currentRouteName}</Typography>
        </header>
        <main className={styles.mainStyle}>{children}</main>
      </div>
    </div>
  )
}

export default Layout
