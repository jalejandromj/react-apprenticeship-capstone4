import styled from 'styled-components';

const BadgeWrapper = styled.span`
  width: fit-content;
  color: rgb(var(--pale-green));
  border: 1px solid rgb(var(--grayish-black));
  border-radius: 20px;
  padding: 5px 12px;
  :hover& {
    border: 1px solid rgb(var(--pale-green)) !important;
    box-shadow: 0 5px 5px 0 rgb(0 0 0 / 55%);
  }
`;

export { BadgeWrapper };