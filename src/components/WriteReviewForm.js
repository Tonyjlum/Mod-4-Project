import React from 'react'

const WriteReviewForm = (props) => {
  const showHideClassName = props.show ? "modal display-block": "modal display-none"

  return(
    <div className={showHideClassName}>
      <section className="modal-main">
        {props.children}
        <form className="contact-us-form" onChange={props.handleReviewChange}><br/>
          <h4 className="modal-chef-name">Write a Review!</h4>
          <div className="modal-content">
          <fieldset className="rating">
            <input type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1" title="Sucks big time">🍳 </label>
            <input type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2" title="Kinda bad">🍳🍳 </label>
            <input type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3" title="Meh">🍳🍳🍳 </label><br/>
            <input type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4" title="Pretty good">🍳🍳🍳🍳</label>
            <input type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5" title="Rocks!">🍳🍳🍳🍳🍳 </label>
          </fieldset>
            <textarea name="review" id="review" rows="8" placeholder="Please write a review."></textarea>
            <div className="contact-us-form-actions">
              <input type="submit" className="button" onClick={props.handleClose} value="Close" />
              <input type="submit" className="button" onClick={props.submitReview} value="Submit Review" />
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}

export default WriteReviewForm
