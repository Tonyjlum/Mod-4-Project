import React from 'react'

const SearchForm = (props) => {
  return(
    <div className="translucent-form-overlay" hidden={props.hidden}>
      <form>
        <h3>Hire A Personal Chef</h3>
        <br/>
        <div className="row columns">
          <select id="location" type="text" onChange={props.handleFormChange}>
            <option value="location">Location</option>
            <option value="any">Any</option>
            <option value="brooklyn">Brooklyn</option>
            <option value="manhattan">Manhattan</option>
            <option value="queens">Queens</option>
          </select>
        </div>
        <div className="row columns">
          <select id="cuisine" type="text" onChange={props.handleFormChange}>
            <option value="cuisine">Cuisine</option>
            <option value="any">Any</option>
            <option value="italian">Italian</option>
            <option value="french">French</option>
            <option value="latin-american">Latin American</option>
            <option value="indian">Indian</option>
            <option value="american">American</option>
            <option value="mediterranean">Mediterranean</option>
            <option value="mexican">Mexican</option>
            <option value="japanese">Japanese</option>
            <option value="chinese">Chinese</option>
            <option value="korean">Korean</option>
            <option value="spanish">Spanish</option>
            <option value="vegetarian-vegan">Vegetarian/Vegan</option>
            <option value="vietnamese">Vietnamese</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="row columns">
          <select id="guests" type="text" onChange={props.handleFormChange}>
            <option value="guests">Guests</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <br/>

        <button onClick={props.handleSubmit} type="button" className="primary button expanded search-button">
          Search
        </button>


     </form>
    </div>
  )
}

export default SearchForm
