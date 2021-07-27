import React from 'react';
import styled from '@emotion/styled';

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const TestSC = () => {
  return (
    <Wrapper>
      <Title>Hello World with styled-components!</Title>
    </Wrapper>
  );
};

export default TestSC;
