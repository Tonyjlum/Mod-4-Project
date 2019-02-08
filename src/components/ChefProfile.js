import React from 'react'

class ChefProfile extends React.Component {

  state = {
    available: true,
  }

  render() {
    return(
      <div className="card-profile-stats">
        <div className="card-profile-stats-intro">
          <img className="card-profile-stats-intro-pic" src={this.props.chef.profile_picture_url} alt="profile-image" />
          <div className="card-profile-stats-intro-content">
            <h4>{this.props.chef.name}</h4>
            <p>Specialty: {this.props.chef.specialty}<small/></p>
          </div>
        </div>

        <hr />

        <div className="card-profile-stats-container">
          <div className="card-profile-stats-statistic">
            <span className="stat">{this.props.chef.rating}</span>
            <p>rating</p>
          </div>
          <div className="card-profile-stats-statistic">
            <span className="stat">25</span>
            <p>reviews</p>
          </div>
          <div className="card-profile-stats-statistic">
            <span className="stat">32</span>
            <p>meals cooked</p>
          </div>
        </div>

      </div>


    )
  }

}

export default ChefProfile
