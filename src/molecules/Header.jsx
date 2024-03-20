import React from 'react';
import styled from '@emotion/styled';

import {CoffeeBanner} from '../atoms/CoffeeBanner';

import {TopMenu} from './TopMenu';

const Container = styled.div`
  display: grid;
  grid-template-columns: 5% 35% 30% 30%;
  grid-template-areas: 'blank banner separator nav';
`;

export const Header = () => {
  return (
    <Container>
      <CoffeeBanner />
      <TopMenu />
    </Container>
  );
};
