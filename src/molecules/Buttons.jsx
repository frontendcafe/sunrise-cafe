import React from 'react';
import {Fragment} from 'react';

import ButtonProfile from '../atoms/ButtonProfile';
import ButtonPrimary from '../atoms/Button-primary';
import ButtonSecondary from '../atoms/Button-secondary';
import ButtonSize from '../atoms/Button-size';
import ButtonAddToOrder from '../atoms/Button-addToOrder';
import ButtonArrowBack from '../atoms/Button-back';
import ButtonCancel from '../atoms/Button-cancel';
import ButtonHome from '../atoms/Button-home';
import ButtonBread from '../atoms/Button-bread';
import ButtonCake from '../atoms/Button-cake';
import ButtonDrink from '../atoms/Button-drink';
import ButtonIcecream from '../atoms/Button-icecream';
import ButtonMerch from '../atoms/Button-merch';

const Buttons = () => {
  return (
    <Fragment>
      <ButtonProfile profileUrl={'https://github.com/rhonaldm'} socialMedia={'github'} />
      <ButtonProfile
        profileUrl={'https://www.linkedin.com/in/rhonald-maradey-24590640/'}
        socialMedia={'linkedin'}
      />
      <ButtonPrimary disable={false} text={'Boton'} />
      <ButtonSecondary disable={false} text={'Boton'} />
      <ButtonSize color={'primary'} size={'xl'} text={'Ordenar'} />
      <ButtonSize color={'accent'} size={'xl'} text={'Ventas'} />
      <ButtonAddToOrder price={'$55'} />
      <ButtonArrowBack price={'$55'} />
      <ButtonCancel />
      <ButtonHome active={true} />
      <ButtonBread active={true} />
      <ButtonCake active={true} />
      <ButtonDrink active={true} />
      <ButtonIcecream active={true} />
      <ButtonMerch active={true} />
    </Fragment>
  );
};

export default Buttons;
