import React from 'react'

const SearchForm = () => {
  return(
    <div class="translucent-form-overlay">
      <form>
        <h3>Find Your Toque</h3>
        <div class="row columns">
          <label>Location<br/>
            <select name="status" type="text">
              <option value="any">Any</option>
              <option value="brooklyn">Brooklyn</option>
              <option value="manhattan">Manhattan</option>
              <option value="queens">Queens</option>
            </select>
          </label>
        </div>
        <div class="row columns">
          <label>Type of Cuisines<br/>
            <select name="status" type="text">
              <option value="any">Any</option>
              <option value="italian">Italian</option>
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
          </label>
        </div>
        <div class="row columns">
          <label>Number of Guests<br/>
            <select name="status" type="text">
              <option value="one">1</option>
              <option value="two">2</option>
              <option value="three">3</option>
              <option value="four">4</option>
              <option value="five">5</option>
              <option value="six">6</option>
              <option value="seven">7</option>
              <option value="eight">8</option>
              <option value="9">9</option>
              <option value="ten">10</option>
              <option value="more-than-ten">more than 10</option>
            </select>
          </label>
        </div>
        <div class="row">
          <label class="columns small-12">Price</label>
          <div class="columns small-6">
            <input type="number" min="0" name="min" placeholder="Min" />
          </div>
          <div class="columns small-6">
            <input type="number" min="0" name="max" placeholder="Max" />
          </div>
        </div>
        <button type="button" class="primary button expanded search-button">
          Search
        </button>
     </form>
    </div>
  )
}

export default SearchForm
