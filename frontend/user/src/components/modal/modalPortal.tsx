import { FC, ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export const modalPortalId = 'modalsRoot';

interface ModalPortalProps {
  children?: ReactNode;
  isOpen?: boolean;
}

export const ModalPortal: FC<ModalPortalProps> = (props) => {
  const { children, isOpen } = props;
  const domElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const modalRoot = document.getElementById(modalPortalId);
    if (modalRoot) {
      domElement.current = modalRoot;
    }
  }, [isOpen]);

  if (!domElement.current) {
    return null;
  }

  domElement.current.ariaHidden = isOpen ? 'false' : 'true';

  return createPortal(children, domElement.current);
};
