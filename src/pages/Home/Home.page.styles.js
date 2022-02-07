import styled from 'styled-components';

const CategoriesContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 48.5% 48.5%;
  grid-row-gap: 3%;
  grid-template-columns: 48% 24% 24%;
  grid-column-gap: 2%;
  grid-template-areas:
    "panel0 panel1 panel3"
    "panel0 panel2 panel4";
`;

export { CategoriesContainer };