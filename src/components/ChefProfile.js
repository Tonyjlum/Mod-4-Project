import React from 'react'

class ChefProfile extends React.Component {

  render() {
    return(
      <div className="card-profile-stats">
        <div className="card-profile-stats-intro">
          <img className="card-profile-stats-intro-pic" src={this.props.chef.profile_picture_url} alt="profile-image" />
          <div className="card-profile-stats-intro-content">
            <h4><strong>{this.props.chef.name}</strong></h4>
            <p>Specialty: {this.props.chef.specialty}<small/></p><br/>
            <div className="button-group align-center">
              <button id={this.props.chef.id} onClick={this.props.showModal} className="button" data-open="mobile-ios-modal"><i className="fa fa-cogs"></i>Book This Chef</button>
            </div>
            <div className="card-profile-state-intro-bio">
              <h5>Bio:</h5><br/>
              <p>{this.props.chef.bio}</p>
            </div>

            <div className="reveal mobile-ios-modal" id="mobile-ios-modal" data-reveal>
              <div className="mobile-ios-modal-inner">
                <p>Book {this.props.chef.name}</p>
                <input type="number"/>
              </div>

              <div className="mobile-ios-modal-options">
                <button data-close className="button">Cancel</button>
                <button className="button">Ok</button>
              </div>
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
