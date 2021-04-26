import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Category from "./pages/Category";
import Mypage from "./pages/Mypage";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/search" render={() => <Search />} />
        <Route path="/category" render={() => <Category />} />
        <Route path="/mypage" render={() => <Mypage />} />
        <Route path="/cart" render={() => <Cart />} />
        <Route path="/product" render={() => <Product />} />
      </Switch>
    </div>
  );
}

export default App;
