import React, {useState} from 'react';
import styled from '@emotion/styled';

import IconSearch from '../image/IconSearch.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  flex-wrap: nowrap;
  border: 1px solid #c5c5c5;
  height: 4rem;
  box-shadow: 0px 0px 0.669413px rgba(12, 26, 75, 0.24),
    0px 20.7518px 24.7683px -0.669413px rgba(50, 50, 71, 0.05);
  border-radius: 1rem;
  width: 80%;
`;

const Input = styled.input`
  border: none;
  text-transform: capitalize;
  width: 97%;
  outline: none;
`;

const Icon = styled.img`
  width: 10px;
  cursor: pointer;
`;

Icon.defaultProps = {
  src: IconSearch,
};

export const SearchBar = ({onClick}) => {
  const [searchText, setSearchText] = useState('');

  return (
    <Container>
      <Input placeholder="Buscar" type="text" onChange={(e) => setSearchText(e.target.value)} />
      <Icon onClick={() => onClick(searchText)} />
    </Container>
  );
};
