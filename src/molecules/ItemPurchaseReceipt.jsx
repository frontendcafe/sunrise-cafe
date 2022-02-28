import React from 'react';
import styled from '@emotion/styled';
import colors from '../styles/colors';

export const Itempurchasereceipt = () => {
  return (
    <Container>
      <Items>
        <Description>Descripción</Description>
        <Quantity>Cantidad</Quantity>
        <Price>Precio</Price>
      </Items>
      <Row>
        <Category>Bebidas</Category>
      </Row>
      <Row>
        <Description>Café Mocka</Description>
        <Quantity>1</Quantity>
        <Price>$110.00</Price>
      </Row>
      <Row>
        <Category>Panadería</Category>
      </Row>
      <Row>
        <Description>Crossaint</Description>
        <Quantity>2</Quantity>
        <Price>$35.00</Price>
      </Row>
      <Row>
        <Description>Choux</Description>
        <Quantity>2</Quantity>
        <Price>$90.00</Price>
      </Row>
    </Container>
  );
}

const Container = styled.div`
width: auto;
margin: 1rem 5rem;
height: auto;
`;

const Items = styled.ul`
font-weight: bold;
border-bottom: 1px solid ${colors.dark};
line-height: 0px;
margin: 0;
padding: 0;
width: 100%;
display: flex;
justify-content: space-between;
`;

const Description = styled.p`
font-size: 2rem;
width: 50%;
`;

const Category = styled.p`
font-size: 2rem;
width: 50%;
font-weight: bold;
margin-bottom: 0.6rem;
`;

const Price = styled.p`
font-size: 2rem;
width: 15%;
text-align: right;
`;

const Quantity = styled.p`
font-size: 2rem;
width: 15%;
text-align: right;
`;

const Row = styled.ul`
font-weight: light;
line-height: 0px;
padding: 0px;
width: 100%;
display: flex;
justify-content: space-between;
`;

