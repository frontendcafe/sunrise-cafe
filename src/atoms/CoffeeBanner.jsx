import React from 'react';
import styled from '@emotion/styled';

import H1 from '../atoms/H1';
import IconCoffee from '../image/IconCoffee.svg';

const Logo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

const LogoIcon = styled.img`
  width: 75px;
`;

LogoIcon.defaultProps = {
  src: IconCoffee,
};

export const CoffeeBanner = () => {
  return (
    <Logo>
      <LogoIcon />
      <H1>FrontEnd Sunrise Café</H1>
    </Logo>
  );
};
