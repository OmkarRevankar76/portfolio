import React from 'react'
import "./services.css"
import {BsCheckLg} from "react-icons/bs"

const Services = () => {
  return (
   <section id='services'>
<h5>Some of my</h5>
<h2>Accomplishment</h2>
  <div className='container services_container'>
  <article className='service'>
<div className='service_head'>
<h3>
  CERTIFICATIONS
</h3>
</div>
<ul className='service_list'>
 

<li> 
  <BsCheckLg className='service_list-icon'/>
  <a className='linked' href="https://www.udemy.com/certificate/UC-1b9673c5-d257-4c27-8e95-bd0d8da32f05/">The Complete 2022 Web Development Bootcamp</a>
</li>

<li> 
  <BsCheckLg className='service_list-icon'/>
  <a className='linked' href="https://www.udemy.com/certificate/UC-08d3e883-7cd1-4b8a-8b5e-c19886c17001/">50 Projects In 50 Days - HTML, CSS & JavaScript</a>
</li>


<li> 
  <BsCheckLg className='service_list-icon'/>
  <a className='linked' href="https://coursera.org/share/2ac6d27971fd81bb9541ca63e8035a7c"> Front-End Web UI Frameworks and Tools: Bootstrap 4</a>
</li>

<li> 
  <BsCheckLg className='service_list-icon'/>
  <a className='linked' href="https://freecodecamp.org/certification/fcc407882c6-f4ff-43c9-8104-d539f5ff9fbd/javascript-algorithms-and-data-structures">JavaScript Algorithms and Data Structures</a>
</li>


<li> 
  <BsCheckLg className='service_list-icon'/>
  <a className='linked' href="https://learndigital.withgoogle.com/digitalunlocked/validate-certificate-code">The Fundamentals of Digital
marketing-By Google</a>
</li>


 



  





</ul>
  </article>


  {/*================================================= END OF THE ARTICLE UI/UX */}

{/* ==========================WEB DEVELOPMENT===================================== */}

  <article className='service'>
<div className='service_head'>
<h3>
 ACHIEVEMENTS
</h3>
</div>
<ul className='service_list'>
  <li> 
  <BsCheckLg className='service_list-icon'/>
  <p>Winner in "FIELD EXPO" at
"DISCOVERY2K17"</p>
   </li>



   <li> 
  <BsCheckLg className='service_list-icon'/>
  <p>Runner up in "PHOTO
EXHIBITION" at "LAKSHYA2017"
</p>
   </li>

   <li> 
  <BsCheckLg className='service_list-icon'/>
  <p>Runner up in "KBC" at
"Innovation2k18"</p>
   </li>


   <li> 
  <BsCheckLg className='service_list-icon'/>
  <p>Member of "LARGEST LAZIM
DANCE" which is recorded as
"GUINNESS WORLD RECORD"
</p>
   </li>






</ul>
  </article>

  {/* ===========END OF WEB DEVELOPMENT */}

  {/* ==============START OF THE CONTENT CREATION */}



  <article className='service'>
<div className='service_head'>
<h3>
  EXTRACURRICULAR ACTIVITIES
</h3>
</div>
<ul className='service_list'>
  <li> 
  <BsCheckLg className='service_list-icon'/>
  <p>Volunteered for Blood camp</p>
   </li>



   <li> 
  <BsCheckLg className='service_list-icon'/>
  <p>Socially helped people who affected by flood-Sangli Mahapur 2019</p>
 
   </li>

   <li> 
  <BsCheckLg className='service_list-icon'/>
  <p>Tree plantation
</p>
   </li>


   <li> 
  <BsCheckLg className='service_list-icon'/>
  <p>Organized event on "Teacher's day" 2019</p>
   </li>





</ul>
  </article>

  {/* END OF CONTENT CREATION */}

  

  </div>

   </section>
  )
}

export default Services