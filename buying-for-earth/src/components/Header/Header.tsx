import React from 'react';
import './Header.scss';

type HeaderProps = {
  title?: string;
};

function Header({ title }: HeaderProps) {
  return <div className="main-header">{title === 'home' && <div className="title">바잉포어스</div>}</div>;
}

Header.defaultProps = {
  title: 'home',
};

export default Header;
