import { type ReactNode } from 'react';

export interface ModalComponentProps {
  children: ReactNode | ((functionProps: { closeModal: () => Promise<void> }) => ReactNode);

  /**
   * determine if clicking the backdrop will close the modal
   */
  closeOnBackdropClick?: boolean;

  /**
   * prop that controls the visibility of the modal
   */

  isOpen: boolean;

  /**
   * function that is called when the user clicks on the backdrop
   * it is mainly used to set the isOpen prop to false
   */

  onRequestClose?: () => void;

  /**
   * width of the modal main body, it has an aspect ratio of 16 / 9
   * default value is 75%
   */

  modalWidth?: `${number}%` | `${number}em`;

  /**
   * time animation when mounting the popup
   */
  mountingTimeout?: number;

  /**
   * height of the modal main body, it has an aspect ratio of 16 / 9
   * if height is defined, the aspect-ratio will be removed
   */

  modalHeight?: `${number}%` | `${number}em` | 'auto';

  /**
   * callback event that happens until backdrop animation has ended
   */

  onModalOpen?: (event: React.AnimationEvent<HTMLElement>, element: HTMLDivElement) => void;

  /**
   * callback event that happens until the modal has completely being removed
   */

  onModalClose?: () => void;

  /**
   * modal will close on pressing the escape key
   */

  closeOnEsc?: boolean;

  /**
   * Prop that renders a header with the text and close button
   */

  title?: string;

  className?: string;

  wrapperClassName?: string;

  modalHeaderComponent?: ReactNode;

  hideArrows?: boolean;

  transparentBG?: boolean;

  closeButtonTypeX?: boolean;

  referringPage?: string;

  hideBackdropFilter?: boolean;

  noPadding?: boolean;

  noHeaderButtons?: boolean;
}
