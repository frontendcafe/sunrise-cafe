import React from 'react';
import styled from '@emotion/styled';

const HeaderOneDouble = styled.h1`
  font-size: 4.8rem;
  margin: 0rem;
`;

const BlockLeft = styled.p`
  font-size: 2rem;
  > p {
    margin: 1rem 0;
  }
`;

const BlockRight = styled.p`
  font-size: 3.2rem;
  font-weight: 800;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeadearPurchaseReceipt = ({paymentDate, paymentHour, paymentNumber}) => {
  return (
    <>
      <HeaderOneDouble>Recibo</HeaderOneDouble>
      <FlexContainer>
        <BlockLeft>
          <p>{paymentDate}</p>
          <p>{paymentHour}</p>
        </BlockLeft>
        <BlockRight>Orden No. {paymentNumber}</BlockRight>
      </FlexContainer>
    </>
  );
};

// export default HeadearPurchaseReceipt;
