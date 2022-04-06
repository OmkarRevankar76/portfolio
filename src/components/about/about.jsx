import React from 'react'
import "./about.css"
import Me from "../../assets/DSC_073811.png"
import {MdSchool} from "react-icons/md"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
const About = () => {
  return (
  <section id='about'>
    <h5>Get to know</h5>
    <h2>About Me</h2>

    <div className='container about_container'>
      <div className='about_me'>
      <div className='about_me-image'>
        <img src={Me} alt='about image'/>
      </div>

      </div>
      <div className='about_content'>

      <p>
      I’m a Full-Stack web developer Who lives inside a house called React,
Node.js is my backyard where I play with the tools like MongoDB,
Express, and EJS, HTML and CSS are my babies and I love them so much

          </p>
          <a href='#contact' className='btn-special btn btn-primary'>Let's Talk</a>
        <div className='about_cards'>
          <article className='about_card'>
          <MdSchool className='about_icon'/>
          <h5>Annasaheb Dange College of Engineering
and Technology, Ashta - 416301</h5>
          <small>B.Tech (Civil Engineering ) 2016 - 2021 CPI-6.5</small>
          <h5>G.A Highschool & Jr.College, Sangli -
416416</h5>
          <small>HSC (comupter science) 2014-2016</small>
          <h5>City Highschool Sangli, Sangli - 416416</h5>
          <small>SSC 2014</small>
          </article>

          
          </div>
       
      </div>
    </div>
  </section>
  )
}

export default About