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

  render() {
    return (
      <div className="table-div">
      <table className="table-expand" id={this.props.booking.id}>
        <thead>
          <tr className="table-expand-row">
            <th></th>
            <th width="150">Chef</th>
            <th width="200">Date</th>
            <th className="text-right" width="150">Guests</th>
            <th className="text-right" width="150">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-expand-row" data-open-details>
            <td><img src={this.findChef() && this.findChef().profile_picture_url}/></td>
            <td>{this.findChef() && this.findChef().name}</td>
            <td>
            <Moment date={this.props.booking.datetime}/>
            </td>
            <td className="text-right">{this.props.booking.guest_count}</td>
            <td className="text-right">${(this.props.booking.cost * this.props.booking.guest_count)}<span className="expand-icon"></span></td>
          </tr>

          <tr className="table-expand-row-content">
            <td colSpan="8" className="table-expand-row-nested">
              <p><strong>Note to the Chef:</strong> "{this.props.booking.note}"</p>

              <div className="button-group-option" data-grouptype="OR">
                <a href="#" onClick={() => this.props.showModal(this.props.booking)} className="button success radius">Edit Booking</a>
                <a href="#" className="button primary radius" onClick={() => this.props.cancelBooking(this.props.booking.id)}>Cancel Booking</a>
              </div>

            </td>
          </tr>

        </tbody>
      </table>
      </div>
    )
  }


}

export default Booking
