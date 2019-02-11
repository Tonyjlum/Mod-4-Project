import React from 'react'

const EditBookingForm = (props) => {
  const showHideClassName = props.show ? "modal display-block": "modal display-none"

  return(
    <div className={showHideClassName}>
      <section className="modal-main">
        {props.children}
        <form className="contact-us-form"><br/>
          <h4 className="modal-chef-name">Edit Your Booking!</h4>
          <div className="modal-content">
            <input type="datetime-local" id="datetime"/>
            <textarea name="message" id="message" rows="12" placeholder="Type your message here"></textarea>

            <div className="contact-us-form-actions">
              <input type="submit" className="button" value="Close" />
              <input type="submit" className="button" value="Book Chef" />
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}

export default EditBookingForm
