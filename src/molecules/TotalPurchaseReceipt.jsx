import React from 'react';
import styled from '@emotion/styled';

import colors from '../styles/colors';
import H1 from '../atoms/H1';
import Link from '../atoms/Link';

export const TotalPurchaseReceipt = ({paymentMethod, total}) => {
  const Container = styled.div`
    margin-top: 2rem;
  `;

  const Total = styled.div`
    font-weight: bold;
    text-align: right;
    font-size: 1.5rem;
  `;

  const Separator = styled.hr`
    border: 2px solid ${colors.dark};
  `;

  const Info = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const Payment = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  return (
    <Container>
      <Total>
        <span>Total</span>
      </Total>
      <Separator />
      <Info>
        <Payment>
          <Link>Forma De Pago</Link>
          <Link>{paymentMethod}</Link>
        </Payment>
        <H1>${total}</H1>
      </Info>
      <Separator />
    </Container>
  );
};
