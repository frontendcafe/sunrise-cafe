import React, { useState } from "react";
import styled from "@emotion/styled";

import InputField from "../atoms/InputField";
import Label from "../atoms/Label";
import ButtonPrimary from "../atoms/Button-primary";
import InputEmail from "../atoms/InputEmail";
import InputPassword from "../atoms/InputPassword";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateEmail(emailToValidate) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(emailToValidate)) {
      console.log("El email debe contener un @ y .com");
    }
  }

  function validatePassword(passwordToValidate) {
    const passwordRegex = /[0-9]/;
    if (
      passwordToValidate.length < 5 &&
      (typeof passwordToValidate == `string` ||
        !passwordRegex.test(passwordToValidate))
    ) {
      console.log("La contraseña debe tener al menos 5 caracteres y un numero");
    }
  }

  function handleClick() {
    event.preventDefault();
    validateEmail(email);
    validatePassword(password);
  }

  return (
    <Container className={className}>
      <form>
        <InputField>
          <Label>Email</Label>
          <InputEmail name="email" setValue={setEmail} value={email} />
        </InputField>
        <InputField>
          <Label>Password</Label>
          <InputPassword
            name="password"
            setValue={setPassword}
            value={password}
          />
        </InputField>

        <LoginButtonStyled
          disable={false}
          text={"Ingresar"}
          typeOfButton={`submit`}
          handleClick={handleClick}
        />
      </form>
    </Container>
  );
};
