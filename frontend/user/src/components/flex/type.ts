import { ReactNode } from 'react';

export type FlexProps = {
  children: ReactNode;
  alignItems: FlexAlignItems;
  justifyContent: FlexJustifyContent;
};

export type FlexAlignItems = 'center' | 'stretch' | 'flexStart' | 'flexEnd';

export type FlexJustifyContent =
  | 'center'
  | 'spaceBetween'
  | 'spaceAround'
  | 'flexStart'
  | 'flexEnd';

export type FlexStyles = {
  flex: string;
  alignItems: {
    [key in FlexAlignItems]: string;
  };
  justifyContent: {
    [key in FlexJustifyContent]: string;
  };
};
