import React from 'react';

import { Modal } from '../..';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  // Add any props you need for the LoginModal component
}

export const LoginModal: React.FC<LoginModalProps> = (props) => {
  // Add your component logic here
  const { isOpen, onClose } = props;

  return (
    // Add your JSX code here
    <Modal isOpen={isOpen} onModalClose={onClose}>
      <h1>SignUp</h1>
      <form action=''>
        <label htmlFor='email'>Email</label>
        <input id='email' type='text' placeholder='email' />
        <label htmlFor='email'>Password</label>
        <input type='password' placeholder='password' />
      </form>
    </Modal>
  );
};
