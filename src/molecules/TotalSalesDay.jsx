import React from 'react';
import styled from '@emotion/styled';

import CardInfo from '../atoms/CardInfo';
import PriceInfo from '../atoms/PrinceInfo';
import TextInfo from '../atoms/TextInfo';

const Container = styled.div`
  display: flex;
  gap: 5rem;
`;

export const TotalSalesDay = ({orders, raised, products}) => {
  return (
    <Container>
      <CardInfo>
        <TextInfo>{orders.name}</TextInfo>
        <PriceInfo>{orders.cant}</PriceInfo>
      </CardInfo>

      <CardInfo>
        <TextInfo>{raised.name}</TextInfo>
        <PriceInfo>{raised.cant}</PriceInfo>
      </CardInfo>

      <CardInfo>
        <TextInfo>{products.name}</TextInfo>
        <PriceInfo>{products.cant}</PriceInfo>
      </CardInfo>
    </Container>
  );
};
