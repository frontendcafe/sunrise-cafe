import styled from '@emotion/styled';
import React from 'react';

import Button from '../atoms/Button';
import H2 from '../atoms/H2';

const HeaderSection = styled.div`
  display: grid;
  grid-template-columns: 267px 85px 200px;
`;

export default function ChoosePayment() {
  return (
    <>
      <HeaderSection>
        <H2>Forma de Pago</H2>
        <Button> X </Button>
      </HeaderSection>
    </>
  );
}
