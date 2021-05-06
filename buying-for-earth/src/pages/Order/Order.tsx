import React, { useState } from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ContentHeader from '../../components/ContentHeader';
import Address from '../Address';
import Complete from '../Complete';
import Info from '../Info';
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

interface orderer {
  name: string;
  phone: string;
  email: string;
}

interface recipient {
  name: string;
  phone: string;
  request: string;
}

interface locationProps {
  orderList: item[];
  price?: number;
  totalPrice?: number;
}

function Order({
  location,
  history,
}: RouteComponentProps<{}, any, locationProps>) {
  const { orderList, price, totalPrice } = location.state;
  const [address, setAddress] = useState('');
  const [orderer, setOrderer] = useState<orderer>({
    name: '',
    phone: '',
    email: '',
  });
  const [recipient, setRecipient] = useState<recipient>();
  const handleAddressInput = (address: string) => {
    setAddress(address);
  };
  const handleOrdererInput = (e: any) => {
    let { name } = e.target;
    setOrderer({ ...orderer, [name]: e.target.value });
  };
  const handleRecipientInput = (recipient: recipient) => {
    setRecipient(recipient);
    history.goBack();
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/order"
          exact
          render={() => (
            <div className="order--container">
              <ContentHeader title={'주문서'} />
              <OrderItem items={orderList} />
              <Orderer onOrdererInput={handleOrdererInput} />
              <Destination address={address} recipient={recipient} />
              <Price price={price} totalPrice={totalPrice} />
              <PaymentOption totalPrice={totalPrice} />
            </div>
          )}
        />
        <Route
          path="/order/address"
          render={() => <Address onAddressInput={handleAddressInput} />}
        />
        <Route
          path="/order/info"
          render={() => <Info onInfoInput={handleRecipientInput} />}
        />
        <Route
          path="/order/complete"
          render={() => (
            <Complete totalPrice={totalPrice} name={orderer.name} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default withRouter(Order);
