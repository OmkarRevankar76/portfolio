import React from 'react'
import "./header.css"
import Cta from './cta'
import Me  from "../../assets/DSC_76.png"
import HeaderSocials from './headerSocials'



const Header = () => {
  function handleClick(){
    return(
     
      window.open("https://www.dictionary.com/browse/name", "_blank")
           
    )
  }
  return (
    <header>
     <div className='container header_container'>
         <h5>hello i'm</h5>
         <h1>Omkar Revankar</h1>
         <h5 className='text-light'>A Fullstack Web Developer </h5>
        <Cta/>  
        <HeaderSocials/>
        <button onClick={handleClick} className="glow-on-hover" type="button">GET TO KNOW ABOUT ME BY PLAYING THIS AMAZING GAME</button>
        
       
        
    <div className='me'>
      <img src={Me} alt=''/>
    </div>
     
     <a href='#contact' className='scroll_down'>Scroll Down</a>
     </div>

    </header>
  )
}

export default Header