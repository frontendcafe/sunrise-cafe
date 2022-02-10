import React, {useState} from 'react';
import styled from '@emotion/styled';

import InputField from '../atoms/InputField';
import Label from '../atoms/Label';
import InputText from '../atoms/InputText';
import InputCreditCardNumber from '../atoms/InputCreditCardNumber';
import InputCreditCardExpiry from '../atoms/InputCreditCardExpiry';
import InputCreditCardVerificationValue from '../atoms/InputCreditCardVerificationValue';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const ExpirationCVV = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12rem;
`;

export const CardPayment = () => {
  // Podemos usar Contex para no pasar tantas props
  const [name, setName] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [creditCardExpiry, setCreditCardExpiry] = useState('');
  const [creditCardVerificationValue, setCreditCardVerificationValue] = useState('');

  return (
    <Container>
      <InputField>
        <Label>Nombre</Label>
        <InputText name="name" setValue={setName} value={name} />
      </InputField>
      <InputField>
        <Label>Número De Tarjeta</Label>
        <InputCreditCardNumber
          name="creditCardNumber"
          setValue={setCreditCardNumber}
          value={creditCardNumber}
        />
      </InputField>

      <ExpirationCVV>
        <InputField>
          <Label>Expira</Label>
          <InputCreditCardExpiry
            name="creditCardExpiry"
            setValue={setCreditCardExpiry}
            value={creditCardExpiry}
          />
        </InputField>
        <InputField>
          <Label>CVV</Label>
          <InputCreditCardVerificationValue
            name="creditCardVerificationValue"
            setValue={setCreditCardVerificationValue}
            value={creditCardVerificationValue}
          />
        </InputField>
      </ExpirationCVV>
    </Container>
  );
};
