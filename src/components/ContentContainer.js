import React from 'react'
import ReactDOM from 'react-dom'
import ChefProfile from './ChefProfile'
import BookChefForm from './BookChefForm'

class ContentContainer extends React.Component {

  state = {
    show: false
  }

  showModal = () => {
    this.setState({ show: true })
  }

  hideModal = () => {
    this.setState({ show: false })
  }

  bookChefAppointment = (e) => {
    e.preventDefault()
    console.log("book a chef");
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
        />
      </div>
    )
  }

}

export default ContentContainer
