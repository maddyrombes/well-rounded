import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import decode from 'jwt-decode';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import { showUserProfile, loginUser, registerUser } from './services/api-helper';
import UserProfile from './components/UserProfile';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      userRatings: [],
      authForm: {
        username: '',
        password: ''
      }
    }
    this.handleAuthChange = this.handleAuthChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.getUserRatings = this.getUserRatings.bind(this)
  }

  //AUTH

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

  //FETCH USER DATA
  
  async getUserRatings(id) {
    const currentUser = await showUserProfile(id)
    this.setState({ currentUser })
  }

  render() {
  return (
    <div className="App">
      <header>
        <Route exact path="/" render={() => (
          <LoginForm
            handleSubmit={this.handleLogin}
            handleChange={this.handleAuthChange}
            authForm={this.state.authForm}
          />
        )} />
      </header>
        <div>
        <Route exact path="/" render={() => (
          <RegisterForm
            handleSubmit={this.handleRegister}
            handleChange={this.handleAuthChange}
            authForm={this.state.authForm}
          />
        )} />
        </div>
        <Route exact path="/users/:id" render={(props) => (
          <UserProfile 
            {...props}
            ratings={this.state.userRatings}
            currentUser={this.state.currentUser}
            getUserRatings={this.getUserRatings}
          />
        )} />
    </div>
  );
}}

export default App;