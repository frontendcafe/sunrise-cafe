import styled from '@emotion/styled';

import colors from '../styles/colors';

const CardInfo = styled.button`
  background: ${colors.light};
  border: none;
  border-radius: 1rem;
  font-weight: 600;
  height: 8rem;
  line-height: 1rem;
  width: 20rem;
  box-shadow: 1px 2px 2px ${colors.gray};
  /* border: 1px solid ${colors.gray}; */
`;

export default CardInfo;
