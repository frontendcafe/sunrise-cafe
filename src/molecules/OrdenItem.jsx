import React, {useState} from 'react';
import styled from '@emotion/styled';

import Price from '../atoms/Price';

import {Counter} from './Counter';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-stard;
  gap: 1rem;
  margin: 2rem 0;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: normal;
`;

const Text = styled.span`
  font-size: 1.2rem;
`;

export const OrdenItem = ({title, subtitle, nota, price, handleDelete}) => {
  const [cant, setCant] = useState(1);

  return (
    <Container>
      <Counter filled count={cant} setCount={setCant} onDelete={handleDelete} />
      <Description>
        <Title>{title}</Title>
        <Text>{subtitle}</Text>
        <Text>{nota}</Text>
      </Description>
      <Price>{price}</Price>
    </Container>
  );
};
