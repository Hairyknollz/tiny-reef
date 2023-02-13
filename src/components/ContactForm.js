import React from "react";

const ContactForm = () => {
  
  return (
    <form className='contact-form' action="https://formsubmit.co/7fae4111ff4dfc58fd6c860f68ad04b0" method="POST">
      <div className="form-group">
        <input className="input-field border" type="text" name="name" placeholder="Name" required></input>
      </div>
      <div className='form-group'>
        <input className="input-field border" type="email" name="email" placeholder="Email Address" required></input>
      </div>
      <div className='form-group'>
        <textarea className='message-box border' rows="5" placeholder='Type your message here'/>
      </div>
      <div className='form-submit'>
        <button className='submit-button' type="submit">Send</button>
      </div>
    </form>
  )
};

export default ContactForm;