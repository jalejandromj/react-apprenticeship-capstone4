import styled from 'styled-components';

const ButtonElement = styled.button`
  display: inline-block;
  position: relative;
  align-content: center;
  width: fit-content;
  background: ${props => props.blue ? "rgb(var(--dark-blue))" : "transparent"};
  border: 1px solid rgb(var(--light-beige));
  color: rgba(var(--discreet-white));
  font-size: 1rem;
  padding: 12px 30px;
  text-align: center;
  transition: ease-out 0.2s;
  :hover& {
    border: 1px solid rgb(var(--pale-green)) !important;
    box-shadow: 0 5px 5px 0 rgb(0 0 0 / 55%);
  }
  :active& {
    background-color: rgba(var(--discreet-white));
    color: rgba(var(--dark-blue));
  }
  &.selected {
    background-color: rgba(var(--pale-green));
    border: none;
  }
  &.selected > span {
    color: rgb(var(--beige)) !important;
  }
`;

export { ButtonElement };