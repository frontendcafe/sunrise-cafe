import React from 'react';
import styled from '@emotion/styled';

const RadioContainer = styled.div`
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

const RadioSpan = styled.div`
  cursor: pointer;
  border: 1.5px solid #5e3e00;
  border-radius: 50%;
  height: 3rem;
  width: 2.8rem;
  position: absolute;
  left: 0;
  top: -0.4rem;

  /* padding-left: 4.5rem; */

  &::after {
    content: '';
    position: absolute;
  }

  ${RadioContainer}:hover & {
    border: double #5e3e00;
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

// const RadioSpan = styled.span`
//   display: inline-block;
//   *:after {
//     content: '';
//     display: block;
//     height: 1.3rem;
//     width: 1.3rem;
//     border-radius: 50%;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     background-color: #55c57a;
//     opacity: 0;
//     transition: opacity 0.2s;
//   }
// `;

//Componenente atomo para los input radio
function InputRadio({value}) {
  return (
    <RadioContainer>
      {value}
      <RadioInput id="huey" name="drone" type="radio" />
      <RadioSpan />
    </RadioContainer>
  );
}

export default InputRadio;
