import React from 'react';
import Destination from './components/Destination';
import Method from './components/Method';
import Orderer from './components/Orderer';
import OrderItem from './components/OrderItem';
import Price from './components/Price';

function Order() {
  return (
    <div>
      <div className="order-header">{'<'}주문서</div>
      <div>주문상품</div>
      <OrderItem />
      <Orderer />
      <Destination />
      <Price />
      <Method />
    </div>
  );
}

export default Order;
