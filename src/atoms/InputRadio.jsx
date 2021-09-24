import React from 'react';
import styled from '@emotion/styled';

// const InputRadioStyle = styled.InputCheckBox``;
const RadioContainer = styled.div`
  position: relative;
`;

const RadioInput = styled.input`
  display: none;
`;

const RadioLabel = styled.label`
  cursor: pointer;
  padding-left: 4.5rem;
`;

const RadioSpan = styled.span`
  height: 3rem;
  width: 2.8rem;
  border: 1.5px solid #5e3e00;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 0;
  top: -0.4rem;
  *:after {
    content: '';
    display: block;
    height: 1.3rem;
    width: 1.3rem;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #55c57a;
    opacity: 0;
    transition: opacity 0.2s;
  }
`;

//Componenente atomo para los input radio
function InputRadio({value}) {
  return (
    <RadioContainer>
      <RadioInput id="huey" name="drone" type="radio" />
      <RadioLabel>
        <RadioSpan />
        {value}
      </RadioLabel>
    </RadioContainer>
  );
}

export default InputRadio;
