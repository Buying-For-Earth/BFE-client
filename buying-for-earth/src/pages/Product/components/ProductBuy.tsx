import React, { useState } from 'react';
import './ProductBuy.scss';
import Modal from 'react-modal';
import { BsChevronDown } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItems } from '../../../modules/cart';

interface DetailText {
  '제조사/판매사'?: string;
  '친환경 인증 제품'?: string;
  재료?: string;
  배출방법?: string;
}

interface Detail {
  text: [DetailText];
  url: string[];
}

interface Options {
  order_num: number;
  input_option: {
    name: string;
    type: string;
    option_list?: string[];
  };
}

interface ProductBuyProps {
  item: {
    name: string;
    category: string;
    thumbnail: string;
    price: number;
    detail: Detail;
    options: Options[];
  };
  id: string;
}

function ProductBuy({ item, id }: ProductBuyProps) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [selectOptionList, setSelectOptionList] = useState({});

  const dispatch = useDispatch();

  function handleOpenModal() {
    setIsOpen(true);
  }
  function handleCloseModal() {
    setIsOpen(false);
  }

  const handleClickCart = () => {
    const items = localStorage.getItem('items');
    const cartList = JSON.parse(String(items));
    let isExist = false;
    dispatch(
      addItems({
        thumbnail: item.thumbnail,
        name: item.name,
        price: item.price,
        id: id,
        options: selectOptionList,
        amount: count,
        checked: true,
      })
    );
    // 장바구니가 비어 있는 경우
    if (!cartList.length) {
      cartList.push(item);

      localStorage.setItem('items', JSON.stringify(cartList));
      alert('상품이 추가되었습니다');
    } else {
      // 장바구니에 이미 상품이 들어가 있는지 확인
      for (let i = 0; i < cartList.length; i++) {
        if (id === cartList[i].id) {
          isExist = true;
          break;
        }
      }
      // 장바구니에 이미 상품이 있으면 추가 x
      if (isExist) {
        alert('이미 들어있는 상품');
      } else {
        // 상품이 없으면 추가
        cartList.push(item);
        localStorage.setItem('items', JSON.stringify(cartList));
        alert('상품이 추가되었습니다.');
      }
    }
  };

  function selectOption(
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) {
    setSelectOptionList({
      ...selectOptionList,
      [index]: e.currentTarget.value,
    });
  }

  return (
    <div className="product-buy--container">
      <div className="product-buy-btn-set">
        <div className="product-buy__btn" onClick={handleOpenModal}>
          구매하기
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          contentLabel="content Label"
          className="product-buy__modal"
          overlayClassName="product-buy__modal-overlay"
        >
          {item.options.map((ele, index) => {
            if (ele.input_option.type === 'select') {
              let optionValue: JSX.Element[] = ele.input_option.option_list!.map(
                (ele) => (
                  <option value={ele} key="index">
                    {ele}
                  </option>
                )
              );
              return (
                <select onChange={(e) => selectOption(e, index)} key={index}>
                  {optionValue}
                </select>
              );
            }
          })}

          <div className="modal__total">
            <div className="modal__count">
              <button
                className="modal__count__decrease"
                onClick={() => {
                  if (count === 1) {
                    return;
                  }
                  return setCount(count - 1);
                }}
              ></button>
              <div>{count}</div>
              <button
                className="modal__count__increase"
                onClick={() => setCount(count + 1)}
              ></button>
            </div>
            <div className="total__name">총 금액</div>
            <div className="total__price">{count * item.price * 0.8}</div>
          </div>
          <div className="modal__bottom-btn">
            <button onClick={handleClickCart}>장바구니</button>
            <Link to={`/direct/`} className="modal__bottom-btn__link">
              구매하기
            </Link>
          </div>
          <button className="close" onClick={handleCloseModal}>
            <BsChevronDown size="20" />
          </button>
        </Modal>
      </div>
    </div>
  );
}

export default ProductBuy;
