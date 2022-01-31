import React from 'react';
import styled from '@emotion/styled';

import github from '../image/github.svg';
import linkedin from '../image/linkedin.svg';

const Button = styled.button`
  background: no-repeat url(${(props) => (props.linkType ? github : linkedin)});
  border: none;
`;

const Anchor = styled.a`
  display: block;
  width: 2.4rem;
  height: 2.4rem;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonProfile = ({profileUrl, socialMedia}) => {
  return socialMedia === 'github' ? (
    <Button linkType>
      <Anchor href={profileUrl} rel="noopener noreferrer" target="_blank" />
    </Button>
  ) : (
    <Button>
      <Anchor href={profileUrl} rel="noopener noreferrer" target="_blank" />
    </Button>
  );
};

export default ButtonProfile;
