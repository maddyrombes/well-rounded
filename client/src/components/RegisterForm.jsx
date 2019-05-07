import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'

class RegisterForm extends Component {
  componentDidMount() {

  }
  
  render() {
    const { registerForm, handleChange, handleSubmit, currentUser } = this.props

  return (
    <div className="signup-form">
      <h3>sign up</h3>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
        <label>name</label>
        <input name="name" type="text" value={registerForm.name} onChange={handleChange}/>
        <label>username</label>
        <input name="username" type="text" value={registerForm.username} onChange={handleChange}/>
        <label>password</label>
        <input name="password" type="password" value= {registerForm.password} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}}

export default withRouter(RegisterForm)