import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.png"
import IMG2 from "../../assets/portfolio2.png"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.png"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"



const data = [
  {
    id:1,
    image:IMG1,
    title:"Portfolio website",
    github:"https://github.com",
    demo:"https://cdn.dribbble.com/users/903897/screenshots/17527964/media/2d69d20213473df55da5656097d1b58f.png?compress=1&resize=1000x750&vertical=top"

  },
  {
    id:2,
    image:IMG2,
    title:"Gaming portfolio",
    github:"https://github.com",
    demo:"https://cdn.dribbble.com/users/1684108/screenshots/17385802/media/b93fdde3d9ddaf912fa469343be36c01.png?compress=1&resize=1000x750&vertical=top"

  },
  {
    id:3,
    image:IMG3,
    title:" Whatsapp demo clone",
    github:"https://github.com",
    demo:"https://cdn.dribbble.com/users/257709/screenshots/17467732/media/ce2f5851c312620cd43fe0fce5294532.png"

  },
  {
    id:4,
    image:IMG4,
    title:"SONICATION-The Chat App",
    github:"https://github.com",
    demo:"https://cdn.dribbble.com/users/2878563/screenshots/17619333/media/9cdac7b6fa0fd0c21a64fedd11c8f329.png?compress=1&resize=1000x750&vertical=top"

  },
  {
    id:5,
    image:IMG5,
    title:"Charts templates and infographics in figma",
    github:"https://github.com",
    demo:"https://cdn.dribbble.com/users/2064361/screenshots/10489686/media/18f0cdb8f812bab9378cd6bf8f1d761f.png?compress=1&resize=1000x750&vertical=top"

  },
  {
    id:6,
    image:IMG6,
    title:"Charts templates and infographics in figma",
    github:"https://github.com",
    demo:"https://cdn.dribbble.com/users/2064361/screenshots/17619326/media/9904d5c247bc4b6a4dcb662e28c0ff62.png?compress=1&resize=1000x750&vertical=top"

  }
]






const Portfolio = () => {

 function Mapped({id,image,title,github,demo}){
  return(
<article key={id} className='portfolio_item'>
<div className='portfolio_item-image'>

<img src={image} alt={title}/>


</div>
<h3>{title}</h3>

<div className='portfolio_item-cta'>

<a href={github} className='btn'>Github</a>
<a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
</div>

</article>



  )
}


  return (
   <section id='portfolio'>
   <h5>My Recent Work</h5>
   <h2>Portfolio</h2>
  <div className='container portfolio_container'>
  
    {

       data.map(Mapped)

    }

  </div>   
   </section>
  )
}

export default Portfolio
















