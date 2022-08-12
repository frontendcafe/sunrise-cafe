import React from 'react';
import styled from '@emotion/styled';

export const ItemsCategoryPurchaseReceipt = ({category, products}) => {
  const Category = styled.h4`
    font-size: 2rem;
    font-weight: bold;
    margin: 0.2rem;
  `;

  const ItemPurchaseReceipt = styled.div`
    font-size: 2rem;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
  `;

  const Text = styled.p`
    margin: 0.2rem;
    text-align: right;
  `;

  const Name = styled.p`
    margin: 0.2rem;
  `;

  const Spread = styled.div`
    padding: 1.7rem 0;
  `;

  return (
    <Spread>
      <Category>{category}</Category>
      {products.map((p) => (
        <ItemPurchaseReceipt key={p.id}>
          <Name>{p.name}</Name>
          <Text>{p.cant}</Text>
          <Text>$ {parseFloat(p.total, 10).toFixed(2)}</Text>
        </ItemPurchaseReceipt>
      ))}
    </Spread>
  );
};
