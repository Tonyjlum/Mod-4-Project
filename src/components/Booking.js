import React from 'react'
import Moment from 'react-moment'

class Booking extends React.Component {

  state = {
    datetime: null,
    note: ''
  }

  findChef = () => {
    return this.props.chefs.find( chef => {
      return chef.id === this.props.booking.chef_id
    })
  }

  bookingButtons = () => {
    if (new Date(this.props.booking.datetime).getTime() > Date.now()) {
      return (
        <div className="button-group-option" data-grouptype="OR">
          <a onClick={() => this.props.showEditModal(this.props.booking)} className="button edit custom">Edit Booking</a>
          <a className="button cancel custom" onClick={() => this.props.cancelBooking(this.props.booking.id)}>Cancel Booking</a>
        </div>
      )
    } else {
        if (this.props.booking.review === "0"){
          return (
            <div>
              <a className="button review custom" onClick={() => this.props.showReviewModal(this.props.booking)}>Write a Review</a>
            </div>)
        } else {
          return (
            <div>
              {"🍳".repeat(this.props.booking.chef_rating)} <p><strong>Review: </strong>{this.props.booking.review}</p>
            </div>)
        }
    }
  }

  render() {
    return (
      <div className="table-div">
      <table className="table-expand" id={this.props.booking.id}>
        <thead>
          <tr className="table-expand-row">
            <th></th>
            <th className="text-center" width="150">Chef</th>
            <th className="text-center" width="200">Date</th>
            <th className="text-center" width="150">Guests</th>
            <th className="text-center" width="150">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-expand-row" data-open-details>
            <td><img src={this.findChef() && this.findChef().profile_picture_url}/></td>
            <td className="text-center">{this.findChef() && this.findChef().name}</td>
            <td className="text-center">
            <Moment date={this.props.booking.datetime}/>
            </td>
            <td className="text-center">{this.props.booking.guest_count}</td>
            <td className="text-center">${this.props.booking.cost}<span className="expand-icon"></span></td>
          </tr>

          <tr className="table-expand-row-content">
            <td colSpan="8" className="table-expand-row-nested">
            {new Date(this.props.booking.datetime).getTime() > Date.now() && <p><strong>Note to the Chef:</strong> "{this.props.booking.note}"</p>}
                {this.bookingButtons()}
            </td>
          </tr>

        </tbody>
      </table>
      </div>
    )
  }


}

export default Booking
