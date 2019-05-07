import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'

class LoginForm extends Component {
  
  render() {
    const { loginForm, handleChange, handleSubmit } = this.props;
    const { currentUser } = this.props

  return (
    <div className="loginform-header">
      <h1 className="loginform-header-logo">Well Rounded</h1>
      <form className="login" onSubmit={async (e) => {
        e.preventDefault();
        await handleSubmit(loginForm);
        this.props.history.push(`/users/${currentUser.id}`)
      }}>
        <p>username</p>
        <input 
          className="login-username-form" 
          name="username" 
          type="text" 
          value={loginForm.username} 
          onChange={handleChange}
          />
        <p>password</p>
        <input className="login-password-form" name="password" type="password" value= {loginForm.password} onChange={handleChange} />
        <button className="login-btn">Submit</button>
      </form>
    </div>
  )
}}

export default withRouter(LoginForm)