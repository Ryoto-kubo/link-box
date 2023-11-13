import { useRouter } from 'next/router';
import React from 'react';

import Sidebar from '@src/components/sidebar/sidebar';

const DashboardMainPage: React.FC = () => {
  const history = useRouter();

  const handleNavigateToTopPage = () => {
    history.push('/');
  };

  return (
    <div>
      <Sidebar />
      <button type='button' onClick={handleNavigateToTopPage}>
        Go to Top Page
      </button>
    </div>
  );
};

export default DashboardMainPage;
