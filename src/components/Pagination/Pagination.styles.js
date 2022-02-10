import styled from 'styled-components';

const PaginationLayout = styled.nav`
  display: grid;
  height: 40px;
  width: 100%;
  grid-template-columns: 20% 15% 15% 15% 15% 20%;
  grid-column-gap: 0%;
  grid-template-rows: auto;
  grid-row-gap: 0;
`;

export { PaginationLayout };