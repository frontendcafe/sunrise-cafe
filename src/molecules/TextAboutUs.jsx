import React from 'react';
import styled from '@emotion/styled';

import colors from '../styles/colors';
import H1 from '../atoms/H1';

const Parragraph = styled.p`
  font-size: 2.4rem;
  color: ${colors.dark};
  width: 38rem;
`;

function TextAboutUs() {
  return (
    <>
      <H1>El Equipo</H1>
      <Parragraph>
        Este punto de venta para una cafetería es una aplicación muy simple y moderna donde se puede
        conocer las ganancias diarias y hacer un pedido de manera rápida y eficiente.
      </Parragraph>
      <Parragraph>
        Se creo como parte de la iniciativa CMYK de la comunidad de Front End Café. Fue hecho con
        Figma, HTML, CSS, JS, React
      </Parragraph>
    </>
  );
}

export default TextAboutUs;
