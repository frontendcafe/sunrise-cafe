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
  width: 85px;
  height: 2.4rem;
  color: ${colors.accent};
`;

const Button = styled.div`
  display: grid;
  place-items: center;
  background-color: ${({filled}) => (filled ? colors.primary : colors.light)};
  color: ${({filled}) => (filled ? colors.light : colors.primary)};
  padding: 0.5rem;
  font-size: 13px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid ${({filled}) => (filled ? colors.light : colors.primary)};
  width: 2.5rem;
  height: 2.5rem;
`;

const Trash = styled.img`
  height: 1.75rem;
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
