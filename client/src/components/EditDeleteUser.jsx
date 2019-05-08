import React, { Component } from 'react'

class EditDeleteUser extends Component {
  render() {
    return (
      <div>
        <p>delete your profile here</p>
        <button
            className="delete-btn"
            onClick={(e) => {
                e.preventDefault()
                this.props.deleteUser(this.props.currentUser.id)
            }}
        >DELETE ACCOUNT</button>
      </div>
    )
  }
}

export default EditDeleteUser