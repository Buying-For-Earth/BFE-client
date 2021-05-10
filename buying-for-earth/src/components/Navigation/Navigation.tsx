import React, { useEffect, useState } from 'react';
import { withRouter, useHistory, useLocation } from 'react-router-dom';
import './Navigation.scss';
import '@rmwc/tabs/styles';
import { Tab, TabBar } from '@rmwc/tabs';
import { BiSearch, BiHomeAlt, BiShoppingBag } from 'react-icons/bi';
import { BsList } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';

function Navigation() {
  const [tabIndex, setTabIndex] = useState(Number);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    let pathName = location.pathname;
    if (pathName === '/') {
      setTabIndex(0);
    } else if (pathName === '/search') {
      setTabIndex(1);
    } else if (pathName === '/category') {
      setTabIndex(2);
    } else if (pathName === '/mypage') {
      setTabIndex(3);
    } else if (pathName === '/cart') {
      setTabIndex(4);
    }
  }, [location.pathname]);

  return (
    <div className="navigation--container">
      <TabBar activeTabIndex={tabIndex} foundationRef={null}>
        <Tab onClick={() => history.push('/')}>
          <BiHomeAlt size="24" />
        </Tab>
        <Tab onClick={() => history.push('/search')}>
          <BiSearch size="24" />
        </Tab>
        <Tab onClick={() => history.push('/category')}>
          <BsList size="24" />
        </Tab>
        <Tab onClick={() => history.push('/mypage')}>
          <CgProfile size="24" />
        </Tab>
        <Tab onClick={() => history.push('/cart')}>
          <BiShoppingBag size="24" />
        </Tab>
      </TabBar>
    </div>
  );
}

export default withRouter(Navigation);
