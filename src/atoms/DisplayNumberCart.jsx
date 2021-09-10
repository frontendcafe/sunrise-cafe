import styled from '@emotion/styled';
import React from 'react';

import colors from '../styles/colors';

const DisplayNumberCartStyle = styled.p`
  height: 4.9rem; 
  width: 6.6rem;
  background: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
`;

const DisplayNumber = styled.p`
  color: ${colors.light};
`;

function DisplayNumberCart({ value }) {
  return (
    <DisplayNumberCartStyle>
      <DisplayNumber>{value}</DisplayNumber>
    </DisplayNumberCartStyle>);
}

export default DisplayNumberCart;
