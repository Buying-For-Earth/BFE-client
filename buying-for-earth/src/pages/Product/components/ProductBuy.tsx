import React, { useState } from 'react';
import './ProductBuy.scss';
import Modal from 'react-modal';
import { BsChevronDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Cart from '../../Cart';

interface Props {
  item: { id: number; itemName: string; image: string; price: number };
}

function ProductBuy({ item }: Props) {
  const [modalIsOpen, setIsOpen] = useState(false);

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

    // 장바구니가 비어 있는 경우
    if (!cartList.length) {
      cartList.push(item);
      localStorage.setItem('items', JSON.stringify(cartList));
      alert('상품이 추가되었습니다');
    } else {
      // 장바구니에 이미 상품이 들어가 있는지 확인
      for (let i = 0; i < cartList.length; i++) {
        if (item.id === cartList[i].id) {
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
          <select name="option1"></select>
          <div className="modal__bottom-btn">
            <button onClick={handleClickCart}>장바구니</button>
            <Link to={`/direct/${item.id}`}>
              <button>구매하기</button>
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
