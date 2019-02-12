import React from 'react'

const ShowReviews = (props) => {
  const showHideClassName = props.showReviews ? "modal display-block": "modal display-none"

  return(
    <div className={showHideClassName}>
      <section className="modal-main">
        {props.children}
        <form className="contact-us-form"><br/>
          <h4 className="modal-chef-name">Past Reviews</h4>
          <div className="modal-content">

            {props.bookings.filter( booking => {
              return booking.review.length > 2
            }).map( sb => {
              return <p> {sb.review} </p>
            }).slice(0, 5)}

          </div>
          <div className="contact-us-form-actions form-center">
            <input type="submit" className="button btn-center" onClick={props.handleClose} value="Close" />
          </div>
        </form>
      </section>
    </div>
  )
}

export default ShowReviews
