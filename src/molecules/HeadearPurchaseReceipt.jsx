import React from 'react';
import styled from '@emotion/styled';

const HeaderOneDouble = styled.h1`
  font-size: 4.8rem;
  margin: 0rem;
`;

const BlockLeft = styled.p`
  font-size: 2rem;
  > p {
    margin: 1rem;
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

function HeadearPurchaseReceipt() {
  return (
    <>
      <HeaderOneDouble>Recibo</HeaderOneDouble>
      <FlexContainer>
        <BlockLeft>
          <p>01/01/2020</p>
          <p>10:19 P.M.</p>
        </BlockLeft>
        <BlockRight>Orden No. 0</BlockRight>
      </FlexContainer>
    </>
  );
}

export default HeadearPurchaseReceipt;
