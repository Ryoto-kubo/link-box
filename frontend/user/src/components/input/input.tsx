import clsx from 'clsx';
import React, { forwardRef, useState } from 'react';

import { inputMain, inputWrapper, placeholder, placeholderFocused } from './styles.css';
import { InputProps } from './type';

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { name, label, type, ...rest } = props;
  const [hasContent, setHasContent] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasContent(event.target.value.length > 0);
    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <div className={inputWrapper}>
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
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
});

Input.displayName = 'Input';
