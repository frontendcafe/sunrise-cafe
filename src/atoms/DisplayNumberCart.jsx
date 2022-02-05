import styled from '@emotion/styled';
import React from 'react';

import colors from '../styles/colors';
import IconCart from '../image/IconCart.svg';

const DisplayNumberCartStyle = styled.p`
  height: 5.6rem; 
  width: 8.2rem;
  background: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.3rem;
  padding: 1.8rem;
`;

const DisplayNumber = styled.p`
  color: ${colors.light};
  font-size: 1.6rem;
`;

// const Logo = styled.div`
// align-items: flex-start;
// justify-content: space-between;
// gap: 1rem;
// `;

const CartIcon = styled.img`
  width: 1.7rem;
  margin: 0rem 1rem;
`;

CartIcon.defaultProps = {
  src: IconCart,
};

function DisplayNumberCart({ value }) {
  return (
    <DisplayNumberCartStyle>
      <CartIcon />
      <DisplayNumber>{value}</DisplayNumber>
    </DisplayNumberCartStyle>);
}

export default DisplayNumberCart;
