import React from "react";
import { NavLink } from "react-router-dom";

const Menu = (props) => {
  return (
    <nav className="menucontainer">
      <ul className="navbar">
        <li><NavLink className="navbar__item" activeClassName="navbar__item-active" to="/">Главная</NavLink></li>
        <div className="dropdown">
          <li><NavLink className="navbar__item dropbtn" activeClassName="navbar__item-active" to="/Tests">Каталог тестов</NavLink>
            <div className="dropdown-content">
              <NavLink to="/Tests/byalphabet">by alphabet</NavLink>
              <NavLink to="/Tests/bytheme">by theme</NavLink>
            </div>
          </li>
        </div>
        <li><NavLink className="navbar__item" activeClassName="navbar__item-active" to="/Gallery">Graduates Gallery</NavLink></li>
        <li><NavLink className="navbar__item" activeClassName="navbar__item-active" to="/Contacts">Contacts</NavLink></li>          
        {
          !!props.authUserId && 
          <li>
            <NavLink className="navbar__item" 
              activeClassName="navbar__item-active"
              to="/UserHomePage">
                Cabinet
            </NavLink>
          </li>
        }
        {
          !!props.authUserId && 
            <li>
              <NavLink className="navbar__item"
                onClick={props.handleLogout}
                to="/Login"
              >
                Logout
              </NavLink>
            </li>
        }
        {
          !props.authUserId && 
            <li>
              <NavLink className="navbar__item" 
                activeClassName="navbar__item-active" 
                to="/Login"
              >
                Login
              </NavLink>
            </li>
        }
      </ul>     
    </nav>
  );
}

export default Menu;