import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import ContentHeader from '../../components/ContentHeader';
import Destination from './components/Destination';
import Orderer from './components/Orderer';
import OrderItem from './components/OrderItem';
import PaymentOption from './components/PaymentOption';
import Price from './components/Price';
import './Order.scss';

interface item {
  id: number;
  itemName: string;
  image: string;
  price: number;
  amount: number;
  checked: boolean;
}

interface Props {
  orderList: item[];
}

function Order({ location }: RouteComponentProps<{}, any, Props>) {
  const { orderList } = location.state;
  return (
    <div>
      <ContentHeader title={'주문서'} />
      <div className="order--container">
        <OrderItem items={orderList} />
        <Orderer />
        <Destination />
        <Price />
        <PaymentOption />
      </div>
    </div>
  );
}

export default withRouter(Order);
