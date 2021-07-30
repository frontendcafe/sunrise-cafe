import React from 'react';
import {Global, css} from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${emotionNormalize}
      `}
    />
  );
};

export default GlobalStyle;
