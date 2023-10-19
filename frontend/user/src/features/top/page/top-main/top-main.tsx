import clsx from 'clsx';
import Image from 'next/image';

import { Button, Flex } from '@src/components';

import { imageContainer, imageItem } from './styles.css';

export const TopMain = () => {
  return (
    <div>
      <header>
        <Flex alignItems='center' justifyContent='spaceBetween'>
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
        </Flex>
      </header>
    </div>
  );
};
