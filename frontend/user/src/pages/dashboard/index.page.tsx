import React, { ReactElement } from 'react';

import Layout from '@src/components/layout';
import DashboardMainPage from '@src/features/dashboard/page/dashboard-main/index.page';

export const Page = () => {
  return <DashboardMainPage />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
