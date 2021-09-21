import React from "react";
import styled from "@emotion/styled";
import colors from "../styles/colors";
import home from '../image/home.svg';
import drink from '../image/product1.svg';
import bread from '../image/product2.svg';
import cake from '../image/product3.svg';
import icecream from '../image/product4.svg';
import merch from '../image/product5.svg';

const Button = styled.button`
    width:3.5rem;
    height: 3.rem;
    //filter:
    //fill: ${props => props.active? colors.primary : colors.accent_brown};
    border:none;
    font-size:2.0rem;
    font-weight: bold;
    &:hover{
        cursor: pointer;
    }
`
const ButtonIcon = ({iconType, active}) => {
    const buttonClick = ()=>{
        console.log('Show products');
    }
    const srcIcon =  (iconType==='home') ? home :  (iconType==='drink')? drink : (iconType==='bread')? bread : (iconType==='cake')? cake : (iconType==='icecream')? icecream : (iconType==='merch')? merch : null;

    return (
            <Button active onClick={()=>buttonClick()}>
                <img src={srcIcon} alt={iconType}/>
            </Button>
    );
}
 
export default ButtonIcon;