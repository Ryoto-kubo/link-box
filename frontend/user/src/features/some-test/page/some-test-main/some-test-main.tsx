import { MdDashboard } from 'react-icons/md';

import { Button } from '@src/components';

export const SomeTestMain = () => {
  return (
    <div>
      <h1>SomeTestPage</h1>
      <h2>Test</h2>
      <Button
        text='button'
        color='error'
        startIcon={{
          icon: <MdDashboard size={20} />,
        }}
      />
    </div>
  );
};
