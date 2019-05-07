import React, { Component } from 'react'

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
                name="" 
                type="number" 
                min="1"
                max="10"
                placeholder={currentUser.ratings[0].rating} 
                value={this.props.formData.f_rating}
                onChange=""/>
            <p>Love Life</p>
            <input 
                className="editform"
                name="" 
                type="number" 
                min="1"
                max="10"
                placeholder={currentUser.ratings[1].rating}
                value={this.props.formData.ll_rating}
                onChange=""/>
            <p>Friends and Family</p>
            <input 
                className="editform"
                name="" 
                type="number" 
                min="1"
                max="10"
                placeholder={currentUser.ratings[2].rating}
                value={this.props.formData.ff_rating}
                onChange=""/>
            <p>Work</p>
            <input 
                className="editform"
                name="" 
                type="number" 
                min="1"
                max="10"
                placeholder={currentUser.ratings[3].rating}
                value={this.props.formData.w_rating}
                onChange=""/>
            <p>Creativity</p>
            <input 
                className="editform"
                name="" 
                type="number" 
                min="1"
                max="10"
                placeholder={currentUser.ratings[4].rating}
                value={this.props.formData.c_rating}
                onChange=""/>
            <p>Exercise</p>
            <input 
                className="editform"
                name="" 
                type="number" 
                min="1"
                max="10"
                placeholder={currentUser.ratings[5].rating}
                value={this.props.formData.e_rating}
                onChange=""/>
            <p>Healthy Eating</p>
            <input
                className="editform" 
                name="" 
                type="number" 
                min="1"
                max="10"
                placeholder={currentUser.ratings[6].rating}
                value={this.props.formData.he_rating}
                onChange=""/>
            <p>Spirituality / Self</p>
            <input 
                className="editform"
                name="" 
                type="number" 
                min="1"
                max="10"
                placeholder={currentUser.ratings[7].rating}
                value={this.props.formData.ss_rating}
                onChange=""/>
            <button className="edit-submit-btn">Save and go to profile</button>
        </form>
        </>
        }
      </div>
    )
  }
}