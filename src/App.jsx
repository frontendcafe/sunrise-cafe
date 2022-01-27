import React, {useState} from 'react';

import Tipography from './molecules/Tipography';
import Buttons from './molecules/Buttons';
import AppRouter from './routers/AppRouter';
import GlobalStyle from './styles/GlobalStyle';
import {Header} from './molecules/Header';
import {SearchBar} from './molecules/SearchBar';
import {OrdenItem} from './molecules/OrdenItem';
import {CommandButtons} from './molecules/CommandButtons';

function App() {
  const onClickSearch = (searchText) => {
    console.log(searchText);
  };

  const handleDeleteItem = () => {
    console.log('Delete item');
  };

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <SearchBar onClick={onClickSearch} />
        <OrdenItem
          handleDelete={handleDeleteItem}
          nota="NOTA: SIN AZÚCAR"
          price="$10.00"
          subtitle="LECHE DE COCO"
          title="Café Mocka"
        />
        <Tipography />
        <Buttons />
        <CommandButtons />
        <AppRouter />
      </div>
    </>
  );
}

export default App;
