import React, { useState } from 'react';
import styled from '@emotion/styled';

import colors from '../styles/colors';
import H1 from '../atoms/H1';
import H2 from '../atoms/H2';
import H3 from '../atoms/H3';
import Price from '../atoms/Price';
import Button from '../atoms/Button';
import Link from '../atoms/Link';
import DescriptionProduct from '../atoms/DescriptionProduct';
import DescriptionPrice from '../atoms/DescriptionPrice';
import CardInfo from '../atoms/CardInfo';
import OrderTotal from '../atoms/OrderTotal';
import TextInfo from '../atoms/TextInfo';
import PriceInfo from '../atoms/PrinceInfo';
import InputField from '../atoms/InputField';
import Label from '../atoms/Label';
import InputNumber from '../atoms/InputNumber';
import InputText from '../atoms/InputText';
import InputCurrency from '../atoms/InputCurrency';
import InputCreditCardNumber from '../atoms/InputCreditCardNumber';
import InputCreditCardExpiry from '../atoms/InputCreditCardExpiry';
import InputCreditCardVerificationValue from '../atoms/InputCreditCardVerificationValue';
import DisplayNumberCart from '../atoms/DisplayNumberCart';
import InputRadio from '../atoms/InputRadio';

const Wrapper = styled.section`
  padding: 4em;
  background: ${colors.secondary};
`;
const Tipography = () => {
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(250);
  const [name, setName] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [creditCardExpiry, setCreditCardExpiry] = useState('');
  const [creditCardVerificationValue, setCreditCardVerificationValue] = useState('');

  return (
    <Wrapper>
      <H1>H1</H1>
      <H2>H2</H2>
      <H3>H3/Labels/Placeholder</H3>
      <Price>Precio/Total</Price>
      <Button>Botones</Button>
      <br />
      <Link>Links/Notas</Link>
      <DescriptionProduct>Descripción</DescriptionProduct>
      <DescriptionPrice>Precio Descripción $110</DescriptionPrice>
      <CardInfo>
        <TextInfo>Recaudado</TextInfo>
        <PriceInfo>$2800</PriceInfo>
      </CardInfo>
      <OrderTotal>Total $500</OrderTotal>
      <DisplayNumberCart value="045" />
      <InputRadio value="Chico" />

      {/* Inputs */}
      <InputField>
        <Label>Cantidad</Label>
        <InputNumber decimals={0} name="quantity" setValue={setQuantity} value={quantity} />
      </InputField>

      <InputField>
        <Label>Importe</Label>
        <InputCurrency decimals={2} name="amount" setValue={setAmount} value={amount} />
      </InputField>
      <InputField>
        <Label>Nombre</Label>
        <InputText name="name" setValue={setName} value={name} />
      </InputField>
      <InputField>
        <Label>Numero tarjeta</Label>
        <InputCreditCardNumber
          name="creditCardNumber"
          setValue={setCreditCardNumber}
          value={creditCardNumber}
        />
      </InputField>
      <InputField>
        <Label>Vencimiento tarjeta</Label>
        <InputCreditCardExpiry
          name="creditCardExpiry"
          setValue={setCreditCardExpiry}
          value={creditCardExpiry}
        />
      </InputField>
      <InputField>
        <Label>Tarjeta CVV</Label>
        <InputCreditCardVerificationValue
          name="creditCardVerificationValue"
          setValue={setCreditCardVerificationValue}
          value={creditCardVerificationValue}
        />
      </InputField>
    </Wrapper>
  );
};

export default Tipography;
