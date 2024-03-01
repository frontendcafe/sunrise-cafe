import React from 'react';
import styled from '@emotion/styled';

import colors from '../styles/colors';

const ButtonAble = styled.button`
  width: 17.1rem;
  height: 6.4rem;
  background-color: ${colors.light};
  border-color: ${colors.primary};
  border-radius: 1.3rem;
  color: ${colors.primary};
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const ButtonSecondary = ({text, disable, buttonClick}) => {
  return disable ? (
    <ButtonAble disabled>{text}</ButtonAble>
  ) : (
    <ButtonAble onClick={() => buttonClick()}>{text}</ButtonAble>
  );
};

export default ButtonSecondary;
