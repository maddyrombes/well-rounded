import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import decode from 'jwt-decode';
import AuthForm from './components/AuthForm';

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
  }
  render() {
  return (
    <div className="App">
      <h1>Welcome to Well Balanced</h1>
      <Route path="/register" render={() => (
          <AuthForm
            authFormTitle="Register"
            handleSubmit={this.handleRegister}
            handleChange={this.handleAuthChange}
            authForm={this.state.authForm}
          />
        )} />
        <Route path="/login" render={() => (
          <AuthForm
            authFormTitle="Login"
            handleSubmit={this.handleLogin}
            handleChange={this.handleAuthChange}
            authForm={this.state.authForm}
          />
        )} />
    </div>
  );
}}

export default App;