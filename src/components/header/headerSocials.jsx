import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"


const HeaderSocials = () => {
  function handleClick(){
    window.open("https://www.linkedin.com/in/omkar-revankar-6930521b8/", "_blank");
  }
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/omkar-revankar-6930521b8/' target="_blank" onClick={handleClick}><BsLinkedin/></a>
        <a href='https://github.com/OmkarRevankar76' target="_blank"><BsGithub/></a>
        <a href='https://www.instagram.com/supers0nic7/' target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials