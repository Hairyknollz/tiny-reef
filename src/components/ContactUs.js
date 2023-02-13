import React from 'react';
import '../index.css'
import ContactForm from './ContactForm';

const ContactUs = ({ componentRef }) => {
    return(
        <div className='form-container'>
            <h2 className="section-header" ref={componentRef}>Contact Us</h2>
            <p>If you have any questions or feedback feel free to send us an email!</p>
            <ContactForm />
        </div>
    )
}

export default ContactUs;