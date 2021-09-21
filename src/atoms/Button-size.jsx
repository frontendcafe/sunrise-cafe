import React from "react";
import styled from "@emotion/styled";
import colors from "../styles/colors";

const ButtonXL = styled.button`
    width:30.8rem;
    height: 18.9rem;
    background-color: ${props => props.primary? colors.primary : colors.accent };
    border: none;
    border-radius: 1.3rem;
    color:${colors.light};
    font-size: 3.4rem;
    font-weight: bold;
    text-transform: uppercase;
    &:hover{
        cursor: pointer;
    }
`
const ButtonL = styled(ButtonXL)`
    width:36.6rem;
    height: 7.4rem;
    font-size: 2.0rem;
    font-weight:normal;
    background-color:${colors.primary};
    opacity: ${props => props.opacity? 1 : 0.4};
    &:hover{
        cursor: ${props => props.opacity? 'pointer': 'not-allowed'};
    }
`
const ButtonSize = ({text, size, color, active}) => {
    const buttonClick = ()=>{
        console.log('Do something');
    }
    return (
        (size === 'xl')?
            (color === 'primary')?
                <ButtonXL
                    primary
                >{text}</ButtonXL>
                :
                <ButtonXL
                >{text}</ButtonXL>
        :(active)?
            <ButtonL
                opacity
                onClick={()=>buttonClick()}
            >{text}</ButtonL>
            :
            <ButtonL>{text}</ButtonL>
        )
}
 
export default ButtonSize;