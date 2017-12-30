import React from "react";
import {withRouter} from "react-router-dom";
import logo from "./logo.png";

const Header = (props) => (    
  <header className="header">
    <a className="link" href="/">
      <div className="logo">
      <img src={logo} className="logo__img" alt="Omni tester" />
      <p className="logo__name">Omni tester</p>
    </div>
    </a>
    <div className="header__items">
      <form onSubmit={
        (e) => {
          e.preventDefault(); 
          props.history.push("/Tests");
          }
        }
      >
        <input className="header__input" 
          onChange={(event) => {props.handleSearch(event.target.value)}}
          type="text" placeholder="search test" 
        />
        <input className="header__input header__reset" type="reset" 
          onClick={props.handleReset} value="X"
        />      
      </form>
      {/*<a className="header__login link" href="Login">Войти</a>*/}
      <input className="header__login link" 
        onClick={() => props.history.push("/Tests")} 
        type="submit"
      />
    </div>
  </header>
);

export default withRouter(Header); 
