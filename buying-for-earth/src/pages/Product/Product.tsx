import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductDetailNav from './components/ProductDetailNav';
import ProductDetail from './components/ProductDetail';
import ProductReview from './components/ProductReview';
import ProductBuy from './components/ProductBuy';
import { RouteComponentProps, withRouter } from 'react-router';
import './Product.scss';
import { fakeData } from '../../fakeData';

interface MatchParams {
  id: string;
}

function Product({ match }: RouteComponentProps<MatchParams>) {
  const [item, setItem] = useState({
    id: 0,
    image: '',
    itemName: '',
    price: 0,
  });
  useEffect(() => {
    for (let item of fakeData) {
      if (item.id === Number(match.params.id)) {
        setItem({
          id: item.id,
          image: item.image,
          itemName: item.itemName,
          price: item.price,
        });
        break;
      }
    }
  }, []);

  return (
    <div className="product">
      <ProductDetail item={item} />
      <ProductDetailNav />
      <Switch>
        {/* <Route path="/product" exact render={() => <ProductDetail />} /> */}
        <Route path="/product/review" render={() => <ProductReview />} />
      </Switch>
      <ProductBuy item={item} />
    </div>
  );
}

export default withRouter(Product);
