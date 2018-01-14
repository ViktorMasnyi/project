import React,  { Component } from 'react';

class Login extends Component {
  componentDidUpdate () {
    this.handleRedirect()
  }

  handleRedirect = (props) => {
    if (this.props.authUserId > 0) this.props.history.push('/UserHomePage');
  }

  render () {
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
          <label className="loginpage__label" htmlFor="login">login</label>
          <input className="loginpage__item"  name="login" type="text" />
          <label className="loginpage__label" htmlFor="password">password</label>
          <input className="loginpage__item" name="password" type="password" />
          <input className="loginpage__button" value="Login" type="submit" />
          {/* <a className="link" href="Login/Signup">signup</a> */}
        </form>
      </main>
    );
  }
}

export default Login;
