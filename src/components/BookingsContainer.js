import React from 'react'
import Booking from './Booking'
import EditBookingForm from './EditBookingForm'

class BookingsContainer extends React.Component {

  state = {
    bookings: [],
    show: false,
    currentBooking: null,
    edittedDT: null,
    edittedNote: "",
    currentShowing: "all-bookings"
  }

  showModal = (booking) => {
    this.setState({ show: true, currentBooking: booking })
  }

  hideModal = () => {
    this.setState({ show: false })
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/appointments")
    .then( resp => resp.json())
    .then( bookings => {
      this.setState({
        bookings
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
      currentBooking: e.target.id
    })
  }

  displayBookings = () => {
    if (this.state.currentBooking === "upcoming-bookings") {
      return this.state.bookings.filter( booking => {
        return new Date(booking.datetime).getTime() > Date.now()
      })
    } else if (this.state.currentBooking === "past-bookings") {
      return this.state.bookings.filter( booking => {
        return new Date(booking.datetime).getTime() < Date.now()
      })
    } else {
      return this.state.bookings
    }
  }

  render() {
    return (
      <div className="booking-container">
        <div className="btn-group btn-group-toggle fixed-top" data-toggle="buttons">
          <label className="btn btn-secondary active" onClick={this.toggleAllFuturePastBookings} id="all-bookings">
            <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked />All Bookings
          </label>
          <label className="btn btn-secondary" onClick={this.toggleAllFuturePastBookings} id="upcoming-bookings">
            <input type="radio" name="options" id="option1" autoComplete="off" />Upcoming Bookings
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
              showModal={this.showModal}
            />
          )
        })}
        <EditBookingForm
          show={this.state.show}
          handleClose={this.hideModal}
          currentBooking={this.state.currentBooking}
          editBooking={this.getEdittedBookingInfo}
          handleEditSubmit={this.handleEditSubmit}
        />
      </div>
    )
  }

}

export default BookingsContainer
