import styled from '@emotion/styled';
import React from 'react';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

const DisplayNumber = styled.p`
  font-family: ${fonts.primary};
  height: 4.9rem; 
  width: 6.6rem;
  background: ${colors.primary};
`;

function DisplayNumberCart({ value }) {
  return <DisplayNumber>{value}</DisplayNumber>;
}

export default DisplayNumberCart;
