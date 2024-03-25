import styled from '@emotion/styled';
import React from 'react';

import ButtonC from '../atoms/Button-cancel';
import H2 from '../atoms/H2';
import ButtonSecondary from '../atoms/Button-secondary';
// import Buttons from '../molecules/Buttons';
import ButtonPrimary from '../atoms/Button-primary';

import {CardPayment} from './CardPayment';

const HeaderSection = styled.div`
  display: grid;
  grid-template-columns: 267px 85px;
`;

const SubHeaderSection = styled.div`
  display: grid;
  grid-template-columns: 19em 5em;
  padding: 3em 0;
`;

export default function ChoosePayment() {
  function handleClick() {
    console.log('payment');
  }

  return (
    <>
      <HeaderSection>
        <H2>Forma de Pago</H2>
        <ButtonC>X</ButtonC>
      </HeaderSection>

      <SubHeaderSection>
        <ButtonSecondary buttonClick={() => handleClick()} text={'tarjeta'} />
        <ButtonSecondary text={'efectivo'} />
      </SubHeaderSection>

      <CardPayment />

      <SubHeaderSection>
        <ButtonSecondary text={'cancelar'} />
        <ButtonPrimary text={'pagar'} />
      </SubHeaderSection>
      {/* <Buttons /> */}
    </>
  );
}
