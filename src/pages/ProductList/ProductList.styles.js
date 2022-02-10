import styled from 'styled-components';

const ProductsLayout = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  grid-template-rows: auto;
  grid-row-gap: 0%;
  grid-template-columns: 85% 15%;
  grid-column-gap: 0%;
`;

const ProductsGrid= styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr;
  grid-row-gap: 0;
  margin-bottom: 30px;
`;

export { ProductsLayout, ProductsGrid };