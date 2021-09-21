import React from "react";
import styled from "@emotion/styled";
import colors from "../styles/colors";
import arrow from '../image/bx_bx-arrow-back.svg';


const Button = styled.button`
    width:9.7rem;
    height: 5.9rem;
    background-color: ${colors.primary};
    border: none;
    border-radius: 1.3rem;
    color:${colors.light};
    &:hover{
        cursor: pointer;
    }
`
const ButtonArrowBack = () => {
    const buttonClick = ()=>{
        console.log('Navegate to');
    }
    return (
        <Button onClick={()=>buttonClick()}>
            <img src={arrow} alt="arrow back" />
        </Button>
    );
}
 
export default ButtonArrowBack;