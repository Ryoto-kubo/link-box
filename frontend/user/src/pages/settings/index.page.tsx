import React, { ReactElement } from 'react';

import Layout from '@src/components/layout';
import SettingsMainPage from '@src/features/settings/page/settings-main/index.page';

export const Page = () => {
  return <SettingsMainPage />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
