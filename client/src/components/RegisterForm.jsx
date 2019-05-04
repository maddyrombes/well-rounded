import React from 'react';

export default function RegisterForm(props) {
  const { authForm, handleChange, handleSubmit } = props;
  return (
    <div className="signup-form">
      <h3>sign up</h3>
      <form onSubmit={(e)=>{
        e.preventDefault();
        handleSubmit();
      }}>
        <p>username</p>
        <input name="username" type="text" value={authForm.username} onChange={handleChange}/>
        <p>password</p>
        <input name="password" type="password" value= {authForm.password} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}