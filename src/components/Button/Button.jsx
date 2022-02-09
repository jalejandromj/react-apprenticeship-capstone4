import React from 'react';

import { ButtonElement } from './Button.styles';

function Button({blue, className, submit, onClick, style, children}) {

  return (
    <ButtonElement className={className} style={style} blue={blue} type={submit && "submit"} onClick={onClick}>{children}</ButtonElement>
  );
}

export default Button;
