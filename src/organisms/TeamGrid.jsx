import styled from '@emotion/styled';
import React from 'react';

import LupisImage from '../image/Lupis.png';
import SebasImage from '../image/sebastian.png';
import FreudImage from '../image/freud.png';
import AndresImage from '../image/andres.png';
import VictorImage from '../image/victor.png';
import RhonaldImage from '../image/romr.png';
import JoeImage from '../image/jose.png';
import {HumanCard} from '../molecules/HumanCard';

const Container = styled.div`
  display: flex;
  width: 55rem;
  flex-wrap: wrap;
  align-content: space-between;
`;

const teamMembers = [
  {
    gitHubAddress: 'https://github.com/luar1',
    linkedInAddress: 'http://www.google.com',
    name: 'Lupis Ar',
    photo: LupisImage,
    rol: 'UI Designer',
  },
  {
    gitHubAddress: 'https://github.com/AlexandroMunera',
    linkedInAddress: 'https://www.linkedin.com/in/freud-alexandro/',
    name: 'Freud',
    photo: FreudImage,
    rol: 'FE Developer',
  },
  {
    gitHubAddress: 'https://github.com/AndresRDC',
    linkedInAddress: 'https://www.linkedin.com/in/dicrocheandres/',
    name: 'Andrés',
    photo: AndresImage,
    rol: 'FE Developer',
  },
  {
    gitHubAddress: 'https://github.com/sarganar',
    linkedInAddress: 'https://www.linkedin.com/in/sebastian-arga%C3%B1araz/',
    name: 'Sebastián',
    photo: SebasImage,
    rol: 'FE Developer',
  },
  {
    gitHubAddress: 'https://github.com/oliveravictor',
    linkedInAddress: 'https://www.linkedin.com/in/victor-olivera/',
    name: 'Víctor',
    photo: VictorImage,
    rol: 'FE Developer',
  },
  {
    gitHubAddress: 'https://github.com/rhonaldm',
    linkedInAddress: 'https://www.linkedin.com/in/rhonald-maradey-24590640/',
    name: 'Rhonald',
    photo: RhonaldImage,
    rol: 'FE Developer',
  },
  {
    gitHubAddress: 'https://github.com/JoeOsG',
    linkedInAddress: 'https://www.linkedin.com/in/joeos/',
    name: 'José',
    photo: JoeImage,
    rol: 'FE Developer',
  },
];

export default function TeamGrid() {
  teamMembers.sort(() => {
    return 0.5 - Math.random();
  });

  return (
    <Container>
      {teamMembers.map((member, index) => (
        <HumanCard
          key={index}
          gitHubAddress={member.gitHubAddress}
          linkedInAddress={member.linkedInAddress}
          name={member.name}
          photo={member.photo}
          rol={member.rol}
        />
      ))}
    </Container>
  );
}
