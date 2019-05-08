import React, { Component } from 'react'
import { withRouter } from 'react-router'

class EditDeleteUser extends Component {
  render() {
    return (
      <div>
        <p>delete your profile here</p>
        <button
            className="delete-btn"
            onClick={(e) => {
                e.preventDefault()
                this.props.deleteUser(this.props.match.params.id)
                this.props.history.push(`/`)
            }}
        >DELETE ACCOUNT</button>
      </div>
    )
  }
}

export default withRouter(EditDeleteUser)