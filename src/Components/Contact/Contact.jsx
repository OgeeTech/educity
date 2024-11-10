import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          send us a message <img src={msg_icon} />
        </h3>
        <p>
          feel free to reach out through contact form or find our contact
          information below. Your feedbacks, questions, amd suggestions are
          important to us as we stive to provide exceptional university
          community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" srcset="" />
            Contact@Wgift41@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" srcset="" />
            +234 810-828-4356
          </li>
          <li>
            <img src={location_icon} alt="" srcset="" />
            77 Massachusetts Ave, Cambridge <br />
            MA 0213, united state
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form action="">
          <label htmlFor="">Your name</label>
          <input type="text" placeholder="Enter your name" required />
          <label htmlFor="">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number "
            required
          />
          <label htmlFor="">Write your message here </label>
          <textarea
            name="message"
            rows="3"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
