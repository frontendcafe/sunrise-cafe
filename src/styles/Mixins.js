import {css} from '@emotion/react';

import colors from './colors';
import fonts from './fonts';

export const baseInput = () => css`
  height: 4rem;
  padding: 0.5rem 0.2rem;
  background: ${colors.light};
  border: 1px solid ${colors.gray};
  border-radius: 0.7rem;
  font-family: ${fonts.primary};
  font-weight: 600;
  font-size: 2rem;
  letter-spacing: -0.2px;
  text-align: center;
  :focus {
    outline: none;
  }
  color: #000000;
  width: 100%;
`;
