import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import {baseInput} from '../styles/Mixins';

const InputTextStyled = styled.input`
  ${baseInput}
  text-align: center;
  text-transform: uppercase;
  width: 18em;
`;

function InputText({name, value, setValue, className}) {
  return (
    <InputTextStyled
      className={className}
      name={name}
      type="text"
      value={value}
      onChange={({target}) => setValue(target.value)}
    />
  );
}

InputText.defaultProps = {
  value: '',
};

InputText.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  name: PropTypes.string,
};

export default InputText;
