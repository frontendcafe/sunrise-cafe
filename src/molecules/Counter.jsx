import React from 'react';
import styled from '@emotion/styled';

import H3 from '../atoms/H3';
import colors from '../styles/colors';
import IconTrash from '../image/IconTrash.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 120px;
  color: ${colors.accent};
`;

const Button = styled.div`
  display: grid;
  place-items: center;
  background-color: ${({filled}) => (filled ? colors.primary : colors.light)};
  color: ${({filled}) => (filled ? colors.light : colors.primary)};
  padding: 1rem;
  font-size: 17px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid ${({filled}) => (filled ? colors.light : colors.primary)};
  width: 4rem;
  height: 4rem;
`;

const Trash = styled.img`
  height: 3.5rem;
  cursor: pointer;
`;

Trash.defaultProps = {
  src: IconTrash,
};

export const Counter = ({count, setCount, onDelete, filled}) => {
  const subtract = () => {
    if (count > 1) setCount(count - 1);
  };

  const add = () => {
    setCount(count + 1);
  };

  return (
    <Container>
      {count > 1 && (
        <Button filled={filled} onClick={() => subtract()}>
          -
        </Button>
      )}
      {count <= 1 && <Trash onClick={() => onDelete()} />}
      <H3>{count}</H3>
      <Button filled={filled} onClick={() => add()}>
        <span>+</span>
      </Button>
    </Container>
  );
};
