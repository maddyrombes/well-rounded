import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

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
        
        <p className="edit-prompt">How are you doing for each of these categories, on a scale of 1 to 10?</p>


        <form className="edit-form-div" onSubmit={(e) => {
            e.preventDefault()
            this.props.updateRatings()
            this.props.history.push(`/users/${this.props.currentUser.id}`)
        }
        }>
            <div>
            <datalist id="tickmarks">
                <option value="1" label="1">1</option>
                <option value="2" label="2">2</option>
                <option value="3" label="3">3</option>
                <option value="4" label="4">4</option>
                <option value="5" label="5">5</option>
                <option value="6" label="6">6</option>
                <option value="7" label="7">7</option>
                <option value="8" label="8">8</option>
                <option value="9" label="9">9</option>
                <option value="10" label="10">10</option>
            </datalist>
            <label>Finance</label>
            <input 
                className="editform"
                name="f_rating" 
                type="range" 
                min="1"
                max="10"
                list="tickmarks"
                labels="datalist"
                placeholder={currentUser.ratings[0].rating} 
                value={this.props.ratingForm.f_rating}
                onChange={this.props.handleUpdateForm} />
            </div>
            <div>
            <label>Love Life</label>
            <input 
                className="editform"
                name="ll_rating" 
                type="range" 
                min="1"
                max="10"
                list="tickmarks"
                labels="datalist"
                placeholder={currentUser.ratings[1].rating}
                value={this.props.ratingForm.ll_rating}
                onChange={this.props.handleUpdateForm} />
            </div>
            <div>
            <label>Friends and Family</label>
            <input 
                className="editform"
                name="ff_rating" 
                type="range" 
                min="1"
                max="10"
                list="tickmarks"
                labels="datalist"
                placeholder={currentUser.ratings[2].rating}
                value={this.props.ratingForm.ff_rating}
                onChange={this.props.handleUpdateForm} />
            </div>
            <div>
            <label>Work</label>
            <input 
                className="editform"
                name="w_rating" 
                type="range" 
                min="1"
                max="10"
                list="tickmarks"
                labels="datalist"
                placeholder={currentUser.ratings[3].rating}
                value={this.props.ratingForm.w_rating}
                onChange={this.props.handleUpdateForm} />
            </div>
            <div>
            <label>Creativity</label>
            <input 
                className="editform"
                name="c_rating" 
                type="range" 
                min="1"
                max="10"
                list="tickmarks"
                labels="datalist"
                placeholder={currentUser.ratings[4].rating}
                value={this.props.ratingForm.c_rating}
                onChange={this.props.handleUpdateForm} />
            </div>
            <div>
            <label>Exercise</label>
            <input 
                className="editform"
                name="e_rating" 
                type="range" 
                min="1"
                max="10"
                list="tickmarks"
                labels="datalist"
                placeholder={currentUser.ratings[5].rating}
                value={this.props.ratingForm.e_rating}
                onChange={this.props.handleUpdateForm} />
            </div>
            <div>
            <label>Healthy Eating</label>
            <input
                className="editform" 
                name="he_rating" 
                type="range" 
                min="1"
                max="10"
                list="tickmarks"
                labels="datalist"
                placeholder={currentUser.ratings[6].rating}
                value={this.props.ratingForm.he_rating}
                onChange={this.props.handleUpdateForm} />
            </div>
            <div>
            <label>Spirituality / Self</label>
            <input 
                className="editform"
                name="ss_rating" 
                type="range" 
                min="1"
                max="10"
                list="tickmarks"
                labels="datalist"
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