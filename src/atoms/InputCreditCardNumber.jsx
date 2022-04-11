import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import NumberFormat from 'react-number-format';

import {baseInput} from '../styles/Mixins';

const InputCreditCardNumberStyled = styled(NumberFormat)`
  ${baseInput}
  text-align: center;
`;

function InputCreditCardNumber({name, value, setValue}) {
  return (
    <InputCreditCardNumberStyled
      format="#### #### #### ####"
      name={name}
      value={value}
      onValueChange={({value}) => {
        setValue(value);
      }}
    />
  );
}

InputCreditCardNumber.defaultProps = {
  value: '',
};

InputCreditCardNumber.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  name: PropTypes.string,
};

export default InputCreditCardNumber;
