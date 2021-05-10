import React, { useEffect, useState } from 'react';
import { Route, RouteComponentProps, withRouter } from 'react-router';
import ContentHeader from '../../components/ContentHeader';
import './Cart.scss';
import { increase, decrease, remove, toggle } from './../../modules/cart';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './components/CartItem';
import Empty from './components/Empty';
import Payment from './components/Payment';
import Order from '../Order';
import { RootState } from '../../modules';

interface MatchParams {
  id: string;
}

interface Props {
  isCart?: Boolean;
}

// 장바구니로 들어온 경우 isCart=true 바로구매로 들어오면 isCart=false
function Cart({ isCart, match }: RouteComponentProps<MatchParams> & Props) {
  const items = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const onIncrease = (id: number) => {
    // 상품 수량 +
    dispatch(increase(id));
  };

  const onDecrease = (id: number) => {
    // 상품 수량 -
    dispatch(decrease(id));
  };

  const onToggle = (id: number) => {
    // 장바구니에서 결제할 상품 선택
    dispatch(toggle(id));
  };

  const onRemove = (id: number) => {
    // 장바구니 상품 삭제
    dispatch(remove(id));
  };

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
                      onIncrease={onIncrease}
                      onDecrease={onDecrease}
                      onRemove={onRemove}
                      onToggle={onToggle}
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
                          onIncrease={onIncrease}
                          onDecrease={onDecrease}
                          onToggle={onToggle}
                          onRemove={onRemove}
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
