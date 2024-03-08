import React, {useState} from 'react';
import styled from '@emotion/styled';

import InputField from '../atoms/InputField';
import Label from '../atoms/Label';
import ButtonPrimary from '../atoms/Button-primary';
import InputEmail from '../atoms/InputEmail';
import InputPassword from '../atoms/InputPassword';
import {ErrorParagraph} from '../atoms/p';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 366px;
`;

const LoginButtonStyled = styled(ButtonPrimary)`
  margin-top: 3rem;
  width: 100%;
  height: 6rem;
`;

export const LoginForm = (className) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(``);
  const [passwordError, setPasswordError] = useState(``);

  function validateEmail(emailToValidate) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailRegex.test(emailToValidate)) {
      setEmailError(`Asegurese de colocar un email correcto`);
    } else {
      setEmailError(``);
    }
  }

  function validatePassword(passwordToValidate) {
    const passwordRegex = /^(?=.*\d).{5,}$/;

    if (!passwordRegex.test(passwordToValidate)) {
      setPasswordError(`Asegurese de que su contraseña tenga al menos 5 caracteres y un numero`);
    } else {
      setPasswordError(``);
    }
  }

  function handleClick(event) {
    validateEmail(email);
    validatePassword(password);
    if (passwordError.length == 0 || emailError.length == 0) {
      event.preventDefault();
    }
  }

  return (
    <Container className={className}>
      <form action="/" method="get">
        <InputField>
          <Label>Email</Label>
          <InputEmail
            name="email"
            placeholder={'Escriba su email'}
            setValue={setEmail}
            value={email}
          />
        </InputField>
        {emailError.length > 0 ? <ErrorParagraph>{emailError}</ErrorParagraph> : <></>}
        <InputField>
          <Label>Password</Label>
          <InputPassword
            name="password"
            placeholder={'escriba su contraseña'}
            setValue={setPassword}
            value={password}
          />
        </InputField>
        {passwordError.length > 0 ? <ErrorParagraph>{passwordError}</ErrorParagraph> : <></>}
        <LoginButtonStyled
          disable={false}
          handleClick={(event) => handleClick(event)}
          text={'Ingresar'}
          typeOfButton={'submit'}
        />
      </form>
    </Container>
  );
};
