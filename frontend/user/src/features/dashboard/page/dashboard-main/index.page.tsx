import { useRouter } from 'next/router';
import React from 'react';

const DashboardMainPage: React.FC = () => {
  const history = useRouter();

  const handleNavigateToTopPage = () => {
    history.push('/');
  };

  return (
    <div>
      <h1>Dashboard Main Page</h1>
      <p>Welcome to the dashboard main page!</p>
      <button type='button' onClick={handleNavigateToTopPage}>
        Go to Top Page
      </button>
    </div>
  );
};

export default DashboardMainPage;
