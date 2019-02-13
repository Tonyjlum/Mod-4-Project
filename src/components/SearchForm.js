import React from 'react'

const SearchForm = (props) => {
  return(
    <div className="translucent-form-overlay" hidden={props.hidden}>
      <form onChange={props.handleFormChange}>
        <h3>Hire A Personal Chef</h3>
        <br/>
        <div className="row-columns">
          <select defaultValue="cuisine" id="cuisine" type="text" >
            <option value="cuisine" disabled>Cuisine</option>
            <option value="any">Any</option>
            <option value="american">American</option>
            <option value="chinese">Chinese</option>
            <option value="french">French</option>
            <option value="indian">Indian</option>
            <option value="italian">Italian</option>
            <option value="japanese">Japanese</option>
            <option value="korean">Korean</option>
            <option value="latin-american">Latin American</option>
            <option value="mediterranean">Mediterranean</option>
            <option value="mexican">Mexican</option>
            <option value="spanish">Spanish</option>
            <option value="vegetarian-vegan">Vegetarian/Vegan</option>
            <option value="vietnamese">Vietnamese</option>
            <option value="other">Other</option>
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
