import React from 'react';
import { Switch, Route, withRouter, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Category from './pages/Category';
import Mypage from './pages/Mypage';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Complete from './pages/Complete';
import Landing from './pages/Landing';
import Navigation from './components/Navigation';
import Info from './pages/Info';
import Header from './components/Header';

function App() {
  const location = useLocation();

  if (!localStorage.getItem('items')) {
    localStorage.setItem('items', '[]');
  }

  return (
    <div>
      {location.pathname === '/' ? (
        <Header />
      ) : location.pathname === '/mypage' ? (
        <Header />
      ) : location.pathname === '/search' ? (
        <Header />
      ) : location.pathname === '/category' ? (
        <Header />
      ) : location.pathname === '/cart' ? (
        <Header />
      ) : null}
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/search" render={() => <Search />} />
        <Route path="/category" render={() => <Category />} />
        <Route path="/mypage" render={() => <Mypage />} />
        <Route path="/cart" render={() => <Cart isCart />} />
        <Route path="/direct/:id" render={() => <Cart />} />
        <Route path="/product/:id" render={() => <Product />} />
        <Route path="/complete" render={() => <Complete />} />
        <Route path="/info" component={Info} />
        <Route path="/landing" render={() => <Landing />} />
      </Switch>
      {location.pathname === '/' ? (
        <Navigation />
      ) : location.pathname === '/mypage' ? (
        <Navigation />
      ) : location.pathname === '/search' ? (
        <Navigation />
      ) : location.pathname === '/category' ? (
        <Navigation />
      ) : location.pathname === '/cart' ? (
        <Navigation />
      ) : null}
    </div>
  );
}

export default withRouter(App);
