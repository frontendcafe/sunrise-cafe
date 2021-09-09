import React from 'react';
import styled from '@emotion/styled';

import colors from '../styles/colors';
import H1 from '../atoms/H1';
import H2 from '../atoms/H2';
import H3 from '../atoms/H3';
import Price from '../atoms/Price';
import Button from '../atoms/Button';
import Link from '../atoms/Link';
import DescriptionProduct from '../atoms/DescriptionProduct';
import DescriptionPrice from '../atoms/DescriptionPrice';
import CardInfo from '../atoms/CardInfo';
import OrderTotal from '../atoms/OrderTotal';
import TextInfo from '../atoms/TextInfo';
import PriceInfo from '../atoms/PrinceInfo';
import DisplayNumberCart from '../atoms/DisplayNumberCart';

const Wrapper = styled.section`
  padding: 4em;
  background: ${colors.secondary};
`;
const Tipography = () => {
  return (
    <Wrapper>
      <H1>H1</H1>
      <H2>H2</H2>
      <H3>H3/Labels/Placeholder</H3>
      <Price>Precio/Total</Price>
      <Button>Botones</Button>
      <br />
      <Link>Links/Notas</Link>
      <DescriptionProduct>Descripción</DescriptionProduct>
      <DescriptionPrice>Precio Descripción $110</DescriptionPrice>
      <CardInfo>
        <TextInfo>Recaudado</TextInfo>
        <PriceInfo>$2800</PriceInfo>
      </CardInfo>
      <OrderTotal>Total $500</OrderTotal>
      <DisplayNumberCart value="045" />
    </Wrapper>
  );
};

export default Tipography;
