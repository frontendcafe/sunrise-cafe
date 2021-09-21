import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import NumberFormat from 'react-number-format';

import {baseInput} from '../styles/Mixins';
const InputCreditCardVerificationValueStyled = styled(NumberFormat)`
  ${baseInput}
`;

function InputCreditCardVerificationValue({name, value, setValue}) {
  const handleFocus = (event) => event.target.select();

  return (
    <InputCreditCardVerificationValueStyled
      allowNegative={false}
      className={baseInput}
      decimalSeparator=""
      displayType="input"
      format="###"
      mask=""
      name={name}
      prefix=""
      thousandSeparator={false}
      thousandsGroupStyle="thousand"
      type="password"
      value={value}
      onChange={({target}) => {
        setValue(target.value);
      }}
      onFocus={handleFocus}
    />
  );
}

InputCreditCardVerificationValue.defaultProps = {
  value: '',
};

InputCreditCardVerificationValue.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  name: PropTypes.string,
};

export default InputCreditCardVerificationValue;
