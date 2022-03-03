import React from 'react';
import styled from '@emotion/styled';

import colors from '../styles/colors';
import Link from '../atoms/Link';

export const FooterPurchaseReceipt = () => {
  const Container = styled.div`
    margin: 2rem 0;
    display: flex;
    align-items: center;
  `;

  const Circle = styled.div`
    background-color: ${colors.dark};
    border-radius: 50%;
    margin-right: 2rem;
    width: 2rem;
    height: 2rem;
  `;

  return (
    <Container>
      <Circle />
      <Link>Gracias Por Su Compra En FrontEnd Sunrise Café.</Link>
    </Container>
  );
};
