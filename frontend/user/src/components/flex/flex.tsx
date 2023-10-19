import clsx from 'clsx';
import React from 'react';

import { flexStyles } from './styles.css';
import { FlexProps } from './type';

export const Flex = ({
  direction = 'row',
  alignItems,
  justifyContent = 'flexStart',
  className,
  children,
}: FlexProps) => {
  return (
    <div
      className={clsx(
        flexStyles.flex,
        flexStyles.direction[direction],
        flexStyles.alignItems[alignItems],
        flexStyles.justifyContent[justifyContent],
        className,
      )}
    >
      {children}
    </div>
  );
};
