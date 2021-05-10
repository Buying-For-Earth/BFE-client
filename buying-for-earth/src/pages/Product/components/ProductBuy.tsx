import React, { useState } from 'react';
import './ProductBuy.scss';
import Modal from 'react-modal';
import { BsChevronDown } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItems } from '../../../modules/cart';
import { RootState } from '../../../modules';
import { addItem } from '../../../modules/direct';

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
  const items = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  function handleOpenModal() {
    setIsOpen(true);
  }
  function handleCloseModal() {
    setIsOpen(false);
  }

  const handleClickCart = () => {
    let isExist = false;

    for (let i = 0; i < items.length; i++) {
      if (id === String(items[i].id)) {
        isExist = true;
        break;
      }
    }
    // 장바구니에 이미 상품이 있으면 추가 x
    if (isExist) {
      alert('이미 들어있는 상품');
    } else {
      // 상품이 없으면 추가
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
      alert('상품이 추가되었습니다.');
    }
  };

  const handleClickBuy = () => {
    dispatch(
      addItem({
        thumbnail: item.thumbnail,
        name: item.name,
        price: item.price,
        id: id,
        options: selectOptionList,
        amount: count,
      })
    );
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

  const customStyles = {
    content: {
      top: '60%',
      left: '0',
      right: '0',
      bottom: '0',
    },
    overlay: {
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'transparent',
    },
  };

  return (
    <div className="product-buy--container">
      <div className="product-buy-btn-set">
        <div className="product-buy__btn" onClick={handleOpenModal}>
          구매하기
        </div>
        <Modal
          style={customStyles}
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          contentLabel="content Label"
          className="product-buy__modal"
          // overlayClassName="product-buy__modal-overlay"
          ariaHideApp={false}
        >
          {item.options.map((ele, index) => {
            if (ele.input_option.type === 'select') {
              let optionValue: JSX.Element[] = ele.input_option.option_list!.map(
                (ele, idx) => (
                  <option value={ele} key={idx}>
                    {ele}
                  </option>
                )
              );
              return (
                <select
                  className="modal__select"
                  onChange={(e) => selectOption(e, index)}
                  key={index}
                >
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
              >
                <div>{`-`}</div>
              </button>
              <div>{count}</div>
              <button
                className="modal__count__increase"
                onClick={() => setCount(count + 1)}
              >
                <div>{`+`}</div>
              </button>
            </div>
            <div className="total--container">
              <div className="total__name">총 금액</div>
              <div className="total__price">{count * item.price * 0.8}원</div>
            </div>
          </div>
          <div className="modal__bottom-btn">
            <button onClick={handleClickCart}>장바구니</button>
            <Link
              to={`/direct/${id}`}
              className="modal__bottom-btn__link"
              onClick={handleClickBuy}
            >
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
