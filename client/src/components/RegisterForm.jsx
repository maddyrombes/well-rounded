import React, {Component} from 'react';
import { withRouter } from 'react-router'

class RegisterForm extends Component {
  
  render() {
    const { registerForm, handleChange, handleSubmit } = this.props

  return (
    <div className="signup-div">
      <h3>sign up</h3>
      <form 
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
        <label>username</label>
        <input 
          name="username" 
          type="text" 
          value={registerForm.username} 
          onChange={handleChange}/>
        <label>password</label>
        <input 
          name="password" 
          type="password" 
          value= {registerForm.password} 
          onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}}

export default withRouter(RegisterForm)