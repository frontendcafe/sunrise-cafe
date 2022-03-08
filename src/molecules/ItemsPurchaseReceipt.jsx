import React from 'react';
import styled from '@emotion/styled';
import colors from '../styles/colors';
import { ItemsCategoryPurchaseReceipt } from './ItemsCategoryPurchaseReceipt';

export const Itemspurchasereceipt = () => {  
  const itemPurchase = {
    category: 'Panadería',
    products: [
      {id: 3, name: 'Crossaint', cant: 1, total: 35},
      {id: 4, name: 'Choux ', cant: 2, total: 90},
    ],
  };

  const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  border-bottom: 1px solid ${colors.dark};
  margin-bottom: 1rem;
  padding: 0.4rem 0;
  `;

  const Description = styled.p` 
  font-weight: bold;
  margin: 0.2rem;
  `;

  const Price = styled.p` 
  font-weight: bold;
  margin: 0.2rem;
  text-align: right;
  `;

  const Quantity = styled.p`
  font-weight: bold;
  margin: 0.2rem;
  text-align: right;
  `;

  return (
   <>
     <Wrapper>
        <Description>Descripción</Description>
        <Quantity>Cantidad</Quantity>
        <Price>Precio</Price>
     </Wrapper> 
     <ItemsCategoryPurchaseReceipt
          category={itemPurchase.category}
          products={itemPurchase.products}
     />
  </>
  );
}

