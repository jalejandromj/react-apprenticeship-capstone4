import styled from 'styled-components';

const FooterComponent = styled.section`
  height: auto;
  background-color: rgba(var(--grayish-black));
  box-shadow: 0 9px 5px 0 rgb(0 0 0 / 55%);
  color: rgba(var(--discreet-white));
  padding: 2.5% 2%;
  & > div {
    position: relative;
    top: 15%;
    height: 70%;
  }
  & > div > div {
    display: flex;
    height: 100%;
  }
`;

export { FooterComponent };