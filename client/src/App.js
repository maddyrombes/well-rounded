import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import decode from 'jwt-decode'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import EditRatings from './components/EditRatings'
import { showUserProfile, loginUser, registerUser, putUserRatings } from './services/api-helper'
import UserProfile from './components/UserProfile'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      loginForm: {
        username: '',
        password: ''
      },
      registerForm: {
        username: '',
        password: ''
      },
      f_rating: '',
      ll_rating: '',
      ff_rating: '',
      w_rating: '',
      c_rating: '',
      e_rating: '',
      he_rating: '',
      ss_rating: ''
      
    }
    this.handleLoginAuthChange = this.handleLoginAuthChange.bind(this)
    this.handleRegisterAuthChange = this.handleRegisterAuthChange.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.getUserRatings = this.getUserRatings.bind(this)
    this.logOut = this.logOut.bind(this)
    this.handleUpdateForm = this.handleUpdateForm.bind(this)
    this.updateRatings = this.updateRatings.bind(this)
  }

  // componentDidMount() {
  //   const token = localStorage.getItem('jwt')
  //   if (token) {
  //     const decodedToken = decode(token)
  //     this.setState({ currentUser: decodedToken })
  //   }
  // }

  //AUTH

  handleLoginAuthChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => (
      {
        loginForm: {
          ...prevState.loginForm,
          [name]: value
        }
      }
    ))
  }

  handleRegisterAuthChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => (
      {
        registerForm: {
          ...prevState.registerForm,
          [name]: value
        }
      }
    ))
  }

  async handleRegister() {
    await registerUser(this.state.registerForm);
    this.handleLogin(this.state.registerForm);
  }

  async handleLogin(form) {
    const token = await loginUser(form)
    const userData = decode(token.token);
    this.setState({
      currentUser: userData
    })
    localStorage.setItem("jwt", token.token)
  }

  logOut() {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
  }

  //FETCH USER DATA
  
  async getUserRatings(id) {
    const currentUser = await showUserProfile(id)
    this.setState({ currentUser })
  }

  //EDIT

  handleUpdateForm(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  async updateRatings(rating) {
    const updatedRating = await putUserRatings(this.state.currentUser.id, this.state.formData)
    this.setState(prevState => ({
      rating: prevState.rating.map(e => e.id === rating.id ? updatedRating : e) 
    }))
  }

  render() {
    return (
      <div className="App">
        <header>
          <Route exact path="/" render={(props) => (
            <LoginForm
              {...props}
              handleSubmit={this.handleLogin}
              handleChange={this.handleLoginAuthChange}
              loginForm={this.state.loginForm}
            />
          )} />
        </header>
          <Route exact path="/" render={() => (
            <RegisterForm
              handleSubmit={this.handleRegister}
              handleChange={this.handleRegisterAuthChange}
              registerForm={this.state.registerForm}
            />
          )} />
          <Route exact path="/users/:id" render={(props) => (
            <UserProfile 
              {...props}
              currentUser={this.state.currentUser}
              getUserRatings={this.getUserRatings}
              logOut={this.logOut}
            />
          )} />
          <Route exact path="/users/:id/edit" render={(props) => (
            <EditRatings 
              {...props}
              currentUser={this.state.currentUser}
              getUserRatings={this.getUserRatings}
              formData={this.state.formData}
              handleUpdateForm={this.handleUpdateForm}
              updateRatings={this.updateRatings}
            />
          )} />
      </div>
    );
  }
}

export default App;