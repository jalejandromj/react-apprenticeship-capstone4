import React, {useEffect} from 'react';

import { TextareaElement } from './Textarea.styles';

function Textarea({defaultValue, label, name, noLabel, onChange, placeholder, required, theme, value }) {

  useEffect(() => {

  }, []);

  return (
    <>
      {!noLabel && <label htmlFor={label.toLowerCase()} style={{color: "rgb(var(--indigo-blue))"}}><span>{label}</span></label>}
      <TextareaElement aria-label={label}
                    defaultValue={defaultValue ? defaultValue : undefined}
                    name={name.toLowerCase()}
                    onChange={onChange}
                    placeholder={placeholder ? placeholder : null} 
                    required={required ? true : false}
                    theme={theme}
                    value={value} />
    </>
  );
}

export default Textarea;
