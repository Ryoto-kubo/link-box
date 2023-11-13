import { FC } from 'react';

import * as styles from './styles.css';
import Sidebar from '../sidebar/sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.LayoutWrap}>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
