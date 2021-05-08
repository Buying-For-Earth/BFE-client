import React, { useEffect, useState } from 'react';
import { Route, RouteComponentProps, withRouter } from 'react-router';
import ContentHeader from '../../components/ContentHeader';
import './Cart.scss';
import CartItem from './components/CartItem';
import Empty from './components/Empty';
import Payment from './components/Payment';
import { fakeData } from '../../fakeData';
import Order from '../Order';

interface item {
  id: number;
  itemName: string;
  image: string;
  price: number;
  amount: number;
  checked: boolean;
}

interface MatchParams {
  id: string;
}

interface Props {
  isCart?: Boolean;
}

// 장바구니로 들어온 경우 isCart=true 바로구매로 들어오면 isCart=false
function Cart({ isCart, match }: RouteComponentProps<MatchParams> & Props) {
  const [items, setItems] = useState<item[]>([]);
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleIncrease = (id: number) => {
    // 상품 수량 +
    console.log('increase');
    const update: item[] = items.map((item: item) =>
      item.id === id ? { ...item, amount: item.amount + 1 } : item
    );
    setItems(update);
  };

  const handleDecrease = (id: number) => {
    // 상품 수량 -
    console.log('decrease');
    const update = items.map((item: item) =>
      item.id === id
        ? item.amount > 1
          ? { ...item, amount: item.amount - 1 }
          : item
        : item
    );
    setItems(update);
  };

  const handleToggle = (id: number) => {
    // 장바구니에서 결제할 상품 선택
    console.log('toggle');
    const update = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(update);
  };

  const handleRemove = (id: number) => {
    // 장바구니 상품 삭제
    console.log('remove');
    const update = items.filter((item) => {
      return item.id !== id;
    });
    setItems(update);
    localStorage.removeItem('items');
    localStorage.setItem('items', JSON.stringify(update));
  };

  useEffect(() => {
    let items;
    if (isCart) {
      items = JSON.parse(String(localStorage.getItem('items')));
      items = items.map((item: item) => ({
        ...item,
        amount: 1,
        checked: true,
      }));
    } else {
      for (let item of fakeData) {
        if (item.id === Number(match.params.id)) {
          items = [{ ...item, amount: 1, checked: true }];
        }
      }
    }
    setItems(items);
  }, []);

  useEffect(() => {
    let price = 0;
    if (items) {
      items.forEach((item) => {
        if (item.checked) price += item.price * item.amount;
      });
    }
    if (price > 30000) {
      setTotalPrice(price);
    } else if (price <= 0) {
      setTotalPrice(0);
    } else {
      setTotalPrice(price + 3000);
    }
    setPrice(price);
  }, [items]);

  return (
    <>
      <Route
        path="/direct/:id"
        exact
        render={() => (
          <>
            <ContentHeader title={'바로구매'} />
            <div className="cart--container">
              <div className="cart__list">
                {items.map((item) => {
                  return (
                    <CartItem
                      item={item}
                      onIncrease={handleIncrease}
                      onDecrease={handleDecrease}
                      onRemove={handleRemove}
                      onToggle={handleToggle}
                    />
                  );
                })}
              </div>
            </div>
            <Payment price={price} totalPrice={totalPrice} />
          </>
        )}
      />
      <Route
        path="/cart"
        exact
        render={() => (
          <>
            <ContentHeader title={'장바구니'} />

            <div className="cart--container">
              {!items.length ? (
                <Empty />
              ) : (
                <>
                  <div className="cart__list">
                    {items.map((item) => {
                      return (
                        <CartItem
                          item={item}
                          isCart
                          onIncrease={handleIncrease}
                          onDecrease={handleDecrease}
                          onToggle={handleToggle}
                          onRemove={handleRemove}
                        />
                      );
                    })}
                  </div>
                  <Payment price={price} totalPrice={totalPrice} />
                </>
              )}
            </div>
          </>
        )}
      />
      <Route
        path={`${match.url}/order`}
        render={() => (
          <Order orderList={items} price={price} totalPrice={totalPrice} />
        )}
      />
    </>
  );
}

export default withRouter(Cart);
