import React from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

import * as styles from './styles.css'
import { BreadcrumbItem } from './type'
import { CustomLink as Link } from '../Link/Link'

type BreadcrumbProps = {
  items: BreadcrumbItem[]
}

export const Breadcrumb = (props: BreadcrumbProps) => {
  const { items } = props
  return (
    <nav aria-label='breadcrumb'>
      <ol className={styles.breadcrumb}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li>
              {index < items.length - 1 ? (
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
            {index < items.length - 1 && (
              <li className='breadcrumb-separator'>
                <MdOutlineArrowForwardIos size={10} />{' '}
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  )
}
