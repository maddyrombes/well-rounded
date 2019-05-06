import React, { Component } from 'react'
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
            <h1 className="userprofile-logo">Well Rounded</h1>
            <h2 className="userprofile-welcome">Welcome, {currentUser.name}</h2>

            <div className="userprofile-ratings">
              <PieChart
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
          </>
        }
      </div>
    )
  }
}