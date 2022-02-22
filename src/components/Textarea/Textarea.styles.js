import styled from 'styled-components';

const TextareaElement = styled.textarea`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${props => (props.theme === "dark" ) ? "rgb(var(--dark-purple));" : "rgb(var(--indigo-blue));"}
  color: ${props => (props.theme === "dark" ) ? "rgb(var(--dark-blue));" : "rgb(var(--discreet-white));"}
  font-size: 0.9rem;
  letter-spacing: 1px;
  line-height: 2.1rem;
  padding-left: 10px;

  :focus& {
    outline: none;
    background-color: rgb(255 255 255 / 10%);
  }
  :active& {
    
  }
`;

export { TextareaElement };