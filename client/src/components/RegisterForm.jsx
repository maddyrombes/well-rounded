import React, {Component} from 'react'
import { withRouter } from 'react-router'

class RegisterForm extends Component {
  
  render() {
    const { registerForm, handleChange, handleSubmit } = this.props

  return (
    <div className="signup-div">

      <p className="homepage-description">Well Rounded is based on the philosophy <br/>that happiness cannot be gained by the <br/>fulfillment any single aspect of life. We believe <br/>that to be happy is to be <b><span className="ital">well rounded</span></b>, and we <br/>break this up into eight core elements: <br/><b>FINANCE</b>, <b>LOVE LIFE</b>, your relationship with <b>FRIENDS <br/>AND FAMILY</b>, <b>WORK</b>, <b>CREATIVITY</b>, <b>EXERCISE</b>, <br/><b>HEALTHY EATING</b>, and <b>SPIRITUALITY / SELF</b>.</p>

      <div>
      <h3>register</h3>
        <form 
        className="signup-form"
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}>
          <label>username</label>
          <input 
            className="signup-username-form"
            name="username" 
            type="text" 
            value={registerForm.username} 
            onChange={handleChange}/>
          <label>password</label>
          <input 
            className="signup-password-form"
            name="password" 
            type="password" 
            value= {registerForm.password} 
            onChange={handleChange} />
          <button className="register-submit-btn">Submit</button>
        </form>
        </div>
    </div>
  )
}}

export default withRouter(RegisterForm)