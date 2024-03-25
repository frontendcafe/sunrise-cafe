import React from 'react';
import styled from '@emotion/styled';

import H3 from '../atoms/H3';

const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  grid-area: nav;
`;

const NavItem = styled.a`
  color: 'inherit';
  text-decoration: none;
  cursor: pointer;
`;

export const TopMenu = () => {
  return (
    <Nav>
      <NavItem href="/about">
        <H3>ACERCA DE</H3>
      </NavItem>
      <NavItem href="https://frontend.cafe/">
        <H3>FRONTENDCAFE</H3>
      </NavItem>
    </Nav>
  );
};
