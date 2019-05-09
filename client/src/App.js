import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import decode from 'jwt-decode'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import EditRatings from './components/EditRatings'
import { showUserProfile, loginUser, registerUser, putUserRatings, destroyUser } from './services/api-helper'
import UserProfile from './components/UserProfile'
import DeleteUser from './components/DeleteUser'

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
        name: '',
        username: '',
        password: ''
      },
      ratingForm: {f_rating: '',
      ll_rating: '',
      ff_rating: '',
      w_rating: '',
      c_rating: '',
      e_rating: '',
      he_rating: '',
      ss_rating: ''}
      
    }
    this.handleLoginAuthChange = this.handleLoginAuthChange.bind(this)
    this.handleRegisterAuthChange = this.handleRegisterAuthChange.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.getUserRatings = this.getUserRatings.bind(this)
    this.logOut = this.logOut.bind(this)
    this.handleUpdateForm = this.handleUpdateForm.bind(this)
    this.updateRatings = this.updateRatings.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
  }

  componentDidMount() {
    const token = localStorage.getItem('jwt')
    if (token) {
      const decodedToken = decode(token)
      this.setState({ currentUser: decodedToken })
    }
  }

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
    const token = await loginUser(this.state.registerForm)
    const userData = decode(token.token);
    this.setState({
      currentUser: userData
    })
    localStorage.setItem("jwt", token.token)
    this.props.history.push(`/users/${userData.id}/edit_ratings`)
  }

  async handleLogin(form) {
    const token = await loginUser(form)
    const userData = decode(token.token);
    this.setState({
      currentUser: userData
    })
    localStorage.setItem("jwt", token.token)
    this.props.history.push(`/users/${userData.id}`)
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
    const {name, value} = e.target;
    this.setState(prevState=>({
      ratingForm: {...prevState.ratingForm, 
        [name]: value
      }
    }))
  }

  updateRatings() {
    const ratingKeys = Object.keys(this.state.ratingForm)
    ratingKeys.forEach(async (rating, index) => {
      if (this.state.ratingForm[rating].length > 0) {
        const newRating = await putUserRatings(this.state.currentUser.id, this.state.currentUser.ratings[index].id, this.state.ratingForm[rating] );
        this.setState(prevState=>({
          currentUser: {
            ...prevState.currentUser,
            ratings: prevState.currentUser.ratings.map(rating => (rating.id === newRating.id ? newRating : rating))
          }
        }))
      }
    })
  }

  //DELETE USER

  async deleteUser(id) {
    await destroyUser(id)
    this.setState({ currentUser: null })
    localStorage.removeItem("jwt");
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
              currentUser={this.state.currentUser}
            />
          )} />
        </header>
          <Route exact path="/" render={(props) => (
            <RegisterForm
              {...props}
              handleSubmit={this.handleRegister}
              handleChange={this.handleRegisterAuthChange}
              registerForm={this.state.registerForm}
              currentUser={this.state.currentUser}
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
          <Route exact path="/users/:id/edit_ratings" render={(props) => (
            <EditRatings 
              {...props}
              currentUser={this.state.currentUser}
              getUserRatings={this.getUserRatings}
              handleUpdateForm={this.handleUpdateForm}
              updateRatings={this.updateRatings}
              ratingForm={this.state.ratingForm}
            />
          )} />
          <Route exact path="/users/:id/delete" render={(props) => (
            <DeleteUser 
              {...props}
              currentUser={this.state.currentUser}
              getUserRatings={this.getUserRatings}
              deleteUser={this.deleteUser}
            />
          )} />
      </div>
    );
  }
}

export default withRouter(App)