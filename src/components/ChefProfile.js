import React from 'react'

class ChefProfile extends React.Component {

  chefBioLimit = (bio) => {
    if (bio.length > 123){
      return bio.slice(0, 120) + "..."
    } else {
      return bio
    }
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
              <p>Specialty: {this.props.chef.specialty}<small/></p><br/>
              <div className="button-group align-center">
                <button id={this.props.chef.id} onClick={() => this.props.showModal(this.props.chef)} className="button" data-open="mobile-ios-modal"><i className="fa fa-cogs"></i>Book This Chef</button>
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
