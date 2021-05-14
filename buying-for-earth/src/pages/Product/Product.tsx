import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import ProductDetail from './components/ProductDetail';
import ProductReview from './components/ProductReview';
import ProductBuy from './components/ProductBuy';
import { RouteComponentProps, withRouter } from 'react-router';
import './Product.scss';
import ContentHeader from '../../components/ContentHeader';

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

type SelectOption = {
  name: string;
  option: string;
};

function Product({ match }: RouteComponentProps<MatchParams>) {
  const [selectOptionList, setSelectOptionList] = useState<SelectOption[] | []>(
    []
  );
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
        let setIniOption = [];
        for (const i of response.data.options) {
          if (i.input_option.type === 'select') {
            setIniOption.push({
              name: i.input_option.name,
              option: i.input_option.option_list![0],
            });
          }
          setSelectOptionList(setIniOption);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [match.params.id]);

  return (
    <div id="product" className="product">
      <ContentHeader title={item.name} />
      <ProductDetail item={item} />
      <Switch>
        <Route path="/product/review" render={() => <ProductReview />} />
      </Switch>
      <ProductBuy
        item={item}
        id={match.params.id}
        selectOptionList={selectOptionList}
        setSelectOptionList={setSelectOptionList}
      />
    </div>
  );
}

export default withRouter(Product);
