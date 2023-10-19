import { ReactNode } from 'react';

export type FlexProps = {
  direction?: FlexDirection;
  alignItems: FlexAlignItems;
  justifyContent?: FlexJustifyContent;
  className?: string;
  children: ReactNode;
};

export type FlexDirection = 'row' | 'rowReverse' | 'column' | 'columnReverse';

export type FlexAlignItems = 'center' | 'stretch' | 'flexStart' | 'flexEnd';

export type FlexJustifyContent =
  | 'center'
  | 'spaceBetween'
  | 'spaceAround'
  | 'flexStart'
  | 'flexEnd';

export type FlexStyles = {
  flex: string;
  direction: {
    [key in FlexDirection]: string;
  };
  alignItems: {
    [key in FlexAlignItems]: string;
  };
  justifyContent: {
    [key in FlexJustifyContent]: string;
  };
};
