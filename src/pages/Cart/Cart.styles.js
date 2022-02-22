import styled from 'styled-components';

export const Figure = styled.figure`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #0000001a;
  
  &:after{
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    content: "";
    background-color: #0000;
    transition: background-color .4s
  }
  &:hover{
    &::after {
      background-color: #00000026;
    }
  }
`;

export const Image = styled.img`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  mix-blend-mode: multiply;
  object-fit: cover;
`;