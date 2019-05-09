import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

class EditDeleteUser extends Component {
  render() {
    return (
      <div>
      <div className="delete-header">

        <div className="userprofile-logo-div">
          <button className="logo"></button>
          <h1 className="userprofile-logo">well rounded</h1>
        </div>

        <Link to={`/users/${this.props.match.params.id}/edit_ratings`} className="delete-back-btn">GO BACK</Link>

      </div>
      
      <div className="delete">
        <p className="delete-para">If you're sure you want to delete your profile,<br/> click the button below. <br/>This action cannot be undone.</p>
        <button
            className="delete-btn"
            onClick={(e) => {
                e.preventDefault()
                this.props.deleteUser(this.props.match.params.id)
                this.props.history.push(`/`)
            }}
        >DELETE ACCOUNT</button>
      </div>
    </div>
    )
  }
}

export default withRouter(EditDeleteUser)