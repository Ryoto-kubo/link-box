import clsx from 'clsx';
import React from 'react';

import { flexStyles } from './styles.css';
import { FlexProps } from './type';

export const Flex = ({ alignItems, justifyContent, children }: FlexProps) => {
  return (
    <div
      className={clsx(
        flexStyles.flex,
        flexStyles.alignItems[alignItems],
        flexStyles.justifyContent[justifyContent],
      )}
    >
      {children}
    </div>
  );
};
