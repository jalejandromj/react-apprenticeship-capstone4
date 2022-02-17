import React from 'react';

import { BadgeWrapper } from './Badge.styles';

function Badge({ children }) {

  return (
    <BadgeWrapper>{children}</BadgeWrapper>
  );
}

export default Badge;
