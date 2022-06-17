import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import NumberFormat from 'react-number-format';

import {baseInput} from '../styles/Mixins';

function limit(val, max) {
  if (val.length === 1 && val[0] > max[0]) {
    val = '0' + val;
  }

  if (val.length === 2) {
    if (Number(val) === 0) {
      val = '01';
    } else if (val > max) {
      val = max;
    }
  }

  return val;
}

function cardExpiry(val) {
  let month = limit(val.substring(0, 2), '12');
  let year = val.substring(2, 4);

  return month + (year.length ? '/' + year : '');
}

const InputCreditCardExpiryStyled = styled(NumberFormat)`
  ${baseInput}
  text-align: center;
`;

function InputCreditCardExpiry({name, value, setValue}) {
  return (
    <InputCreditCardExpiryStyled
      format={cardExpiry}
      name={name}
      value={value}
      onValueChange={({formattedValue}) => {
        setValue(formattedValue);
      }}
    />
  );
}

InputCreditCardExpiry.defaultProps = {
  value: '',
};

InputCreditCardExpiry.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  name: PropTypes.string,
};

export default InputCreditCardExpiry;
