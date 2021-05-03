import React, { useState } from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ContentHeader from '../../components/ContentHeader';
import Address from '../Address';
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
  const [address, setAddress] = useState('');
  const handleAddressInput = (address: string) => {
    setAddress(address);
  };
  console.log(address);
  return (
    <BrowserRouter>
      <div>
        <div className="order--container">
          <Switch>
            <Route
              path="/order"
              exact
              render={() => (
                <>
                  <ContentHeader title={'주문서'} />
                  <OrderItem items={orderList} />
                  <Orderer />
                  <Destination />
                  <Price />
                  <PaymentOption />
                </>
              )}
            />
            <Route
              path="/order/address"
              render={() => <Address onAddressInput={handleAddressInput} />}
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default withRouter(Order);
