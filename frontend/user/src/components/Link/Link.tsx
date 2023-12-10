import Link, { LinkProps } from 'next/link';
import React from 'react';
import { GoGear } from 'react-icons/go';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdLogout } from 'react-icons/md';

const ICONS = {
  gear: GoGear,
  dashboard: LuLayoutDashboard,
  logout: MdLogout,
  // 他のアイコンを適宜ここに追加する。
};

export type LINK_ICONS = keyof typeof ICONS;

type CustomLinkProps = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    icon?: keyof typeof ICONS;
    iconSize?: number;
  };

export const CustomLink: React.FC<CustomLinkProps> = ({ children, icon, iconSize, ...props }) => {
  const { href, as, passHref, replace, scroll, shallow, prefetch, locale, ...anchorProps } = props;
  const IconComponent = icon ? ICONS[icon] : null;

  return (
    <Link
      href={href}
      as={as}
      passHref={passHref}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
      locale={locale}
    >
      <span
        {...anchorProps}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        {IconComponent && <IconComponent size={iconSize} />}
        {children}
      </span>
    </Link>
  );
};
