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

  function isEmailValid(emailEvaluate) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return emailRegex.test(emailEvaluate);
  }

  function validateEmail(emailToValidate) {
    if (!isEmailValid(emailToValidate)) {
      setEmailError(`Asegurese de colocar un email correcto`);
    } else {
      setEmailError(``);
    }
  }

  function isPasswordValid(passwordToEvaluate) {
    const passwordRegex = /^(?=.*\d).{5,}$/;

    return passwordRegex.test(passwordToEvaluate);
  }

  function validatePassword(passwordToValidate) {
    if (!isPasswordValid(passwordToValidate)) {
      setPasswordError(`Asegurese de que su contraseña tenga al menos 5 caracteres y un numero`);
    } else {
      setPasswordError(``);
    }
  }

  function handleSubmit(event) {
    validateEmail(email);
    validatePassword(password);
    if (!isPasswordValid(password) || !isEmailValid(email)) {
      event.preventDefault();
    }
  }

  return (
    <Container className={className} onSubmit={(event) => handleSubmit(event)}>
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
        <LoginButtonStyled disable={false} text={'Ingresar'} typeOfButton={'submit'} />
      </form>
    </Container>
  );
};
