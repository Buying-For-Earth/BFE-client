import React, { useState } from "react";
import "./ProductBuy.scss";
import Modal from "react-modal";
import { BsChevronDown } from "react-icons/bs";

function ProductBuy() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }
  function handleCloseModal() {
    setIsOpen(false);
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
          <select name="네임" id="e"></select>
          <button className="close" onClick={handleCloseModal}>
            <BsChevronDown size="20" />
          </button>
        </Modal>
      </div>
    </div>
  );
}

export default ProductBuy;
