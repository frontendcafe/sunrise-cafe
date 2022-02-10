import React, {useState} from 'react';

import LupisImage from './image/Lupis.png';
import Tipography from './molecules/Tipography';
import Buttons from './molecules/Buttons';
import AppRouter from './routers/AppRouter';
import GlobalStyle from './styles/GlobalStyle';
import {Header} from './molecules/Header';
import {SearchBar} from './molecules/SearchBar';
import {OrdenItem} from './molecules/OrdenItem';
import {CommandButtons} from './molecules/CommandButtons';
import {CashPayment} from './molecules/CashPayment';
import {HumanCard} from './molecules/HumanCard';
import {CardPayment} from './molecules/CardPayment';

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

        <CardPayment />
        <SearchBar onClick={onClickSearch} />
        <OrdenItem
          handleDelete={handleDeleteItem}
          nota="NOTA: SIN AZÚCAR"
          price="$10.00"
          subtitle="LECHE DE COCO"
          title="Café Mocka"
        />
        <HumanCard
          gitHubAddress="http://www.google.com"
          linkedInAddress="http://www.google.com"
          name="Lupis Ar"
          photo={LupisImage}
          rol="UI Designer"
        />
        <Tipography />
        <Buttons />
        <CommandButtons />
        <CashPayment />
        <AppRouter />
      </div>
    </>
  );
}

export default App;
