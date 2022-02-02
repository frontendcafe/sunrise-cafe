import React from 'react';
import styled from '@emotion/styled';

import H3 from '../atoms/H3';
import {CoffeeBanner} from '../atoms/CoffeeBanner';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
`;

export const Header = () => {
  return (
    <Container>
      <CoffeeBanner />
      <Nav>
        <H3>ACERCA DE</H3>
        <H3>FRONTENDCAFE</H3>
      </Nav>
    </Container>
  );
};
