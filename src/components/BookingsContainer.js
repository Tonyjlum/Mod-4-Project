import React from 'react'
import Booking from './Booking'
import EditBookingForm from './EditBookingForm'
import WriteReviewForm from './WriteReviewForm'

class BookingsContainer extends React.Component {

  state = {
    bookings: [],
    showEdit: false,
    showReview: false,
    currentBooking: null,
    edittedDT: null,
    edittedNote: "",
    currentShowing: "upcoming-bookings",
    rating: null,
    review: "",
  }

  showEditModal = (booking) => {
    this.setState({ showEdit: true, currentBooking: booking })
  }

  showReviewModal = (booking) => {
    this.setState({ showReview: true, currentBooking: booking})
  }

  hideModal = () => {
    this.setState({ showEdit: false, showReview: false })
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/appointments")
    .then( resp => resp.json())
    .then( bookings => {
      const usersBookings = bookings.filter( booking => {
        return booking.user_id === 1
      })
      const sortedBookings = usersBookings.sort( (a, b) => (new Date(a.datetime).getTime() - new Date(b.datetime).getTime()) )
      this.setState({
        bookings: usersBookings
      })
    })
  }

  mapUsersBookings = () => {
    return this.state.bookings.filter( booking => {
      return booking.user_id === 1
    })
  }

  handleCancelBooking = (bookingId) => {
    if (window.confirm(`Would you like to cancel?`)) {
      console.log("delete this booking:", bookingId);
      fetch(`http://localhost:3001/api/v1/appointments/${bookingId}`, {
        method: "DELETE"
      })
      .then( () => {
        this.setState({
          bookings: this.state.bookings.filter( booking => {
            return booking.id !== bookingId
          })
        })
      })
    }
  }

  getEdittedBookingInfo = (e) => {
    console.log(e)
    e.preventDefault()
    e.persist()
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleEditSubmit = (booking) => {
    fetch(`http://localhost:3001/api/v1/appointments/${booking.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        datetime: this.state.edittedDT,
        note: this.state.edittedNote
      })
    })
  }

  toggleAllFuturePastBookings = (e) => {
    e.preventDefault()
    this.setState({
      currentShowing: e.target.id
    })
  }

  displayBookings = () => {
    if (this.state.currentShowing === "upcoming-bookings") {
      return this.state.bookings.filter( booking => {
        return new Date(booking.datetime).getTime() > Date.now()
      })
    } else if (this.state.currentShowing === "past-bookings") {
      return this.state.bookings.filter( booking => {
        return new Date(booking.datetime).getTime() < Date.now()
      })
    } else {
      return this.state.bookings
    }
  }

  handleReviewChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, console.log(this.state.review, this.state.rating))
  }

  submitReview = () => {
    fetch(`http://localhost:3001/api/v1/appointments/${this.state.currentBooking.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        review: this.state.review,
        chef_rating: this.state.rating
      })
    })
    .then(res => res.json())
    .then(console.log)

  }

  render() {
    return (
      <div className="booking-container">
        <div className="btn-group btn-group-toggle fixed-top" data-toggle="buttons">
          <label className="btn btn-secondary" onClick={this.toggleAllFuturePastBookings} id="all-bookings">
            <input type="radio" name="options" id="option1" autoComplete="off" />All Bookings
          </label>
          <label className="btn btn-secondary active" onClick={this.toggleAllFuturePastBookings} id="upcoming-bookings">
            <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked />Upcoming Bookings
          </label>
          <label className="btn btn-secondary" onClick={this.toggleAllFuturePastBookings} id="past-bookings">
            <input type="radio" name="options" id="option3" autoComplete="off" />Past Bookings
          </label>
        </div>
        {this.displayBookings().map( booking => {
          return (
            <Booking
              key={booking.id}
              booking={booking}
              chefs={this.props.chefs}
              cancelBooking={this.handleCancelBooking}
              showEditModal={this.showEditModal}
              showReviewModal={this.showReviewModal}
            />
          )
        })}
        <EditBookingForm
          show={this.state.showEdit}
          handleClose={this.hideModal}
          currentBooking={this.state.currentBooking}
          editBooking={this.getEdittedBookingInfo}
          handleEditSubmit={this.handleEditSubmit}
        />
        <WriteReviewForm
          show={this.state.showReview}
          handleClose={this.hideModal}
          currentBooking={this.state.currentBooking}
          submitReview={this.submitReview}
          handleReviewChange={this.handleReviewChange}
        />
      </div>
    )
  }

}

export default BookingsContainer
