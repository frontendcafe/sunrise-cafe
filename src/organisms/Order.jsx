import React from 'react';
import styled from '@emotion/styled';

import {OrdenItem} from '../molecules/OrdenItem';
import H2 from '../atoms/H2';
import ButtonSecondary from '../atoms/Button-secondary';
import colors from '../styles/colors';
import OrderTotals from '../atoms/OrderTotal';
import ButtonSize from '../atoms/Button-size';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  width: 40rem;
  border: 1px solid ${colors.gray};
  border-radius: 1rem;
  margin-left: 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 4rem;
`;

const Items = styled.ul`
  padding: 0;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${colors.gray};
  border-bottom: 1px solid ${colors.gray};
  margin: 2rem 0;
`;

const Footer = styled.div`
  margin: 2rem 0;
`;

export const Order = ({orderNumber, orderProducts, clearProducts}) => {
  const handleDeleteItem = () => {};

  const total = orderProducts.map((item) => item.price).reduce((prev, curr) => prev + curr, 0);

  return (
    <Container>
      <Header>
        <H2>Orden N. {orderNumber}</H2>
        <ButtonSecondary buttonClick={() => clearProducts()} disable={false} text={'Vaciar'} />
      </Header>

      <Items>
        {orderProducts.map(({id, nota, price, subtitle, title, amount}) => (
          <OrdenItem
            key={id}
            amount={amount}
            handleDelete={handleDeleteItem}
            nota={nota}
            price={price}
            subtitle={subtitle}
            title={title}
          />
        ))}
      </Items>
      <Footer>
        <Total>
          <OrderTotals>Total</OrderTotals>
          <OrderTotals>${total}</OrderTotals>
        </Total>
        <ButtonSize active={true} color={'primary'} size={'l'} text={'CheckOut'} />
      </Footer>
    </Container>
  );
};
