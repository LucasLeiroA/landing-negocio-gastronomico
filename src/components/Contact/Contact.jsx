import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="container-contact">
      <h2>Contact Us</h2>
      <p>If you have any questions or need more information, feel free to contact us.</p> {/* Nuevo texto */}
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Enter your message" rows="4" required></textarea>
        </div>
        <button type="submit" className="btn-send">Send</button>
      </form>
    </div>
  );
}

export default Contact;
