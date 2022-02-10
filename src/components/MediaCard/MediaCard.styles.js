import styled, { css } from 'styled-components';

const Ul = styled.ul`
  display: grid;
  display: -ms-grid;
  grid-row-gap: 0px;

  grid-template-rows: 87% 8% 5%;
  -ms-grid-rows: auto 10% 23.5% 6.5%;

  grid-template-columns: 100%;
  -ms-grid-columns: 100%;

  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  ${(props) =>
    props.mini &&
    css`
      grid-template-rows: 73% 13.5% 13.5%;
      -ms-grid-rows: auto 10% 23.5% 6.5%;
    `};
`;

const Li = styled.li`
  position: relative;
  &.videoDescr {
    color: gray;
    font-size: 15px;
  }
  &.videoChannel {
    color: black;
    font-size: 15px;
    font-weight: bold;
  }
`;

const Figure = styled.figure`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

const Image = styled.img`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  mix-blend-mode: multiply;
  object-fit: cover;
`;

export { Figure, Image, Li, Ul };