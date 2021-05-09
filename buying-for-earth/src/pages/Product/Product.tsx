import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import ProductDetail from './components/ProductDetail';
import ProductReview from './components/ProductReview';
import ProductBuy from './components/ProductBuy';
import { RouteComponentProps, withRouter } from 'react-router';
import './Product.scss';

interface MatchParams {
  id: string;
}
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

interface ItemProps {
  thumbnail: string;
  name: string;
  category: string;
  price: number;
  detail: Detail;
  options: Options[];
}

function Product({ match }: RouteComponentProps<MatchParams>) {
  const [item, setItem] = useState<ItemProps>({
    category: '',
    thumbnail: '',
    name: '',
    price: 0,
    detail: { text: [{ '제조사/판매사': '' }], url: [''] },
    options: [
      {
        order_num: 0,
        input_option: {
          name: '',
          type: '',
        },
      },
    ],
  });
  useEffect(() => {
    axios
      .get(
        `http://ec2-52-79-76-54.ap-northeast-2.compute.amazonaws.com:5000/product/${match.params.id}`
      )
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="product">
      <ProductDetail item={item} />
      {/* <ProductDetailNav /> */}
      <Switch>
        <Route path="/product/review" render={() => <ProductReview />} />
      </Switch>
      <ProductBuy item={item} id={match.params.id} />
    </div>
  );
}

export default withRouter(Product);
