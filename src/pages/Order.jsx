import React from 'react';

import {HeadearPurchaseReceipt} from '../molecules/HeadearPurchaseReceipt';
import {Itemspurchasereceipt} from '../molecules/ItemsPurchaseReceipt';
import {ItemsCategoryPurchaseReceipt} from '../molecules/ItemsCategoryPurchaseReceipt';
import {TotalPurchaseReceipt} from '../molecules/TotalPurchaseReceipt';
import {FooterPurchaseReceipt} from '../molecules/FooterPurchaseReceipt';
import ChoosePayment from '../molecules/ChoosePayment';

const headerPurchase = {
  date: '01/04/2023',
  hour: '01:19 A.M.',
  order: 128,
};

const itemPurchase = {
  category: 'Bebidas',
  products: [
    {id: 1, name: 'Café Mocka', cant: 2, total: 110},
    {id: 2, name: 'Café ', cant: 4, total: 220},
  ],
};

const purchase = {
  paymentMethod: 'Tarjeta Terminada ***5678',
  total: 225.0,
};

const Order = () => {
  return (
    <>
      <ChoosePayment />
      <HeadearPurchaseReceipt
        paymentDate={headerPurchase.date}
        paymentHour={headerPurchase.hour}
        paymentNumber={headerPurchase.order}
      />
      <Itemspurchasereceipt category={itemPurchase.category} products={itemPurchase.products} />
      <ItemsCategoryPurchaseReceipt
        category={itemPurchase.category}
        products={itemPurchase.products}
      />
      <TotalPurchaseReceipt paymentMethod={purchase.paymentMethod} total={purchase.total} />
      <FooterPurchaseReceipt />
    </>
  );
};

export default Order;
