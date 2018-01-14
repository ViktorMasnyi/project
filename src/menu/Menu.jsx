import React from "react";
import { NavLink } from "react-router-dom";

const Menu = (props) => {
  return (
    <nav className="menucontainer">
      <ul className="navbar">
        <li className="navbar__topitem">
          <NavLink className="navbar__item" activeClassName="navbar__item-active" to="/">
            Main
          </NavLink>
        </li>        
        <li className="navbar__topitem navbar__topitem--ordered">
          <div className="dropdown">
            <NavLink className="navbar__item dropbtn" activeClassName="navbar__item-active" to="/Tests">
              Tests catalog
            </NavLink>
            <div className="dropdown-content">
              <NavLink to="/Tests/byalphabet">by alphabet</NavLink>
              <NavLink to="/Tests/bytheme">by theme</NavLink>
            </div>
          </div>
        </li>        
        <li className="navbar__topitem">
          <NavLink className="navbar__item" activeClassName="navbar__item-active" to="/Gallery">
            Graduates Gallery
          </NavLink>
        </li>
        <li className="navbar__topitem">
          <NavLink className="navbar__item" activeClassName="navbar__item-active" to="/Contacts">
            Contacts
          </NavLink>
        </li>          
        {
          !!props.authUserId && 
          <li className="navbar__topitem">
            <NavLink className="navbar__item" 
              activeClassName="navbar__item-active"
              to="/UserHomePage">
                Cabinet
            </NavLink>
          </li>
        }
        {
          !!props.authUserId && 
            <li className="navbar__topitem">
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
            <li className="navbar__topitem">
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
