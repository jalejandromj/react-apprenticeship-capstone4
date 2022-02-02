import React from 'react';

import { InputElement } from './Input.styles';

function Input({ defaultValue, label, name, noLabel, onChange, placeholder, required, type, theme, value }) {

  return (
    <>
      {!noLabel && <label htmlFor={label.toLowerCase()} style={{color: "rgb(var(--indigo-blue))"}}>{label}</label>}
      <InputElement aria-label={label}
                    defaultValue={defaultValue ? defaultValue : undefined}
                    name={name.toLowerCase()}
                    onChange={onChange}
                    placeholder={placeholder ? placeholder : null} 
                    required={required ? true : false}
                    theme={theme} 
                    type={type}
                    value={value} />
    </>
  );
}

export default Input;
