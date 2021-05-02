import ContentHeader from '../../components/ContentHeader';
import './Cart.scss';
import CartItem from './components/CartItem';
import Empty from './components/Empty';
import Payment from './components/Payment';

function Cart() {
  const cartList: string[] | null = [];
  return (
    <>
      <div className="cart--container">
        {!cartList ? (
          <Empty />
        ) : (
          <>
            <div className="cart__list">
              <CartItem />
              <CartItem />
            </div>
            <Payment />
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
