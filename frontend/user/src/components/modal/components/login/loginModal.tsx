import React, { useRef } from 'react';
import { IoClose } from 'react-icons/io5';

import { Button, Typography } from '@src/components';
import { Input } from '@src/components/input';

import { formContainer, loginModalWrapper, title, closeBtnWrap, buttonStyle } from './styles.css';
import { Modal } from '../..';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  // Add any props you need for the LoginModal component
}

export const LoginModal: React.FC<LoginModalProps> = (props) => {
  // Add your component logic here
  const { isOpen, onClose } = props;

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    // Add your JSX code here
    <Modal isOpen={isOpen} onModalClose={onClose} className={loginModalWrapper}>
      {({ closeModal }) => (
        <>
          <Typography variant='h2' className={title}>
            ログイン
          </Typography>
          <div className={closeBtnWrap}>
            <button className={buttonStyle} type='button' onClick={closeModal}>
              <span aria-hidden='true' style={{ visibility: 'hidden' }}>
                close button
              </span>
            </button>
            <IoClose size='25px' />
          </div>
          <form action='' className={formContainer}>
            <Input name='email' label='Email' type='text' ref={emailRef} />
            <Input name='password' label='Password' type='password' ref={passwordRef} />
            <Button text='Login' isFullWidth />
          </form>
        </>
      )}
    </Modal>
  );
};
