import React from 'react';

export default function LoginForm(props) {
  const { authForm, handleChange, handleSubmit } = props;
  return (
    <div className="loginform-header">
      <h1 className="loginform-header-logo">Well Rounded</h1>
      <form className="login" onSubmit={(e)=>{
        e.preventDefault();
        handleSubmit();
      }}>
        <p>username</p>
        <input className="login-username-form" name="username" type="text" value={authForm.username} onChange={handleChange}/>
        <p>password</p>
        <input className="login-password-form" name="password" type="password" value= {authForm.password} onChange={handleChange} />
        <button className="login-btn">Submit</button>
      </form>
    </div>
  )
}