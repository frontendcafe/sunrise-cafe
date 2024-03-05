import React from 'react';
import styled from '@emotion/styled';

import {CoffeeBanner} from '../atoms/CoffeeBanner';

import {TopMenu} from './TopMenu';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 2rem;
`;

export const Header = () => {
  return (
    <Container>
      <CoffeeBanner />
      <TopMenu />
    </Container>
  );
};
