import React from 'react';
import Destination from './components/Destination';
import Orderer from './components/Orderer';
import OrderItem from './components/OrderItem';
import PaymentOption from './components/PaymentOption';
import Price from './components/Price';
import './Order.scss';

function Order() {
  return (
    <div>
      <div className="order-header">{'<'}주문서</div>
      <div className="order--container">
        <OrderItem />
        <Orderer />
        <Destination />
        <Price />
        <PaymentOption />
      </div>
    </div>
  );
}

export default Order;
