import React from 'react';

const Login = () => (
  <main className="main">
    <form className="loginpage">
      <label className="loginpage_label" htmlFor="login">Логин</label>
      <input className="loginpage_item"  name="login" type="text" value="" />
      <label className="loginpage_label" htmlFor="password">Пароль</label>
      <input className="loginpage_item" name="password" type="text" value="" />
      <input className="loginpage_item" type="submit" value="submit" />
    </form>
  </main>
);

export default Login;
