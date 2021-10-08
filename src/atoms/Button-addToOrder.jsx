import React from 'react';
import styled from '@emotion/styled';

import colors from '../styles/colors';

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  width: 81.8rem;
  height: 7.2rem;
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
`;
const ButtonAddToOrder = ({price}) => {
  const buttonClick = () => {
    console.log('Add to order');
  };

  return (
    <Button onClick={() => buttonClick()}>
      <p style={{margin: 'auto 0px auto 24px'}}>Agregar a la orden</p>
      <p style={{margin: 'auto 24px auto 0px'}}>{price}</p>
    </Button>
  );
};

export default ButtonAddToOrder;
