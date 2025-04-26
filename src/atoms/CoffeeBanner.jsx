import React from 'react';
import styled from '@emotion/styled';

import H1 from '../atoms/H1';
import IconCoffee from '../image/IconCoffee.svg';
import {mediaMinwidth} from '../styles/utils/helpers';

const Logo = styled.div`
  display: flex;

  align-items: center;
  gap: 1rem;
  ${H1} {
    font-size: 2rem;
    line-height: 1.75rem;
    ${mediaMinwidth.md} {
      line-height: 3.5rem;
      font-size: 2.8rem;
    }
  }
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
