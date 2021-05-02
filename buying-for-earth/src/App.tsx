import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Category from "./pages/Category";
import Mypage from "./pages/Mypage";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Order from "./pages/Order";
import Complete from "./pages/Complete";
import Landing from "./pages/Landing";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/search" render={() => <Search />} />
        <Route path="/category" render={() => <Category />} />
        <Route path="/mypage" render={() => <Mypage />} />
        <Route path="/cart" render={() => <Cart />} />
        <Route path="/product/:id" render={() => <Product />} />
        <Route path="/order" render={() => <Order />} />
        <Route path="/complete" render={() => <Complete />} />
        <Route path="/landing" render={() => <Landing />} />
      </Switch>
    </div>
  );
}

export default App;
