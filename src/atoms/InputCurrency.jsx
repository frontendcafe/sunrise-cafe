import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import NumberFormat from 'react-number-format';

import {baseInput} from '../styles/Mixins';

const InputCurrencyStyled = styled(NumberFormat)`
  ${baseInput}
  text-align: center;
`;

function InputCurrency({name, value, setValue, decimals}) {
  const handleFocus = (event) => event.target.select();

  return (
    <InputCurrencyStyled
      allowNegative={false}
      decimalScale={decimals}
      fixedDecimalScale={true}
      isNumericString={true}
      name={name}
      prefix={'$'}
      thousandSeparator={true}
      value={value}
      onFocus={handleFocus}
      onValueChange={({floatValue}) => {
        setValue(floatValue);
      }}
    />
  );
}

InputCurrency.defaultProps = {
  value: 0,
  decimals: 2,
};

InputCurrency.propTypes = {
  value: PropTypes.number,
  setValue: PropTypes.func,
  name: PropTypes.string,
  decimals: PropTypes.number,
};

export default InputCurrency;
