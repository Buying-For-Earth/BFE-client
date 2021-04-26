import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductDetailNav from "./components/ProductDetailNav";
import ProductDetail from "./components/ProductDetail";
import ProductReview from "./components/ProductReview";
import ProductBuy from "./components/ProductBuy";
import "./Product.scss";

function Product() {
  return (
    <div className="product">
      <ProductDetailNav />
      <Switch>
        <Route path="/product" exact render={() => <ProductDetail />} />
        <Route path="/product/review" render={() => <ProductReview />} />
      </Switch>
      <ProductBuy />
    </div>
  );
}

export default Product;
