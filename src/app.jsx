import React from 'react'
import Header from "./components/header/header.jsx"
import Nav from './components/nav/nav.jsx'
import About from './components/about/about.jsx'
import Skills from './components/skills/skills.jsx'
import Services from './components/services/services.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'
import More from './components/more/more.jsx'
import Contact from './components/contact/contact.jsx'
import Footer from './components/footer/footer.jsx'


const App = () => {
  return (
    <div>
    <Header />
    <Nav />
   <About />
   <Skills />
   <Services />
   <Portfolio />
   <More/>
   <Contact/>
   <Footer/>
    </div>   
 )
}

export default App