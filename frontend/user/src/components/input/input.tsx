import clsx from 'clsx';
import React, { useRef, useState } from 'react';

import {
  inputMain,
  inputWrapper,
  inputWrapperFocused,
  placeholder,
  placeholderFocused,
} from './styles.css';
import { InputProps } from './type';

export const Input = (props: InputProps) => {
  const { ...rest } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={clsx(inputWrapper, isFocused && inputWrapperFocused)}>
      <span className={clsx(placeholder, isFocused && placeholderFocused)}>Email</span>
      <input
        ref={inputRef}
        type={rest.type}
        className={inputMain}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};
