import React from 'react'

const BookChefForm = (props) => {
  const showHideClassName = props.show ? "modal display-block": "modal display-none"

  return(
    <div className={showHideClassName}>
      <section className="modal-main">
        {props.children}
        <form className="contact-us-form"><br/>
          <h4 className="modal-chef-name">Book Chef</h4>
          <div className="modal-content">
            <input type="text" placeholder="Full name"/>
            <input type="email" placeholder="Email"/>
            <input type="datetime-local" />
            <textarea name="message" id="" rows="12" placeholder="Type your message here"></textarea>

            <div className="contact-us-form-actions">
              <input type="submit" className="button" onClick={props.handleClose} value="Close" />
              <input type="submit" className="button" value="Book Chef" onClick={props.bookChefAppointment} />
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}

export default BookChefForm
