import React from 'react';
import './ProductDetail.scss';

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
    option_list?: string;
  };
}

interface ProductDetailProps {
  item: {
    thumbnail: string;
    name: string;
    category: string;
    price: number;
    detail: Detail;
    options: Options[];
  };
}

function ProductDetail({ item }: ProductDetailProps) {
  return (
    <div className="product-detail--container">
      <img className="product-thumbnail__image" src={item.thumbnail} alt="" />
      <div className="product-detail__name">{item.name}</div>
      <div className="product-detail__allPrice">
        <span className="allPrice__sale">20%</span>
        <span className="product-detail__discount-price">
          {item.price * 0.8}원
        </span>
        <div className="product-detail__price">{item.price}원</div>
      </div>
      <div className="product-detail__detailText">
        <div className="detailText__key">
          {item.detail.text.map((ele) => {
            return (
              <div className="detailText__column">
                <span>{Object.keys(ele)}</span>
              </div>
            );
          })}
        </div>
        <div>
          {item.detail.text.map((ele) => {
            return (
              <div className="detailText__column">
                <span>{Object.values(ele)}</span>
              </div>
            );
          })}
        </div>
      </div>
      {item.detail.url.map((ele) => {
        return <img className="product-detail__image" src={ele} alt="" />;
      })}
    </div>
  );
}

export default ProductDetail;
