import React, {useState} from 'react';
import styled from '@emotion/styled';
import colors from '../styles/colors';
import Label from '../atoms/Label';
import InputField from '../atoms/InputField';
import InputNumber from '../atoms/InputNumber';


const Wrapper = styled.section`
  padding: 4em;
  background: ${colors.light};
`;

export const CashPayment = () => {
    const [cash, setCash] = useState(250);
    const [change, setChange] = useState(25);

    return (
    <Wrapper>
      <InputField>
        <Label>Efectivo</Label>
        <InputNumber name="cash" setValue={setCash} value={cash} />    
      </InputField>

      <InputField>
        <Label>Cambio</Label>
        <InputNumber name="change" setValue={setChange} value={change} />           
      </InputField>
    </Wrapper>
    )
}