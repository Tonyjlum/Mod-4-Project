import React from 'react'
import ReactDOM from 'react-dom'
import ChefProfile from './ChefProfile'
import BookChefForm from './BookChefForm'

class ContentContainer extends React.Component {

  state = {
    show: false,
    currentChef: null,
    datetime: null,
    message: ''
  }

  showModal = (chef) => {
    this.setState({ show: true, currentChef: chef })
  }

  hideModal = () => {
    this.setState({ show: false })
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
        guest_count: this.state.guests,
        cost: this.state.currentChef.price,
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

  render() {
    return(
      <div className="main-content-container" hidden={this.props.hidden}>
        {this.props.chefData.map(chef => {
          return (
            <ChefProfile
              key={chef.id}
              chef={chef}
              selectedChef={this.props.selectedChef}
              handleBookChef={this.props.handleBookChef}
              showModal={this.showModal}
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
      </div>
    )
  }

}

export default ContentContainer
