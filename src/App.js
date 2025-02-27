import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm'
import ContentContainer from './components/ContentContainer'
import BookingsContainer from './components/BookingsContainer'
import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom"
import About from './components/About'

import * as Const from './const.js'

class App extends Component {

  state = {
    chefs: [],
    chefsToReturn: [],
    cuisine: null,
    guests: 0,
    hidden: false
  }

  componentDidMount() {
    fetch(`${Const.ENDPOINT}chefs`)
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
    }, () => console.log("in form change", this.state))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.cuisine) {
      this.setState({
        hidden: !this.state.hidden,
        chefsToReturn: this.chefsToDisplay()
      }, () => console.log(this.state))
    }
  }

  chefsToDisplay = () => {
    console.log("display chefs");
    if (this.state.cuisine === "any") {
      return this.state.chefs
    } else {
      return this.state.chefs.filter( chef => {
        return chef.specialty === this.state.cuisine
      })
    }
  }

  selectedChef = (selectedChef) => {
    const selected = this.state.chefs.find(chef => chef.id === selectedChef.id)
    console.log(selected);
    return selected
  }

  handleBookChef = () => {
    this.setState({
      hidden: !this.state.hidden
    })
  }


  searchForm = () => (
    <div className="middle-left">
      <div className="middle-left" hidden={this.state.hidden}>
        <SearchForm
          handleSubmit={this.handleSubmit}
          handleFormChange={this.handleFormChange}
          hidden={this.state.hidden}
        />
      </div>
      <div className="wrapper" hidden={!this.state.hidden}>
        <ContentContainer
          chefData={this.state.chefsToReturn}
          selectedChef={this.selectedChef}
          handleBookChef={this.handleBookChef}
          guests={this.state.guests}
        />
      </div>

    </div>
  )

  renderAllChefs =  () => (
    <div className="wrapper" >
      <ContentContainer
        chefData={this.state.chefs.sort((a,b) => b.rating - a.rating)}
        selectedChef={this.selectedChef}
        handleBookChef={this.handleBookChef}
        guests={this.state.guests}
      />
    </div>)

  renderBookings = () => (
    <BookingsContainer
      chefs={this.state.chefs}
    />
  )

  renderAbout = () => (
    <About />
  )

  render() {
    return (
      <Router>
      <div>

        <div className="App">
          <div className="hero-full-screen">

            <div className="top-content-section">
              <div className="top-bar">
                <div className="top-bar-left">
                  <ul className="menu">
                    <li className="menu-text"><img src="https://i.imgur.com/9En3spK.png" href="#" alt="logo"/></li>

                    <li><NavLink exact to="/chefs" >
                      Chefs
                    </NavLink></li>

                    <li><NavLink exact to="/bookings" >
                      Your Bookings
                    </NavLink></li>

                    <li><NavLink exact to="/about" >
                      About
                    </NavLink></li>

                  </ul>
                  <a href="/">toque</a>
                </div>
              </div>
            </div>

            <Route exact path="/" component={this.searchForm} />
            <Route exact path="/chefs" component={this.renderAllChefs} />
            <Route exact path="/bookings" component={this.renderBookings} />
            <Route exact path="/about" component={this.renderAbout} />


          </div>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
