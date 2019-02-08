import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm'
import ContentContainer from './components/ContentContainer'

const endPoint = "http://localhost:3001/api/v1/"

class App extends Component {

  state = {
    chefs: [],
    location: null,
    cuisine: null,
    guests: 0,
    hidden: false
  }


  componentDidMount() {
    fetch(`${endPoint}chefs`)
    .then( resp => resp.json())
    .then(chefs => {
      this.setState({
        chefs
      }, () => console.log(this.state.chefs))
    })
  }

 sortedChefs = () => {
    return this.state.chefs.sort( (a, b) => {
      return b.rating - a.rating
    }).slice(1, 3)
  }

  handleFormChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    if (this.state.location && this.state.cuisine && this.state.guests) {
      this.setState({
        hidden: !this.state.hidden
      }, () => console.log(this.state))
    }
  }

  chefsToDisplay = () => {
    if (this.state.cuisine === "any") {
      return this.state.chefs.slice(0, 3)
    } else {
      return this.state.chefs.filter( chef => {
        return chef.specialty === this.state.cuisine
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="hero-full-screen">

          <div className="top-content-section">
            <div className="top-bar">
              <div className="top-bar-left">
                <ul className="menu">
                  <li className="menu-text"><img src="https://i.imgur.com/9En3spK.png" href="#" alt="logo"/></li>
                </ul>
                <a href="#">toque</a>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="main-content-section" hidden={!this.state.hidden} data-magellan-target="main-content-section">
              <ContentContainer
                chefData={this.chefsToDisplay()}
                hidden={!this.state.hidden}
              />
            </div>
            <div className="middle-left" hidden={this.state.hidden}>
              <SearchForm
                handleSubmit={this.handleSubmit}
                handleFormChange={this.handleFormChange}
                hidden={this.state.hidden}
              />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
