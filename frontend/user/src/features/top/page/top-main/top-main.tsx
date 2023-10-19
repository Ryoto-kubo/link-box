import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { Button, Flex, Typography } from '@src/components';
import { useScreenSize } from '@src/hooks';
import { mb20, mb40, mr16 } from '@src/styles/spacing.css';

import {
  firstViewContainer,
  headerContainer,
  logoContainer,
  logoItem,
  mainContainer,
  mainTitleContainer,
  symbolItem,
} from './styles.css';

export const TopMain = () => {
  const { isMobile } = useScreenSize();

  return (
    <div>
      <header className={clsx(mb40)}>
        <div className={clsx(headerContainer)}>
          <Flex alignItems='center' justifyContent='spaceBetween'>
            <div className={clsx(logoContainer)}>
              <Image
                src='/images/logo.svg'
                alt='logo'
                width={100}
                height={100}
                className={clsx(logoItem)}
              />
            </div>
            <div>
              <Flex alignItems='center'>
                <div className={clsx(mr16)}>
                  <Button text='Login' color='primary' variant='text' />
                </div>
                <div>
                  <Button text='Signup' color='primary' />
                </div>
              </Flex>
            </div>
          </Flex>
        </div>
      </header>
      <main className={clsx(mainContainer)}>
        <Flex
          alignItems='center'
          justifyContent='spaceBetween'
          className={clsx(firstViewContainer)}
        >
          <div className={clsx(mainTitleContainer)}>
            <Typography variant='h1' className={clsx(mb20)}>
              Manage all links
            </Typography>
            <Typography variant='title'>
              All Links can be managed in a Box created by you!
            </Typography>
          </div>
          <div>
            <Image
              src='/images/symbol-1.svg'
              alt='hero'
              width={380}
              height={380}
              className={clsx(symbolItem)}
            />
          </div>
        </Flex>
      </main>
    </div>
  );
};
