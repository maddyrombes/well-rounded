import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'

class RegisterForm extends Component {
  render() {
    const { registerForm, handleChange, handleSubmit } = this.props

  return (
    <div className="signup-form">
      <h3>sign up</h3>
      <form onSubmit={async (e) => {
        e.preventDefault();
        await handleSubmit();
        this.props.history.push(`/users/${this.props.currentUser.id}/edit`)
      }}>
        <p>username</p>
        <input name="username" type="text" value={registerForm.username} onChange={handleChange}/>
        <p>password</p>
        <input name="password" type="password" value= {registerForm.password} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}}

export default withRouter(RegisterForm)