import React from 'react';
import './contact.css';

import {MdEmail} from 'react-icons/md';
import {BsLinkedin} from 'react-icons/bs';
import {SiWhatsapp} from 'react-icons/si';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hd9hyea', 'template_r6ulyol', form.current, '0RuzV4mGEpaQmtjmj')
    e.target.reset();
  };

  const messageSent = () => {
    window.alert("Message Sent");
  }


  
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
              <MdEmail className='contact__icon'/>
              <h4>Email</h4>
              <h5>prakashmishra18298@gmail.com</h5>
              <a href="mailto:prakashmishra18298@gmail.com" target="_blank" rel="noopener noreferrer">Send Email</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__icon'/>
              <h4>Linkedin</h4>
              <h5>Prakash Mishra</h5>
              <a href="https://www.linkedin.com/in/prakash-mishra-94449b185/" target="_blank" rel="noopener noreferrer">Connect me</a>
          </article>
          <article className="contact__option">
            <SiWhatsapp className='contact__icon'/>
              <h4>Whatsapp</h4>
              <h5>7017122384</h5>
              <a href="https://api.whatsapp.com/send?phone=7017122384" target="_blank" rel="noopener noreferrer">Send Message</a>
          </article>
        </div>
        {/*End of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' onClick={messageSent}>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
