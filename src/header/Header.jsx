import React from 'react';
import logo from "./logo.png";

const Header = () => (
  <header className="header">
    <div className="logo">
      <img src={logo} className="logo__img" alt="Omni tester" />
      <p className="logo__name">Omni tester</p>
    </div>
    <div className="header__items">
      <input className="header__input" value="" placeholder="find your test" />
      <a className="header__login" href="Login">Login</a>
    </div>
  </header>
);
    
export default Header;
