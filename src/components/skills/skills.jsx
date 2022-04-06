import React from 'react'
import "./skills.css"
import {BsFillPatchCheckFill} from "react-icons/bs"

const Skills = () => {
  return (
    <section id='experience'>
    <h5>What skills I have</h5>
    <h2>My Skills</h2>
    <div className='conatiner experience_container'>
      <div className='experience_frontend'>
        <h3>Frontend Development</h3>
        <div className="experience_content">


        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <div> <h4>HTML</h4>
         
          </div>
         
          
        </article>

        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <div> <h4>CSS</h4>
         
          </div>
         
        </article>


        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <div> <h4>JavaScript</h4>
         
          </div>
          
        </article>




        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <div> <h4>Bootstrap</h4>
         
          </div>
          
        </article>


        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <div> <h4>jQuery</h4>
         
          </div>
         
        </article>

        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <div> <h4>React</h4>
          
          </div>
         
        </article>




        </div>
      </div>


      {/* backend */}
      <div className='experience_backend'>
      <h3>Backend Development</h3>
        <div className="experience_content">


        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <div> <h4>Node JS</h4>
          
          </div>
         
        </article>

        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <div> <h4>MongoDB</h4>
          
          
          </div>
         
        </article>


        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <div> <h4>JavaScript</h4>
         
          </div>
          
        </article>




        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <div> <h4>Express JS</h4>
       
          </div>
         
        </article>


        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <div> <h4>EJS</h4>
       
          </div>
         
        </article>

        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <div> <h4>React</h4>
          
          </div>
          
        </article>




        </div>
      </div>



      {/* other skills */}

<div className='experience_backend'>
      <h3>Other Skills</h3>
        <div className="experience_content">


        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <div> <h4>Adobe Photoshop</h4>
       
          </div>
         
        </article>

        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <div> <h4>Adobe Premiere Pro</h4>
          
         
          </div>
         
        </article>


        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <div> <h4>Adobe After Effects</h4>
        
          </div>
          
        </article>




        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <div> <h4>FL Studio</h4>
          
          </div>
         
        </article>


        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <div> <h4>AutoCAD</h4>
       
          </div>
         
        </article>

       




        </div>
      </div>


    
      
    </div>

    </section>
  )
}

export default Skills