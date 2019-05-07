import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PieChart from 'react-minimal-pie-chart';

export default class UserProfile extends Component {

  componentDidMount() {
    this.props.getUserRatings(this.props.match.params.id)
  }

  render() {
    const { currentUser } = this.props
    return (
      <div>
        {currentUser && 
          <>
            <div className="userprofile-header">
              <h1 className="userprofile-logo">Well Rounded</h1>

              <Link to={`/users/${this.props.match.params.id}/edit`} className="userprofile-edit-btn">Edit your metrics</Link>

              <p className="userprofile-logout" onClick={this.props.logOut}>logout</p>
            </div>

              <h2 className="userprofile-welcome">Welcome, {currentUser.name}.</h2>
              <h3 className="userprofile-h3">Here are your metrics for today.</h3>
              <p className="userprofile-p">You're doing pretty well on [] and [],<br/> but could use some work with [] and [].</p>

            <div className="userprofile-data">

              <div className="userprofile-key">
                <div className="key">
                  <div className="f-color box"></div>
                  Finance: {currentUser.ratings[0].rating}
                </div>
                <div className="key">
                  <div className="ll-color box"></div>
                  Love Life: {currentUser.ratings[1].rating}
                </div>
                <div className="key">
                  <div className="ff-color box"></div>
                  Friends and Family: {currentUser.ratings[2].rating}
                </div>
                <div className="key">
                  <div className="w-color box"></div>
                  Work: {currentUser.ratings[3].rating}
                </div>
                <div className="key">
                  <div className="c-color box"></div>
                  Creativity: {currentUser.ratings[4].rating}
                </div>
                <div className="key">
                  <div className="e-color box"></div>
                  Exercise: {currentUser.ratings[5].rating}
                </div>
                <div className="key">
                  <div className="he-color box"></div>
                  Healthy Eating: {currentUser.ratings[6].rating}
                </div>
                <div className="key">
                  <div className="ss-color box"></div>
                  Sprirituality / Self: {currentUser.ratings[7].rating}
                </div>
              </div>

              <div className="userprofile-ratings">
                <PieChart 
                  className="piechart"
                  lineWidth='50'
                  radius={42}
                  data={[
                    { title: 'Finance', value: currentUser.ratings[0].rating, color: '#E38627' },
                    { title: 'Love Life', value: currentUser.ratings[1].rating, color: '#E2615C' },
                    { title: 'Friends & Family', value: currentUser.ratings[2].rating, color: '#BC5581' },
                    { title: 'Work', value: currentUser.ratings[3].rating, color: '#81578D' },
                    { title: 'Creativity', value: currentUser.ratings[4].rating, color: '#48547B' },
                    { title: 'Exercise', value: currentUser.ratings[5].rating, color: '#2F4858' },
                    { title: 'Healthy Eating', value: currentUser.ratings[6].rating, color: '#00725F' },
                    { title: 'Spirituality / Self', value: currentUser.ratings[7].rating, color: '#3B8728' },
                  ]}
                />
              </div>
            </div>
          </>
        }
      </div>
    )
  }
}