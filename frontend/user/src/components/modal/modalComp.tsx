/* eslint-disable complexity */
import clsx from 'clsx';
import { FC, useCallback, useRef, useState } from 'react';

import { modalWrapper, modalBackdrop, isModalClosing, modalMainBody } from './styles.css';
import { type ModalComponentProps } from './types';

import { ModalPortal } from '.';

/** simple helper function to promise timeout, works for animations and also promise testing/tryout */
export const sleep = async (timeout: number) =>
  new Promise<void>((res) => {
    setTimeout(() => {
      res();
    }, timeout);
  });

const ModalComponent: FC<ModalComponentProps> = (props) => {
  const { isOpen, onModalClose, children } = props;
  const modalWrapRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleAnimatedUnmount = useCallback(async () => {
    setIsClosing(true);
    await sleep(700);
    setIsClosing(false);

    if (onModalClose) {
      onModalClose();
    }
  }, [onModalClose]);

  return (
    <ModalPortal isOpen={isOpen}>
      {isOpen && (
        <div
          aria-modal='true'
          ref={modalWrapRef}
          className={clsx(modalWrapper, isClosing && isModalClosing)}
        >
          <button aria-hidden className={modalBackdrop} onClick={handleAnimatedUnmount} />
          <div className={clsx(modalMainBody)} aria-label='modal-main-body'>
            {typeof children === 'function'
              ? children({ closeModal: handleAnimatedUnmount })
              : children}
          </div>
        </div>
      )}
    </ModalPortal>
  );
};

export default ModalComponent;
