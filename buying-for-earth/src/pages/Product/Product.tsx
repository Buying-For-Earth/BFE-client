import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ProductDetailNav from './components/ProductDetailNav';
import ProductDetail from './components/ProductDetail';
import './Product.scss';

function Product() {
  return (
  <div className="product-detail">
      <ProductDetailNav />
      <Switch>
        <Route path='/product/product-detail' render={() => <ProductDetail />} />
        <Route path='/product/review' render={() => <ProductDetail />} />
      </Switch>
  </div>
  );
}

export default Product;
