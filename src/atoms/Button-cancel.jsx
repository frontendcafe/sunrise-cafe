import React from 'react';
import styled from '@emotion/styled';

import colors from '../styles/colors';

const Button = styled.button`
  width: 8.5rem;
  height: 6.4rem;
  background-color: ${colors.light}; //Cambio para diseño actual, no hay fondo
  border-color: ${colors.primary};
  border-radius: 1.3rem;
  color: ${colors.primary};
  font-size: 2rem;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;
const ButtonCancel = () => {
  const buttonClick = () => {
    console.log('Cancel');
  };

  return <Button onClick={() => buttonClick()}>X</Button>;
};

export default ButtonCancel;
