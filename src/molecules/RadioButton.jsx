import React from 'react';
//import styled from 'styled-components';
import styled from '@emotion/styled';

const RadioContainer = styled.label`
  position: relative;
  display: inline-block;
  margin: 1.1rem 3rem;
`;

const RadioInput = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const RadioLabel = styled.div`
  border: 2px solid #5e3e00;
  border-radius: 50%;
  width: 3rem;
  height: 2.8rem;
  position: absolute;
  top: -0.85rem;
  left: -3.5em;

  ${RadioContainer}:hover & {
    /* background: #a07300; */
    border: double #5e3e00;
  }

  &::after {
    content: '';
    position: absolute;
  }

  ${RadioInput}:checked + &::after {
    border-radius: 1em;
    background-color: #263238;
    width: 0.5em;
    height: 0.5em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

function RadioButton() {
  return (
    <RadioContainer>
      Picning
      <RadioInput id="2" name="2" type="radio" />
      <RadioLabel />
    </RadioContainer>
  );
}

export default RadioButton;
