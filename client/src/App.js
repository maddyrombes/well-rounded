import React, { Component } from 'react';
import './App.css';
import decode from 'jwt-decode';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import { loginUser, registerUser } from './services/api-helper';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      authForm: {
        username: '',
        password: ''
      }
    }
    this.handleAuthChange = this.handleAuthChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleAuthChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => (
      {
        authForm: {
          ...prevState.authForm,
          [name]: value
        }
      }
    ))
  }

  async handleRegister() {
    await registerUser(this.state.authForm);
    this.handleLogin();
  }

  async handleLogin() {
    const token = await loginUser(this.state.authForm)
    const userData = decode(token.jwt);
    this.setState({
      currentUser: userData
    })
    localStorage.setItem("jwt", token.jwt)
  }

  render() {
  return (
    <div className="App">
      <header>
        <h1 className="logo">Well Rounded</h1>
          <LoginForm
            handleSubmit={this.handleLogin}
            handleChange={this.handleAuthChange}
            authForm={this.state.authForm}
          />
      </header>
        <div>
          <RegisterForm
            handleSubmit={this.handleRegister}
            handleChange={this.handleAuthChange}
            authForm={this.state.authForm}
          />
        </div>
    </div>
  );
}}

export default App;