import React from 'react';
import { MdOutlineMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './ContactUS.css';

function ContactUS() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A 
          QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN REACH OUT TO US THROUGH THE CONTACT 
          FORM ON THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-methods">
          <div className="contact-buttons">
            <button className="contact-btn chat-btn">
              <MdOutlineMessage className="btn-icon" />
              <span>VIA SUPPORT CHAT</span>
            </button>
            
            <button className="contact-btn call-btn">
              <FaPhoneAlt className="btn-icon" />
              <span>VIA CALL</span>
            </button>
          </div>

          <button className="contact-btn email-btn">
            <MdEmail className="btn-icon" />
            <span>VIA EMAIL FORM</span>
          </button>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your name"
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter your email"
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="6" 
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

        <div className="contact-image">
          <img src="/images/24.jpg" alt="Contact Support" />
        </div>
      </div>
    </div>
  );
}

export default ContactUS;