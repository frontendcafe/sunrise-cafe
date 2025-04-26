import React from 'react';
import styled from '@emotion/styled';

import colors from '../styles/colors';

const ButtonAble = styled.button`
  width: 17.1rem;
  height: 6.4rem;
  background-color: ${colors.primary};
  border: none;
  border-radius: 1.3rem;
  color: ${colors.light};
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
const ButtonPrimary = ({text, disable, className, typeOfButton, handleClick}) => {
  return disable ? (
    <ButtonAble disabled className={className}>
      {text}
    </ButtonAble>
  ) : (
    <ButtonAble className={className} type={typeOfButton} onClick={handleClick}>
      {text}
    </ButtonAble>
  );
};

export default ButtonPrimary;
