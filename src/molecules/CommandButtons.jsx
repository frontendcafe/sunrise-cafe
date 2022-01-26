import React from 'react';
import styled from '@emotion/styled';
import colors from '../styles/colors';

 export const CommandButtons = () => {
    return (
        <Container>
        <ButtonOrder>Ordenar</ButtonOrder>   
        <ButtonSale>Ventas</ButtonSale>     
        </Container>
    )
}
 
const ButtonOrder = styled.button` 
  background-color: ${colors.primary};
  border: none;
  border-radius: 1.3rem;
  color: ${colors.light};
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  height: 6.7rem;
  margin: 1rem 1rem;
  text-transform: uppercase;
  width: 19.2rem;
`;

const ButtonSale = styled.button` 
  background-color: ${colors.accent}; 
  border: none;
  border-radius: 1.3rem;
  color: ${colors.light};
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: bold;
  height: 6.7rem;
  margin: 1rem 1rem;
  text-transform: uppercase;
  width: 19.2rem;
`;

const Container = styled.div`
align-items: center;
display: flex;
flex-wrap: wrap;
justify-content: center;
height: 18.9rem; 
width: 40.8rem;
 `;



