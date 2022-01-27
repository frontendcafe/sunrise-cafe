import React from 'react';
import styled from '@emotion/styled';

import IconGitHub from '../image/IconGitHub.svg';
import IconLinkedIn from '../image/IconLinkedIn.svg';
import colors from '../styles/colors';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 15rem;
`;

const ImageContainer = styled.div`
  padding: 2rem;
  border: 1px solid ${colors.gray};
  border-radius: 10.8px;
`;

const Image = styled.img`
  width: 10rem;
`;

const SocialNetworks = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Name = styled.span`
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 18px;
  color: ${colors.primary};
`;

const Rol = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 18px;
  text-transform: capitalize;
  color: ${colors.accent};
`;

const GitHub = styled.img`
  width: 2rem;
  cursor: pointer;
`;

GitHub.defaultProps = {
  src: IconGitHub,
};

const LinkedIn = styled.img`
  width: 2rem;
  cursor: pointer;
`;

LinkedIn.defaultProps = {
  src: IconLinkedIn,
};

export const HumanCard = ({photo, name, rol, gitHubAddress, linkedInAddress}) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={photo} />
      </ImageContainer>
      <Name>{name} </Name>
      <Rol>{rol}</Rol>
      <SocialNetworks>
        <GitHub onClick={() => window.open(gitHubAddress, '_blank')} />
        <LinkedIn onClick={() => window.open(linkedInAddress, '_blank')} />
      </SocialNetworks>
    </Container>
  );
};
