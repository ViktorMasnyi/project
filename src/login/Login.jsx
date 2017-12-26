import React from 'react';

const Login = (props) => (
  <main className="main">
    <form
      onSubmit={
        (e) => {
          e.preventDefault(); 
          props.handleLogin(e);
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
);

export default Login;
