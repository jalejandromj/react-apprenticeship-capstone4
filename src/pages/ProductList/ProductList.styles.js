import styled from 'styled-components';

import Col from '../../components/Col';
import { MEDIA_QUERIES } from '../../utils/constants';

const ProductsLayout = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  grid-template-rows: auto;
  grid-row-gap: 0%;
  grid-template-columns: 85% 15%;
  grid-column-gap: 0%;
  /* HD STYLES MD */
  @media screen and (min-width: ${MEDIA_QUERIES.md}) and (max-width: calc(${MEDIA_QUERIES.lg} - 1px)) {
    grid-template-columns: 80% 20%;
  }

  /* START 1366x768 (MOST COMMON) size LG */
  @media screen and (min-width: ${MEDIA_QUERIES.lg}) and (max-width: calc(${MEDIA_QUERIES.xl} - 1px)) {
    grid-template-columns: 82% 18%;
  }

  /* FULL HD STYLES XL */
  @media screen and (min-width: ${MEDIA_QUERIES.xl}) {
    grid-template-columns: 85% 15%;
  }
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

const CardColumn = styled(Col)`
  /* HD STYLES MD */
  @media screen and (min-width: ${MEDIA_QUERIES.md}) and (max-width: calc(${MEDIA_QUERIES.lg} - 1px)) {
    height: 400px;
  }

  /* START 1366x768 (MOST COMMON) size LG */
  @media screen and (min-width: ${MEDIA_QUERIES.lg}) and (max-width: calc(${MEDIA_QUERIES.xl} - 1px)) {
    height: 450px;
  }

  /* FULL HD STYLES XL */
  @media screen and (min-width: ${MEDIA_QUERIES.xl}) {
    height: 700px;
  }
`;

export { CardColumn, ProductsLayout, ProductsGrid };