import React from 'react';

export default function LoginForm(props) {
  const { loginForm, handleChange, handleSubmit } = props;
  return (
    <div className="loginform-header">
      <h1 className="loginform-header-logo">Well Rounded</h1>
      <form className="login" onSubmit={(e)=>{
        e.preventDefault();
        handleSubmit(loginForm);
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
        <button 
          className="login-btn"
          onClick={(e => {
            this.props.history.push(`/users/${this.props.currentUser.id}`)
          })}
          >Submit</button>
      </form>
    </div>
  )
}