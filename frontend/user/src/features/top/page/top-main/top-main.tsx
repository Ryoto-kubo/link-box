import clsx from 'clsx';
import Image from 'next/image';

import { Button } from '@src/components';

import { flexContainer, imageContainer, imageItem } from './styles.css';

export const TopMain = () => {
  return (
    <div>
      <header>
        <div className={clsx(flexContainer)}>
          <div className={clsx(imageContainer)}>
            <Image
              src='/images/logo.svg'
              alt='logo'
              width={100}
              height={100}
              className={clsx(imageItem)}
            />
          </div>
          <Button text='Login' color='primary' />
        </div>
      </header>
    </div>
  );
};
