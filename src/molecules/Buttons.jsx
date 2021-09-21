import React from 'react';
import { Fragment } from "react";
import ButtonProfile from "../atoms/ButtonProfile";
import ButtonPrimary from "../atoms/Button-primary";
import ButtonSecondary from '../atoms/Button-secondary';
import ButtonSize from '../atoms/Button-size';
import ButtonAddToOrder from '../atoms/Button-addToOrder';
import ButtonArrowBack from '../atoms/Button-back';
import ButtonCancel from '../atoms/Button-cancel';
import ButtonIcon from '../atoms/Button-icon';

const Buttons = () => {
    return (
       <Fragment>
           <ButtonProfile
              socialMedia={'github'} 
              profileUrl={"https://github.com/rhonaldm"}
           />
           <ButtonProfile
              socialMedia={'linkedin'} 
              profileUrl={"https://www.linkedin.com/in/rhonald-maradey-24590640/"}
           />
           <ButtonPrimary
               text={'Boton'}
               disable={false}
           />
           <ButtonSecondary
               text={'Boton'}
               disable={false}
           />
           <ButtonSize
               text={'Ordenar'}
               size={'xl'}
               color={'primary'}
           />
           <ButtonSize
               text={'Ventas'}
               size={'xl'}
               color={'accent'}
           />
           <ButtonSize
               text={'CheckOut'}
               size={'l'}
               color={'primary'}
               active={true}
           />
           <ButtonAddToOrder
               price={'$55'} 
           />
           <ButtonArrowBack
               price={'$55'} 
           />
           <ButtonCancel/>
           <ButtonIcon
                iconType={'home'}
                active={true}
           />
           <ButtonIcon
                iconType={'drink'}
                active={true}
           />
           <ButtonIcon
                iconType={'bread'}
                active={true}
           />
           <ButtonIcon
                iconType={'cake'}
                active={true}
           />
           <ButtonIcon
                iconType={'icecream'}
                active={true}
           />
           <ButtonIcon
                iconType={'merch'}
                active={true}
           />
       </Fragment>
      );
}
 
export default Buttons;