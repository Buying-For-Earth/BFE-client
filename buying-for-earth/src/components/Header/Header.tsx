import React from 'react';
import './Header.scss';

type HeaderProps = {
  title?: string;
};

function Header({ title }: HeaderProps) {
  return (
    <div className={title === 'home' ? 'header main' : 'header'}>
      {title === 'home' ? (
        <div className="main">바잉포어스</div>
      ) : (
        <div className="else">{title}</div>
      )}
    </div>
  );
}

Header.defaultProps = {
  title: 'home',
};

export default Header;
