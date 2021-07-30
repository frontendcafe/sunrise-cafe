import React from 'react';
import {Global, css} from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
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
        }
      `}
    />
  );
};

export default GlobalStyle;
