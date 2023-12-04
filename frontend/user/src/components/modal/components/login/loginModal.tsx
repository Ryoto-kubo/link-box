import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';

import { Button, Typography } from '@src/components';
import { Input } from '@src/components/input';

import { formContainer, loginModalWrapper, title, closeBtnWrap, buttonStyle } from './styles.css';
import { Modal } from '../..';

interface LoginForm {
  email: string;
  password: string;
}

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  // Add any props you need for the LoginModal component
}

export const LoginModal: React.FC<LoginModalProps> = (props) => {
  // Add your component logic here
  const { isOpen, onClose } = props;

  // form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginForm>();

  const emailRef = useRef<HTMLInputElement | null>(null);
  const { ref: registerEmailRef, ...emailRest } = register('email', {
    required: 'メールアドレスを入力してください',
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: '有効なメールアドレスを入力してください',
    },
  });

  const passwordRef = useRef<HTMLInputElement | null>(null);
  const { ref: registerPasswordRef, ...passwordRest } = register('password', {
    required: 'パスワードを入力してください',
    minLength: {
      value: 8,
      message: 'パスワードは最低8文字必要です',
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      message:
        'パスワードには少なくとも1つの小文字、1つの大文字、1つの数字が含まれている必要があります',
    },
  });

  // This is tentative method to navigate to dashboard
  const router = useRouter();
  const navigateToDashboard = () => {
    router.push('/dashboard');
  };

  const handleOnFormSubmit = (data: LoginForm) => {
    // const email = emailRef.current?.value;
    // const password = passwordRef.current?.value;
    // console.log(email, password);
    navigateToDashboard();
  };

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
          <form className={formContainer} onSubmit={handleSubmit(handleOnFormSubmit)}>
            <Input
              label='Email'
              type='email'
              aria-invalid={errors.email ? 'true' : 'false'}
              {...emailRest}
              ref={(e) => {
                registerEmailRef(e);
                emailRef.current = e;
              }}
              error={errors.email?.message}
            />
            <Input
              label='Password'
              type='password'
              aria-invalid={errors.password ? 'true' : 'false'}
              {...passwordRest}
              ref={(e) => {
                registerPasswordRef(e);
                passwordRef.current = e;
              }}
              error={errors.password?.message}
            />
            <Button text='Login' type='submit' isFullWidth />
          </form>
        </>
      )}
    </Modal>
  );
};
