import React from 'react'
import "./footer.css"
import {BsInstagram} from "react-icons/bs";

const Footer = () => {
  return (
    <footer>

      <a className='footer_logo' href="#">Omkar Revankar</a>


      <ul className='permalinks'>


      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Skills</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#services">More</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer_socials'>

      <a href='https://www.instagram.com/supers0nic7/'><BsInstagram/></a>

      </div>
      <div className='footer_copyright'>
        <small>
          &copy; Omkar Revankar.All rights reserved.
        </small>
      </div>


     
     
    </footer>



  )
}

export default Footer