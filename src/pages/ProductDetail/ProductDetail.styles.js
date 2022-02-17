import styled from 'styled-components';

import Col from "../../components/Col";

const BuyPanel = styled(Col)`
  position: fixed;
  left: 50%;
  height: 68%;
  width: 35%;
  background-color: rgb(var(--light-beige));
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

export { BuyPanel, SpecsList, TagsList };