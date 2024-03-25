import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import {baseInput} from '../styles/Mixins';

const InputEmailStyled = styled.input`
  ${baseInput}
  text-transform: lowercase;
  text-align: left;
  font-weight: 500;
  padding-left: 1rem;
`;

function InputEmail({name, value, setValue, placeholder}) {
  return (
    <InputEmailStyled
      name={name}
      placeholder={placeholder}
      type="email"
      value={value}
      onChange={({target}) => setValue(target.value)}
    />
  );
}

InputEmail.defaultProps = {
  value: '',
};

InputEmail.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  name: PropTypes.string,
};

export default InputEmail;
