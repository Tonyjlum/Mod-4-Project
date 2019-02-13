import React from 'react'

const EditBookingForm = (props) => {
  const showHideClassName = props.show ? "modal display-block": "modal display-none"

  return(
    <div className={showHideClassName}>
      <section className="modal-main">
        {props.children}
        <form className="contact-us-form" onChange={props.editBooking}><br/>
          <h4 className="modal-chef-name">Edit Your Booking!</h4>
          <div className="modal-content">
            <span className="book-chef-date-time-guests">
              <input className="book-chef-info" type="datetime-local" id="edittedDT"/>
              <input className="book-chef-info" type="number" id="edittedGuest" placeholder="Guests" min="1" max="6"/>
            </span>
            <textarea name="message" id="edittedNote" rows="12"></textarea>

            <div className="contact-us-form-actions">
              <input type="submit" className="button" onClick={props.handleClose} value="Close" />
              <input onClick={() => props.handleEditSubmit(props.currentBooking)} type="submit" className="button" value="Edit Booking" />
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}

export default EditBookingForm
