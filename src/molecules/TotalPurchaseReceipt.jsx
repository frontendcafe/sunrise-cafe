import React from 'react';
import styled from '@emotion/styled';

import colors from '../styles/colors';
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
  const Sum = styled.div`
    font-weight: bold;
    font-size: 5.4rem;
    padding: 0.8rem 0;
  `;

  const Separator = styled.hr`
    border: 2px solid ${colors.dark};
  `;

  const Info = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const Spread = styled.div`
    padding: 0.7rem 0;
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
          <Spread>
            <Link>Forma De Pago</Link>
          </Spread>
          <Spread>
            {' '}
            <Link>{paymentMethod}</Link>
          </Spread>
        </Payment>
        <Sum>${parseFloat(total, 10).toFixed(2)}</Sum>
      </Info>
      <Separator />
    </Container>
  );
};
