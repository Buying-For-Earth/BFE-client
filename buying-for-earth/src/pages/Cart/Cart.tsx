import React, { useEffect } from 'react';
import { Route, RouteComponentProps, withRouter } from 'react-router';
import ContentHeader from '../../components/ContentHeader';
import './Cart.scss';
import { increase, decrease, remove, toggle } from './../../modules/cart';
import { directIncrease, directDecrease } from './../../modules/direct';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './components/CartItem';
import Empty from './components/Empty';
import Payment from './components/Payment';
import Order from '../Order';
import { RootState } from '../../modules';
import {
  getDiscountPrice,
  getPaymentPrice,
  getProductPrice,
} from '../../modules/price';

interface MatchParams {
  id: string;
}

interface Props {
  isCart?: Boolean;
}

// 장바구니로 들어온 경우 isCart=true 바로구매로 들어오면 isCart=false
function Cart({ isCart, match }: RouteComponentProps<MatchParams> & Props) {
  const items = useSelector((state: RootState) => state.cart);
  const directItem = useSelector((state: RootState) => state.direct);
  const price = useSelector((state: RootState) => state.price);
  const dispatch = useDispatch();
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

  const onDirectIncrease = () => {
    dispatch(directIncrease());
  };

  const onDirectDecrease = () => {
    dispatch(directDecrease());
  };

  useEffect(() => {
    if (isCart) {
      dispatch(getProductPrice(items));
      dispatch(getDiscountPrice(items));
    } else {
      dispatch(getProductPrice([directItem]));
      dispatch(getDiscountPrice([directItem]));
    }
  }, [isCart, items, directItem, dispatch]);

  useEffect(() => {
    dispatch(getPaymentPrice(price.productPrice - price.discountPrice));
  }, [price.discountPrice, price.productPrice, dispatch]);

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
                <CartItem
                  item={directItem}
                  onIncrease={onDirectIncrease}
                  onDecrease={onDirectDecrease}
                  onRemove={onRemove}
                  onToggle={onToggle}
                />
              </div>
            </div>
            <Payment price={price} />
          </>
        )}
      />
      <Route
        path="/cart"
        exact
        render={() => (
          <>
            <div className="cart--container">
              {!items.length ? (
                <Empty />
              ) : (
                <>
                  <div className="cart__list">
                    {items.map((item) => {
                      return (
                        <CartItem
                          key={item.id}
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
                  <Payment price={price} />
                </>
              )}
            </div>
          </>
        )}
      />
      <Route
        path={`${match.url}/order`}
        render={() =>
          isCart ? (
            <Order orderList={items} price={price} />
          ) : (
            <Order orderList={[directItem]} price={price} />
          )
        }
      />
    </>
  );
}

export default withRouter(Cart);
