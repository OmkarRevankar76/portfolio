
import React from 'react'
import {BsFillPatchCheckFill} from "react-icons/bs"
import "./more.css"

function More() {
  return (
    <section id='experience'>
  
    <h2>Hobbies and Research paper</h2>
    <div className='conatiner experience_container'>
      <div className='hobbies'>
        <h3>Hobbies</h3>
        <div className="experience_content">


        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <div> <h4>Video Editing</h4>
         
          </div>
         
          
        </article>

        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <div> <h4>Martial Arts</h4>
         
          </div>
         
        </article>


        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <div> <h4>Photography</h4>
         
          </div>
          
        </article>




        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <div> <h4>Singing</h4>
         
          </div>
          
        </article>


        <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icon'/>
          <div> <h4>Movies Collecting</h4>
         
          </div>
         
        </article>

       




        </div>
      </div>


      {/* backend */}
      <div className='research'>
      <h3>Research paper</h3>
        <div className="experience_content">


        <article className='experience_details'>

          <div> <h4>Analysis of traffic to neutralize congestion at divided roadways: case study</h4>
          
          </div>
         
        </article>

       



        </div>
      </div>
      </div>
      </section>
  )
}

export default More
















