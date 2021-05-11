import React from 'react';
import { Switch, Route, withRouter, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Category from './pages/Category';
import Mypage from './pages/Mypage';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Landing from './pages/Landing';
import Navigation from './components/Navigation';
import Info from './pages/Info';
import Header from './components/Header';
import Complete from './pages/Complete';

function App() {
  const location = useLocation();

  if (!localStorage.getItem('items')) {
    localStorage.setItem('items', '[]');
  }

  return (
    <div className="wrap">
      <div className="wrap-webDiv">
        <div className="wrap-webDiv__text">
          <div> 모바일에서</div>{' '}
          <div>
            <span className="wrap-webDiv__appName">바잉포어스</span> 를
          </div>
          <div> 만나보세요!</div>
        </div>
        <div className="wrap-webDiv__qrCode"></div>
      </div>
      <div className="wrap-content scroll">
        {location.pathname === '/' ? (
          <Header />
        ) : location.pathname === '/cart' ? (
          <Header title="장바구니" />
        ) : null}
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/search" render={() => <Search />} />
          <Route path="/category" render={() => <Category />} />
          <Route path="/mypage" render={() => <Mypage />} />
          <Route path="/cart" render={() => <Cart isCart />} />
          <Route path="/direct/:id" render={() => <Cart />} />
          <Route path="/product/:id?" render={() => <Product />} />
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
    </div>
  );
}

export default withRouter(App);
