import React from 'react';

import Tipography from './molecules/Tipography';
import Buttons from './molecules/Buttons';
import AppRouter from './routers/AppRouter';
import GlobalStyle from './styles/GlobalStyle';
import {Header} from './molecules/Header';
import {SearchBar} from './molecules/SearchBar';

function App() {
  const onClickSearch = (searchText) => {
    console.log(searchText);
  };

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <SearchBar onClick={onClickSearch} />
        <Tipography />
        <Buttons />
        <AppRouter />
      </div>
    </>
  );
}

export default App;
