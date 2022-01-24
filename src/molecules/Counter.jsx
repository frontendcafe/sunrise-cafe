import React, {useState} from 'react';
import styled from '@emotion/styled';

import H3 from '../atoms/H3';
import colors from '../styles/colors';
import IconTrash from '../image/IconTrash.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 80px;
  color: ${colors.accent};
`;

const Button = styled.div`
  display: grid;
  place-items: center;
  background-color: ${colors.primary};
  color: ${colors.light};
  padding: 0.6rem;
  border-radius: 50%;
  font-size: 1.4rem;
  cursor: pointer;
`;

const Trash = styled.img`
  height: 2.2rem;
  cursor: pointer;
`;

Trash.defaultProps = {
  src: IconTrash,
};

export const Counter = ({count, setCount, onDelete}) => {
  const subtract = () => {
    if (count > 1) setCount(count - 1);
  };

  const add = () => {
    setCount(count + 1);
  };

  return (
    <Container>
      {count > 1 && <Button onClick={() => subtract()}>-</Button>}
      {count <= 1 && <Trash onClick={() => onDelete()} />}
      <H3>{count}</H3>
      <Button onClick={() => add()}>+</Button>
    </Container>
  );
};
