import React, {Component} from 'react';
import { withRouter } from 'react-router'

class LoginForm extends Component {

  render() {
    const { loginForm, handleChange, handleSubmit } = this.props;

  return (
    <div className="loginform-header">
      <div className="logo-div">
        <button className="logo"></button>
        <h1 className="loginform-header-logo">well rounded</h1>
      </div>
      <form className="login" onSubmit={(e) => {
        e.preventDefault()
        handleSubmit(loginForm)
      }}>
        <label>username</label>
        <input 
          className="login-username-form" 
          name="username" 
          type="text" 
          value={loginForm.username} 
          onChange={handleChange}
          />
        <label>password</label>
        <input className="login-password-form" name="password" type="password" value= {loginForm.password} onChange={handleChange} />
        <button className="login-btn">Submit</button>
      </form>
    </div>
  )
}}

export default withRouter(LoginForm)