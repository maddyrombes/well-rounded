import React, { Component } from 'react'
import { Redirect } from 'react-router'

export default class EditRatings extends Component {

    componentDidMount() {
        this.props.getUserRatings(this.props.match.params.id)
      }

  render() {
    const { currentUser } = this.props
    return (
      <div>
        {currentUser && 
        <>
        <div className="edit-header">
            <h1 className="edit-logo">Well Rounded</h1>
        </div>
        <form className="edit-form-div">
            <p>Finance</p>
            <input 
                className="editform"
                name="f_rating" 
                type="number" 
                min="1"
                max="10"
                placeholder={currentUser.ratings[0].rating} 
                value={this.props.f_rating}
                onChange={this.props.handleUpdateForm} />
            <p>Love Life</p>
            <input 
                className="editform"
                name="ll_rating" 
                type="number" 
                min="1"
                max="10"
                placeholder={currentUser.ratings[1].rating}
                value={this.props.ll_rating}
                onChange={this.props.handleUpdateForm} />
            <p>Friends and Family</p>
            <input 
                className="editform"
                name="ff_rating" 
                type="number" 
                min="1"
                max="10"
                placeholder={currentUser.ratings[2].rating}
                value={this.props.ff_rating}
                onChange={this.props.handleUpdateForm} />
            <p>Work</p>
            <input 
                className="editform"
                name="w_rating" 
                type="number" 
                min="1"
                max="10"
                placeholder={currentUser.ratings[3].rating}
                value={this.props.w_rating}
                onChange={this.props.handleUpdateForm} />
            <p>Creativity</p>
            <input 
                className="editform"
                name="c_rating" 
                type="number" 
                min="1"
                max="10"
                placeholder={currentUser.ratings[4].rating}
                value={this.props.c_rating}
                onChange={this.props.handleUpdateForm} />
            <p>Exercise</p>
            <input 
                className="editform"
                name="e_rating" 
                type="number" 
                min="1"
                max="10"
                placeholder={currentUser.ratings[5].rating}
                value={this.props.e_rating}
                onChange={this.props.handleUpdateForm} />
            <p>Healthy Eating</p>
            <input
                className="editform" 
                name="he_rating" 
                type="number" 
                min="1"
                max="10"
                placeholder={currentUser.ratings[6].rating}
                value={this.props.he_rating}
                onChange={this.props.handleUpdateForm} />
            <p>Spirituality / Self</p>
            <input 
                className="editform"
                name="ss_rating" 
                type="number" 
                min="1"
                max="10"
                placeholder={currentUser.ratings[7].rating}
                value={this.props.ss_rating}
                onChange={this.props.handleUpdateForm} />
            <button className="edit-submit-btn" onSubmit={this.props.updateRatings}>Save and go to profile</button>
        </form>
        </>
        }
      </div>
    )
  }
}