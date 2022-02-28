import React, {useState} from 'react';
import styled from '@emotion/styled';

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
import {TotalSalesDay} from './molecules/TotalSalesDay';
import HomeImage from './image/homeImage.svg';
import {ItemsCategoryPurchaseReceipt} from './molecules/ItemsCategoryPurchaseReceipt';

function App() {
  const onClickSearch = (searchText) => {
    console.log(searchText);
  };

  const handleDeleteItem = () => {
    console.log('Delete item');
  };

  const [orders] = useState({name: 'Órdenes', cant: 45});
  const [raised] = useState({name: 'Recaudado', cant: '$2800'});
  const [products] = useState({name: 'Productos', cant: 57});

  const Image = styled.img`
    width: 50rem;
  `;

  const itemPurchase = {
    category: 'Bebidas',
    products: [
      {id: 1, name: 'Café Mocka', cant: 2, total: 110},
      {id: 2, name: 'Café ', cant: 4, total: 220},
    ],
  };

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <ItemsCategoryPurchaseReceipt
          category={itemPurchase.category}
          products={itemPurchase.products}
        />
        <Image src={HomeImage} />
        <TotalSalesDay orders={orders} products={products} raised={raised} />
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
