import React from 'react';
import styled from '@emotion/styled';

// const InputRadioStyle = styled.InputCheckBox``;
const RadioContainer = styled.div``;

//Componenente atomo para los input radio
function InputRadio({value}) {
  return (
    <div>
      <input id="huey" name="drone" type="radio" />
      <label htmlFor="$valuep">{value}</label>
    </div>
  );
}

export default InputRadio;
