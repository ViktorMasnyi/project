import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class Navigation extends React.Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <div>
          <ul className="App-menu">
                <li><Link  className='App-menu-item' to = '/'>Home</Link></li>
                <li><Link  className='App-menu-item' to = '/Contacts'>Contacts</Link></li>
                <li><Link  className='App-menu-item' to = '/'>Home</Link></li>
                <li><Link  className='App-menu-item' to = '/'>Home</Link></li>
                <li><Link  className='App-menu-item' to = '/'>Home</Link></li>
          </ul>          
        </div>
      </BrowserRouter>
    )
  }
}

export default Navigation;
