import styled from 'styled-components';

import Col from "../../components/Col";

const BuyPanel = styled(Col)`
  position: fixed;
  left: 57.5%;
  height: 70vh;
  width: 35%;
  background-color: rgb(var(--light-beige));
`;

const CarouselPanel = styled(Col)`
  height: 70vh;
  width: 50%;
  padding: 0;
`;

const Figure = styled.figure`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000001a;
  cursor: pointer;
  
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

const SpecsList = styled.ul`
  display: grid;
  ${props => props.elemNumb ? `grid-template-rows: repeat(${props.elemNumb}, max-content);` : "grid-template-rows: auto;"}
  grid-row-gap: 0px;
  grid-template-columns: 100%;
`;

const TagsList = styled.ul`
  display: grid;
  ${props => props.elemNumb ? `grid-template-columns: repeat(${props.elemNumb}, max-content);` : "grid-template-columns: auto;"}
  grid-column-gap: 10px;
  grid-template-rows: 100%;
`;

export { BuyPanel, CarouselPanel, Figure, Image, SpecsList, TagsList };