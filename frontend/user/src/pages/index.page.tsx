import React, { ReactElement } from 'react';

import { modalPortalId } from '@src/components/modal/modalPortal';
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
      <div aria-hidden id={modalPortalId} style={{ height: '100%', width: '100%' }} />
    </>
  );
};

export default Page;
