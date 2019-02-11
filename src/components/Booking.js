import React from 'react'

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
      <table className="table-expand" id={this.props.booking.id}>
        <thead>
          <tr className="table-expand-row">
            <th width="200">Date</th>
            <th>Chef</th>
            <th className="text-right" width="150">Guests</th>
            <th className="text-right" width="150">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-expand-row" data-open-details>
            <td>
              {this.props.booking.datetime}
            </td>
            <td>{this.findChef() && this.findChef().name}</td>
            <td className="text-right">{this.props.booking.guest_count}</td>
            <td className="text-right">${(this.props.booking.cost * this.props.booking.guest_count)}<span className="expand-icon"></span></td>
          </tr>

          <tr className="table-expand-row-content">
            <td colSpan="8" className="table-expand-row-nested">
              <p>Note to the Chef: "{this.props.booking.note}"</p>

              <div className="button-group-option" data-grouptype="OR">
                <a href="#" onClick={() => this.props.showModal(this.props.booking)} className="button success radius">Edit Booking</a>
                <a href="#" className="button primary radius" onClick={() => this.props.cancelBooking(this.props.booking.id)}>Cancel Booking</a>
              </div>

            </td>
          </tr>

        </tbody>
      </table>
    )
  }


}

export default Booking
