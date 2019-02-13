import React from 'react'
// import ReactDOM from 'react-dom'
// import { StyleRoot } from 'radium'
// import Coverflow from 'react-coverflow'
import ChefProfile from './ChefProfile'
import BookChefForm from './BookChefForm'
import ShowReviews from './ShowReviews'

class ContentContainer extends React.Component {

  state = {
    show: false,
    currentChef: null,
    datetime: null,
    message: '',
    bookings: [],
    showReviews: false
  }

  showModal = (chef) => {
    this.setState({ show: true, currentChef: chef })
  }

  showReviewsModal = (chef) => {
    this.setState({ showReviews: true, currentChef: chef })
  }

  hideModal = () => {
    this.setState({ show: false })
  }

  hideReviewsModal = () => {
    this.setState({ showReviews: false })
  }

  bookChefAppointment = (e) => {
    e.preventDefault()
    fetch("http://localhost:3001/api/v1/appointments", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user_id: 1,
        chef_id: this.state.currentChef.id,
        guest_count: this.props.guests,
        cost: this.state.currentChef.price * this.props.guests,
        note: this.state.message,
        datetime: this.state.datetime
      })
    })
    .then( resp => resp.json())
    .then( appt => {
      this.setState({
        show: false,
        currentChef: null,
        datetime: null,
        message: ''
      })
    })
  }

  onBookChefFormChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    }, () => console.log(this.state))
  }

  getChefsBookings = (chef) => {
    this.setState({
      currentChef: chef
    })
    fetch("http://localhost:3001/api/v1/appointments")
    .then( resp => resp.json())
    .then( bookings => {
      const chefsBookings = bookings.filter( booking => {
        return booking.chef_id === this.state.currentChef.id
      })
      const sortedBookings = chefsBookings.sort( (a, b) => (new Date(b.datetime).getTime() - new Date(a.datetime).getTime()) )
      this.setState({
        bookings: sortedBookings
      }, () => this.showReviewsModal(this.state.currentChef))
    })
  }

  render() {
    return(
      <div className="profile-wrapper">
        {this.props.chefData.map(chef => {
          return (
            <ChefProfile
              key={chef.id}
              chef={chef}
              selectedChef={this.props.selectedChef}
              handleBookChef={this.props.handleBookChef}
              showModal={this.showModal}
              getChefsBookings={this.getChefsBookings}
              showReviewsModal={this.showReviewsModal}
            />
          )
        })}
          <BookChefForm
            selectedChef={this.props.selectedChef}
            show={this.state.show}
            handleClose={this.hideModal}
            bookChefAppointment={this.bookChefAppointment}
            onBookChefFormChange={this.onBookChefFormChange}
          />
          <ShowReviews
            bookings={this.state.bookings}
            showReviews={this.state.showReviews}
            handleClose={this.hideReviewsModal}
          />
      </div>
    )
  }

}

export default ContentContainer
