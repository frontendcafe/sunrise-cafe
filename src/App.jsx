import React, { useState } from 'react';
import styled from '@emotion/styled';

import LupisImage from './image/Lupis.png';
import Tipography from './molecules/Tipography';
import Buttons from './molecules/Buttons';
import AppRouter from './routers/AppRouter';
import GlobalStyle from './styles/GlobalStyle';
import { Header } from './molecules/Header';
import { SearchBar } from './molecules/SearchBar';
import { OrdenItem } from './molecules/OrdenItem';
import { CommandButtons } from './molecules/CommandButtons';
import { CashPayment } from './molecules/CashPayment';
import { HumanCard } from './molecules/HumanCard';
import VercelInfo from './atoms/VercelInfo';
import { CardPayment } from './molecules/CardPayment';
import { TotalSalesDay } from './molecules/TotalSalesDay';
import TextAboutUs from './molecules/TextAboutUs';
import HomeImage from './image/homeImage.svg';
import { ItemsCategoryPurchaseReceipt } from './molecules/ItemsCategoryPurchaseReceipt';
import HeadearPurchaseReceipt from './molecules/HeadearPurchaseReceipt';
import { ProductCard } from './molecules/ProductCard';
import {TotalPurchaseReceipt} from './molecules/TotalPurchaseReceipt';
import {FooterPurchaseReceipt} from './molecules/FooterPurchaseReceipt';
import {Itemspurchasereceipt} from './molecules/ItemsPurchaseReceipt';
import {NotificationModal} from './molecules/NotificationModal';
import DescriptionPrice from './atoms/DescriptionPrice';
import IconCheck from './image/IconCheck.svg';

function App() {
  const onClickSearch = (searchText) => {
    console.log(searchText);
  };

  const handleDeleteItem = () => {
    console.log('Delete item');
  };

  const [orders] = useState({ name: 'Órdenes', cant: 45 });
  const [raised] = useState({ name: 'Recaudado', cant: '$2800' });
  const [products] = useState({ name: 'Productos', cant: 57 });
  const headerPurchase = {
    date: '01/01/2020',
    hour: '10:19 P.M.',
    order: 0,
  };

  const Image = styled.img`
    width: 50rem;
  `;

  const purchase = {
    paymentMethod: 'Tarjeta Terminada ***5678',
    total: 225.0,
  };

  const itemPurchase = {
    category: 'Bebidas',
    products: [
      { id: 1, name: 'Café Mocka', cant: 2, total: 110 },
      { id: 2, name: 'Café ', cant: 4, total: 220 },
    ],
  };


  const productData = {
    image:
      'https://firebasestorage.googleapis.com/v0/b/cmyksunrise.appspot.com/o/cup-of-coffee-1504205_640.webp?alt=media&token=f09dfdea-db81-4e8d-b805-f6a869d5bd96',
    price: '55.00',
    title: 'Café Mocka',
};
  const [showModal, setShowModal] = useState(false);

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <ProductCard
          image={productData.image}
          price={productData.price}
          title={productData.title}
        />

        <HeadearPurchaseReceipt
          paymentDate={headerPurchase.date}
          paymentHour={headerPurchase.hour}
          paymentNumber={headerPurchase.order}
        />
        <Header />

        <section>
          <NotificationModal handleClose={() => hideModal()} show={showModal}>
            <DescriptionPrice>TARJETA APROBADA</DescriptionPrice>
          </NotificationModal>
          <button type="button" onClick={() => setShowModal(true)}>
            Ver modal
          </button>
        </section>

        <TextAboutUs />
        <Itemspurchasereceipt />
        <ItemsCategoryPurchaseReceipt
          category={itemPurchase.category}
          products={itemPurchase.products}
        />
        <TotalPurchaseReceipt paymentMethod={purchase.paymentMethod} total={purchase.total} />
        <FooterPurchaseReceipt />
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
        <VercelInfo />
      </div>
    </>
  );
}

export default App;
