import React from 'react'
import Navbar from '../Components/Navbar'
import Lander from '../Components/Lander'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Portfolio from '../Components/Portfolio'
import Service from '../Components/Service'
import Contact from '../Components/Contact'
import { useState } from 'react'
import { useRef } from 'react'
import Backtotop from '../Components/Backtotop'
const Home = () => {
  const [togglemenu, setTogglemenu] = useState(false);
    const skillRef = useRef(null);
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const homeRef = useRef(null);
    const servicesRef = useRef(null);
    const ContactRef = useRef(null);



 
  return (
    <div className='bg-black  w-full text-white'>
      
    
      <Navbar togglemenu={togglemenu} ContactRef={ContactRef} setTogglemenu={setTogglemenu} homeRef={homeRef} servicesRef={servicesRef} skillRef={skillRef} aboutRef={aboutRef} projectRef={projectRef}/>
       
      <Lander togglemenu={togglemenu} homeRef={homeRef}/>
      <About aboutRef={aboutRef}/>
      <Skills skillRef={skillRef}/>
      <Service servicesRef={servicesRef}/>
      <Portfolio projectRef={projectRef}/>
      <Contact ContactRef={ContactRef}/>
      <Backtotop homeRef={homeRef}/>
    </div>
  )
}

export default Home
