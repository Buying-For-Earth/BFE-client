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

interface info {
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
  console.log(location);
  const { orderList, price, totalPrice } = location.state;
  const [address, setAddress] = useState('');
  const [info, setInfo] = useState<info>();
  const handleAddressInput = (address: string) => {
    setAddress(address);
  };
  const handleInfoInput = (info: info) => {
    setInfo(info);
    history.goBack();
  };
  // console.log(price);
  console.log(info);

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
                  <Destination
                    onAddressInput={handleAddressInput}
                    address={address}
                    info={info}
                  />
                  <Price price={price} totalPrice={totalPrice} />
                  <PaymentOption totalPrice={totalPrice} />
                </>
              )}
            />
            <Route
              path="/order/address"
              render={() => <Address onAddressInput={handleAddressInput} />}
            />
            <Route
              path="/order/info"
              render={() => <Info onInfoInput={handleInfoInput} />}
            />
            <Route
              path="/order/complete"
              render={() => <Complete totalPrice={totalPrice} />}
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default withRouter(Order);
