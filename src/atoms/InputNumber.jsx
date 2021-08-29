import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import NumberFormat from 'react-number-format';

import {baseInput} from '../styles/Mixins';

const InputNumberStyled = styled(NumberFormat)`
  ${baseInput}
`;

function InputNumber({name, value, setValue, decimals}) {
  const handleFocus = (event) => event.target.select();

  return (
    <InputNumberStyled
      allowNegative={false}
      decimalScale={decimals}
      fixedDecimalScale={true}
      isNumericString={true}
      name={name}
      thousandSeparator={true}
      value={value}
      onFocus={handleFocus}
      onValueChange={({floatValue}) => {
        setValue(floatValue);
      }}
    />
  );
}

InputNumber.defaultProps = {
  value: 0,
  decimals: 2,
};

InputNumber.propTypes = {
  value: PropTypes.number,
  setValue: PropTypes.func,
  name: PropTypes.string,
  decimals: PropTypes.number,
};

export default InputNumber;
