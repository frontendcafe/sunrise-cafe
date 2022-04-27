import React, {useState} from 'react';
import styled from '@emotion/styled';

import Price from '../atoms/Price';
import colors from '../styles/colors';

import {Counter} from './Counter';

const Container = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin: 1rem 0;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${colors.gray};

  &:last-child {
    border-bottom: 20px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  text-align: center;
`;

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: normal;
`;

const Text = styled.span`
  font-size: 1.2rem;
`;

export const OrdenItem = ({title, subtitle, nota, price, handleDelete, amount}) => {
  const [cant, setCant] = useState(amount);

  return (
    <Container>
      <Counter filled count={cant} setCount={setCant} onDelete={handleDelete} />
      <Description>
        <Title>{title}</Title>
        <Text>{subtitle}</Text>
        <Text>{nota}</Text>
      </Description>
      <Price>${price}</Price>
    </Container>
  );
};
