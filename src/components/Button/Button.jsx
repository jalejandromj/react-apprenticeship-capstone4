import React from 'react';

import { ButtonElement } from './Button.styles';

function Button({ className, disabled, onClick, style, submit, children}) {

  return (
    <ButtonElement className={className}
                   disabled={disabled}
                   onClick={onClick}
                   style={style} 
                   type={submit && "submit"}
    >
      {children}
    </ButtonElement>
  );
}

export default Button;
