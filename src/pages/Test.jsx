import React, {useState} from 'react';
import styled from '@emotion/styled';

import LupisImage from '../image/Lupis.png';
import Tipography from '../molecules/Tipography';
import Buttons from '../molecules/Buttons';
import {Header} from '../molecules/Header';
import {SearchBar} from '../molecules/SearchBar';
import {OrdenItem} from '../molecules/OrdenItem';
import {CommandButtons} from '../molecules/CommandButtons';
import {CashPayment} from '../molecules/CashPayment';
import {HumanCard} from '../molecules/HumanCard';
import VercelInfo from '../atoms/VercelInfo';
import {CardPayment} from '../molecules/CardPayment';
import {TotalSalesDay} from '../molecules/TotalSalesDay';
import TextAboutUs from '../molecules/TextAboutUs';
import HomeImage from '../image/homeImage.svg';
import {ItemsCategoryPurchaseReceipt} from '../molecules/ItemsCategoryPurchaseReceipt';
import {ProductCard} from '../molecules/ProductCard';
import {NotificationModal} from '../molecules/NotificationModal';
import DescriptionPrice from '../atoms/DescriptionPrice';

function Test() {
  // const onClickSearch = (searchText) => {
  // console.log(searchText);
  // };

  const handleDeleteItem = () => {
    // console.log('Delete item');
  };

  const [orders] = useState({name: 'Órdenes', cant: 45});
  const [raised] = useState({name: 'Recaudado', cant: '$2800'});
  const [products] = useState({name: 'Productos', cant: 57});

  const Image = styled.img`
    width: 50rem;
  `;

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
      <ProductCard image={productData.image} price={productData.price} title={productData.title} />

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
      <VercelInfo />
    </>
  );
}

export default Test;
