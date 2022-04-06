import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {FaLinkedin}  from "react-icons/fa"
import {BsWhatsapp} from "react-icons/bs"
import {useRef} from 'react';
import emailjs from "emailjs-com"

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qi4z4sf', 'template_xplzoav', form.current, 'SO_K9az_qKET8Kij4')
     
    e.target.reset()
    
     
  };
  return (
    <section id='contact'>
    
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>
    <div className='container contact_container'>
    <div className='contact_options'>

      <article className='contact_option'>
      <MdOutlineEmail className='contact_option-icon'/>
        <h4>Email</h4>
        <h5>Omkar395@gmail.com</h5>
        <a href='mailto:Omkar395@gmail.com' target="_blank">Send a Messagae</a>
      </article>

      <article className='contact_option'>
      <FaLinkedin  className='contact_option-icon'/>
        <h4>LinkedIn</h4>
        <h5>omkar Revankar</h5>
        <a href='www.linkedin.com/in/omkar-revankar-6930521b8' onClick={ () => {
    window.open("https://www.linkedin.com/in/omkar-revankar-6930521b8/");
  }} target="_blank" >Send a Messagae</a>
      </article>


      <article className='contact_option'>
      <BsWhatsapp  className='contact_option-icon'/>
        <h4>WhatsApp</h4>
        <h5>9764767680</h5>
        <a href='https://api.whatsapp.com/send?phone=9764767680' target="_blank">Send a Messagae</a>
      </article>
    </div>

    {/* END OF CONTACT OPTIONS */}
    <form ref={form} onSubmit={sendEmail}>

      <input type="text" name='name' placeholder='Your Full Name' required/>
      <input type="text" name="email" placeholder='Your Email' required/>
      <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
      <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
    </div>
    </section>
  )
}

export default Contact