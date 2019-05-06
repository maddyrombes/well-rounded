import React, { Component } from 'react'

export default class UserProfile extends Component {
  componentDidMount() {
    this.props.getUserRatings()
  }

  render() {
    return (
      <div>
        <h1 className="userprofile-logo">Well Rounded</h1>
        <h2 className="userprofile-welcome">Welcome</h2>
        <div className="userprofile-ratings">
        {this.props.user.ratings.map(rating => (
          <React.Fragment key={rating.id}>
            <h3>{rating}</h3>
          </React.Fragment>
        ))}
        </div>
      </div>
    )
  }
}
