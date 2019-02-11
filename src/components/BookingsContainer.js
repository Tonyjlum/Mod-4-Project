import React from 'react'
import Booking from './Booking'
import EditBookingForm from './EditBookingForm'

class BookingsContainer extends React.Component {

  state = {
    bookings: [],
    show: false,
    currentBooking: null,
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

  render() {
    return (
      <div>
        {this.mapUsersBookings().map( booking => {
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
        />
      </div>
    )
  }

}

export default BookingsContainer
