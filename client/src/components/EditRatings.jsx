import React, { Component } from 'react'
import { withRouter } from 'react-router'

class EditRatings extends Component {

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

            <div className="userprofile-logo-div">
                <button className="logo"></button>
                <h1 className="userprofile-logo">well rounded</h1>
            </div>
            
            <button 
                className="edit-delete-btn"
                onClick={(e) => {
                    e.preventDefault()
                    this.props.history.push(`/users/${this.props.currentUser.id}/delete`)
                }}
                >Delete Account</button>
        </div>
        <form className="edit-form-div" onSubmit={(e) => {
            e.preventDefault()
            this.props.updateRatings()
            this.props.history.push(`/users/${this.props.currentUser.id}`)
        }
        }>
            <div>
            <label>Finance</label>
            <input 
                className="editform"
                name="f_rating" 
                type="number" 
                min="1"
                max="10"
                placeholder={currentUser.ratings[0].rating} 
                value={this.props.ratingForm.f_rating}
                onChange={this.props.handleUpdateForm} />
            </div>
            <div>
            <label>Love Life</label>
            <input 
                className="editform"
                name="ll_rating" 
                type="number" 
                min="1"
                max="10"
                placeholder={currentUser.ratings[1].rating}
                value={this.props.ratingForm.ll_rating}
                onChange={this.props.handleUpdateForm} />
            </div>
            <div>
            <label>Friends and Family</label>
            <input 
                className="editform"
                name="ff_rating" 
                type="number" 
                min="1"
                max="10"
                placeholder={currentUser.ratings[2].rating}
                value={this.props.ratingForm.ff_rating}
                onChange={this.props.handleUpdateForm} />
            </div>
            <div>
            <label>Work</label>
            <input 
                className="editform"
                name="w_rating" 
                type="number" 
                min="1"
                max="10"
                placeholder={currentUser.ratings[3].rating}
                value={this.props.ratingForm.w_rating}
                onChange={this.props.handleUpdateForm} />
            </div>
            <div>
            <label>Creativity</label>
            <input 
                className="editform"
                name="c_rating" 
                type="number" 
                min="1"
                max="10"
                placeholder={currentUser.ratings[4].rating}
                value={this.props.ratingForm.c_rating}
                onChange={this.props.handleUpdateForm} />
            </div>
            <div>
            <label>Exercise</label>
            <input 
                className="editform"
                name="e_rating" 
                type="number" 
                min="1"
                max="10"
                placeholder={currentUser.ratings[5].rating}
                value={this.props.ratingForm.e_rating}
                onChange={this.props.handleUpdateForm} />
            </div>
            <div>
            <label>Healthy Eating</label>
            <input
                className="editform" 
                name="he_rating" 
                type="number" 
                min="1"
                max="10"
                placeholder={currentUser.ratings[6].rating}
                value={this.props.ratingForm.he_rating}
                onChange={this.props.handleUpdateForm} />
            </div>
            <div>
            <label>Spirituality / Self</label>
            <input 
                className="editform"
                name="ss_rating" 
                type="number" 
                min="1"
                max="10"
                placeholder={currentUser.ratings[7].rating}
                value={this.props.ratingForm.ss_rating}
                onChange={this.props.handleUpdateForm} />
            </div>
            <button className="edit-submit-btn">Save and go to profile</button>
        </form>
        </>
        }
      </div>

    )
  }
}

export default withRouter(EditRatings)