import React from 'react';
import styled from '@emotion/styled';

import H3 from '../atoms/H3';

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
`;

const NavItem = styled.a`
  color: 'inherit';
  text-decoration: none;
  cursor: pointer;
`;

export const TopMenu = () => {
  return (
    <Nav>
      <NavItem href="https://www.google.com">
        <H3>ACERCA DE</H3>
      </NavItem>
      <NavItem href="https://www.google.com">
        <H3>FRONTENDCAFE</H3>
      </NavItem>
    </Nav>
  );
};
