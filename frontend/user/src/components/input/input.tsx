import clsx from 'clsx';
import React, { forwardRef, useState } from 'react';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import {
  inputMain,
  inputWrapper,
  inputWrapperError,
  placeholder,
  placeholderFocused,
  iconWrapper,
  errorText,
} from './styles.css';
import { InputProps } from './type';

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { name, label, type, error, onChange, ...rest } = props;
  const [hasContent, setHasContent] = useState(false);

  return (
    <div style={{ width: '100%', height: '60px' }}>
      <div className={clsx(inputWrapper, error && inputWrapperError)}>
        {label && (
          <label htmlFor={name} className={clsx(placeholder, hasContent && placeholderFocused)}>
            {label}
          </label>
        )}
        <input
          id={name}
          ref={ref}
          type={type}
          className={inputMain}
          {...rest}
          onFocus={() => {
            setHasContent(true);
          }}
          onBlur={(e) => {
            if (e.currentTarget.value === '') setHasContent(false);
          }}
        />
        {label === 'Email' && (
          <div className={iconWrapper}>
            <MdEmail />
          </div>
        )}
        {label === 'Password' && (
          <div className={iconWrapper}>
            <FaLock />
          </div>
        )}
      </div>
      {error && <p className={errorText}>{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';
