import React, { useState } from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router';
import ContentHeader from '../../components/ContentHeader';
import { Item } from '../../modules/cart';
import Address from '../Address';
import Complete from '../Complete';
import Info from '../Info';
import Destination from './components/Destination';
import Orderer from './components/Orderer';
import OrderItem from './components/OrderItem';
import PaymentOption from './components/PaymentOption';
import Price from './components/Price';
import './Order.scss';

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

interface Props {
  orderList: Item[];
  price?: number;
  totalPrice?: number;
}

function Order({
  history,
  match,
  orderList,
  price,
  totalPrice,
}: RouteComponentProps & Props) {
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
    <Switch>
      <Route
        path={`${match.url}`}
        exact
        render={() => (
          <div className="order--container">
            <ContentHeader title={'주문서'} />
            <OrderItem items={orderList} />
            <Orderer onOrdererInput={handleOrdererInput} orderer={orderer} />
            <Destination address={address} recipient={recipient} />
            <Price price={price} totalPrice={totalPrice} />
            <PaymentOption totalPrice={totalPrice} />
          </div>
        )}
      />
      <Route
        path={`${match.url}/address`}
        render={() => <Address onAddressInput={handleAddressInput} />}
      />
      <Route
        path={`${match.url}/info`}
        render={() => <Info onInfoInput={handleRecipientInput} />}
      />
      <Route
        path={`${match.url}/complete`}
        render={() => <Complete totalPrice={totalPrice} name={orderer.name} />}
      />
    </Switch>
  );
}

export default withRouter(Order);
