import React from 'react'
import ReactDOM from 'react-dom'
import ChefProfile from './ChefProfile'
import BookChefForm from './BookChefForm'

class ContentContainer extends React.Component {

  state = {
    show: false,
    currentChefId: null
  }

  showModal = (id) => {
    this.setState({ show: true, currentChefId: id })
  }

  hideModal = () => {
    this.setState({ show: false })
  }

  bookChefAppointment = (e) => {
    e.preventDefault()

    console.log("book a chef", this.state.currentChefId);
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
