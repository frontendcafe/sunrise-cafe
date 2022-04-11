import React from 'react';
import {Global, css} from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        ${emotionNormalize}

        /* box-sizing and rem setters */
        html {
          box-sizing: border-box;
          font-size: 62.5%;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        body {
          font-family: Poppins, sans-serif;
        }
      `}
    />
  );
};

export default GlobalStyle;
