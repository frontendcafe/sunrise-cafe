import React from "react";
import H1 from "../atoms/H1";
import styled from "@emotion/styled";
import H3 from "../atoms/H3";
import IconCoffe from "../IconCoffe.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

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
  src: IconCoffe,
};

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
`;

export const Header = () => {
  return (
    <Container>
      <Logo>
        <LogoIcon />
        <H1>FrontEnd Sunrise Café</H1>
      </Logo>
      <Nav>
        <H3>ACERCA DE</H3>
        <H3>FRONTENDCAFE</H3>
      </Nav>
    </Container>
  );
};
