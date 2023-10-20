import React, { ReactElement } from 'react';

import { TopPage } from '@src/features/top/page';
import { CustomHead } from '@src/meta/head';

export const Page = () => {
  return <TopPage />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <CustomHead title='LinkBox' />
      {page}
    </>
  );
};

export default Page;
