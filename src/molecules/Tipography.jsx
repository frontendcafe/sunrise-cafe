import React from 'react';
import styled from '@emotion/styled';

import colors from '../styles/colors';
import H1 from '../atoms/H1';
import H2 from '../atoms/H2';
import H3 from '../atoms/H3';
import Price from '../atoms/Price';

const Wrapper = styled.section`
  padding: 4em;
  background: ${colors.secondary};
`;
const Tipography = () => {
  return (
    <Wrapper>
      <H1>H1</H1>
      <H2>H2</H2>
      <H3>H3/Labesl/Placeholder</H3>
      <Price>Precio/Total</Price>
    </Wrapper>
  );
};

export default Tipography;
