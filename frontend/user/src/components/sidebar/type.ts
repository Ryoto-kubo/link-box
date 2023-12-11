import { LINK_ICONS } from '../Link/Link'

export type SidebarProps = {
  className?: string
  onClick?: () => void
}

export type SidebarLinks = {
  name: string
  href: string
  icon: LINK_ICONS
}
