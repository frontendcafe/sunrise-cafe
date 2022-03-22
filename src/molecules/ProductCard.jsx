import React from 'react';
import styled from '@emotion/styled';

import colors from '../styles/colors';
import Price from '../atoms/Price';
import H3 from '../atoms/H3';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 22rem;
  margin: 5rem;
  gap: 1.8rem;
`;

const ImageContainer = styled.div`
  border: 1px solid ${colors.gray};
  border-radius: 10.8px;
`;

const Image = styled.img`
  max-height: 20rem;
  width: 100%;
  max-width: 22rem;
`;

export const ProductCard = ({ image, title, price }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <H3>{title} </H3>
      <Price>${price}</Price>
    </Container>
  );
};
