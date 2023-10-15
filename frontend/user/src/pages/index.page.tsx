import { ReactElement } from 'react';

import { TopPage } from '@src/features/top/page';

export const Page = () => {
  return <TopPage />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Page;
