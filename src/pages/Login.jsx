import React from 'react';
import styled from '@emotion/styled';

import VercelInfo from '../atoms/VercelInfo';
import {Header} from '../molecules/Header';
import {LoginForm} from '../molecules/LoginForm';
import HomeImage from '../image/homeImage.svg';
import BackgroundCoffee from '../image/backgroundCoffee.svg';

const Image = styled.img`
  width: 49rem;
`;

const LayoutLogin = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-image: url(${BackgroundCoffee});
  background-repeat: no-repeat;
  background-position: 110% 40%;
  background-size: 50% 100%;
`;

const WrapperHeader = styled.div`
  grid-area: 1 / 1 / 2 / 5;
`;
const WrapperLoginForm = styled.div`
  grid-area: 2 / 1 / 5 / 3;
  display: grid;
  place-items: center;
`;
const WrapperImage = styled.div`
  grid-area: 2 / 3 / 5 / 5;
  display: grid;
  place-items: center;
`;
const WrapperFooter = styled.div`
  grid-area: 5 / 1 / 6 / 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Login() {
  return (
    <LayoutLogin>
      <WrapperHeader>
        <Header />
      </WrapperHeader>
      <WrapperLoginForm>
        <LoginForm />
      </WrapperLoginForm>
      <WrapperImage>
        <Image src={HomeImage} />
      </WrapperImage>
      <WrapperFooter>
        <VercelInfo />
      </WrapperFooter>
    </LayoutLogin>
  );
}
