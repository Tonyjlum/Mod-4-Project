import React from 'react'

class ChefProfile extends React.Component {

  state = {
    note: "",
    date: null,
    allBookings: []
  }

  chefBioLimit = (bio) => {
    if (bio.length > 123){
      return bio.slice(0, 120) + "..."
    } else {
      return bio
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/appointments")
    .then( resp => resp.json())
    .then( allBookings => {
      this.setState({
        allBookings
      })
    })
  }

  findChefBookings = () => {
    return this.state.allBookings.filter( booking => {
      return booking.chef_id === this.props.chef.id
    })
  }

  render() {
    return(
      <div className="card-profile-stats">
        <div>
          <div className="card-profile-stats-intro">

            <div className="card-profile-stats-intro-pic-div">
              <img className="card-profile-stats-intro-pic" src={this.props.chef.profile_picture_url} alt="profile-image" />
            </div>

            <div className="card-profile-stats-intro-content">
              <h4><strong>{this.props.chef.name}</strong></h4>
              <p className="capitalize">Specialty: {this.props.chef.specialty}</p><br/>
              <div className="button-group align-center">
                <button id={this.props.chef.id} onClick={() => this.props.showModal(this.props.chef)} className="btn btn-primary" data-open="mobile-ios-modal"><i className="fa fa-cogs"></i>Book This Chef</button>
              </div>
            </div>

            <div className="card-profile-state-intro-bio">
              <p>{this.chefBioLimit(this.props.chef.bio)}</p>
            </div>

          </div>

        </div>



        <hr />


        <div className="card-profile-stats-container">
          <div className="card-profile-stats-statistic">
            <span className="stat">${this.props.chef.price}</span>
            <p>per person</p>
          </div>
          <div className="card-profile-stats-statistic">
            <span className="stat">{"🍳".repeat(this.props.chef.rating)}</span>
            <p>rating</p>
          </div>
          <div className="card-profile-stats-statistic">
            <span className="stat">{this.findChefBookings().length}</span>
            <p>satisfied clients</p>
          </div>
          <div className="card-profile-stats-statistic">
            <button className="btn btn-outline-primary" onClick={() => this.props.getChefsBookings(this.props.chef)}>reviews</button>
          </div>
        </div>

      </div>


    )
  }

}

export default ChefProfile
