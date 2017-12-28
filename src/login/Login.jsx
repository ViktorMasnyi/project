import React,  { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleRedirect = (props) => {
    if (this.props.authUserId > 0) this.props.history.push('/UserHomePage');
  }

  render () {    
    this.handleRedirect();
    return (
      <main className="main">
        <form
          onSubmit={
            (e) => {
              e.preventDefault(); 
              this.props.handleLogin(e);
            }
          }
          className="loginpage"
          autoComplete="off"
        >
          <label className="loginpage_label" htmlFor="login">login</label>
          <input className="loginpage_item"  name="login" type="text" />
          <label className="loginpage_label" htmlFor="password">password</label>
          <input className="loginpage_item" name="password" type="text" />
          <input
            type="submit"
            className="loginpage_item" 
            value="Login" 
          />
          <a className="link" href="Login/Signup">signup</a>
        </form>
      </main>
    )
  }
}

export default Login;
