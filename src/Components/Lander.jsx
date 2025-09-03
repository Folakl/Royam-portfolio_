import React from 'react'
import TypingDemo from './TypingDemo'
import profile from '../assets/headies.jpg'
import ComeOutWord from './Comeoutword'
import Comeinword from './Comeinword'




const Lander = ({togglemenu,homeRef,setTogglemenu, skillRef,aboutRef,projectRef,servicesRef, ContactRef}) => {
  const scrolltoHome =()=>{
  homeRef.current.scrollIntoView({behavior: "smooth"})
 }
  const scrolltoContact =()=>{
  ContactRef.current.scrollIntoView({behavior: "smooth"})
 }
  const scrolltoService = ()=>{
  servicesRef.current.scrollIntoView({behavior:"smooth"});
 }
 const scrolltoSkill =()=>{
  skillRef.current.scrollIntoView({behavior: "smooth"});
 };
 const scrolltoAbout = ()=>{
  aboutRef.current.scrollIntoView({behavior:"smooth"});
 }
 const scrolltoproject = ()=>{
  projectRef.current.scrollIntoView({behavior: "smooth"})
 }


  const handleClick = () => {
    setTogglemenu(!togglemenu);
  };

  return (
   <div ref={homeRef}>
            {togglemenu && (
        <div className='fixed top-15 left-0 w-full h-contain text-start bg-purple-500 text-white z-50 p-6 flex flex-col' onClick={handleClick}>
          <ul className='space-y-4 text-lg'>
            <li className='cursor-pointer hover:text-[#5a5b63]' onClick={scrolltoHome}>Home</li>
            <li className='cursor-pointer hover:text-[grey]' onClick={scrolltoSkill}>Skills</li>
            <li className='cursor-pointer hover:text-[grey]' onClick={scrolltoAbout}>About</li>
            <li className='cursor-pointer hover:text-[grey]'  onClick={scrolltoproject}>Projects</li>
            <li className='cursor-pointer hover:text-[grey]'>Faq</li>
            <li className='cursor-pointer hover:text-[#b5b5b5]' onClick={scrolltoService}>Services</li>
          </ul>
          <button onClick={scrolltoContact} className='mt-6 outline-none bg-purple-900 py-2 px-6  w-[120px] hover:w-[130px] hover:h-[42px] h-[40px] rounded-md text-white flex items-center'>
            Contact <span className='ml-2'><ion-icon name="arrow-forward-outline"></ion-icon></span>
          </button>

          {/* Close button */}
          
        </div>
      )}
    <div className=' lg:flex  md:flex grid justify-center lg:mx-5 md:mx-5 mx-0 '>
      
  <div className='lg:w-1/2 md:w-1/2 w-2/2'>
      <ComeOutWord>
        <div className=' text-start text-white pt-20 px-3'>
        <h3 className='text-[25px] text-start'>Hello It's me</h3>
        <h1 className='text-[25px]'>Hi,I'm Yakub Roimot Omotara</h1>
       <div className='flex space-x-2'>
        <h3 className=''> And I'm a</h3>
       <TypingDemo/>
       </div>
      

    </div>
    </ComeOutWord>
    <Comeinword>
       <h3 className='text-[12px] text-wrap  mt-5 text-start pl-3'>I'm a web developer with extensive learning
         experience of over two years, expertise to create a web design,frontEnd, Responsiveness,
         State management,Api and Ai integration and many more...</h3>
    </Comeinword>
    <ComeOutWord  >
      <div className='flex mt-5'>
        <div className='border-2 rounded-2xl border-purple-500 text-purple-500  h-9 py-2 w-9 ml-2'>
            <ion-icon name="logo-figma"></ion-icon>
        </div>
        <div className='border-2 rounded-2xl border-purple-500 text-purple-500  h-9 py-2 w-9 ml-2'>
           <ion-icon name="logo-html5"></ion-icon>
        </div>
        <div className='border-2 rounded-full border-purple-500 text-purple-500  h-9 py-2 w-9 ml-2'>
                <ion-icon name="logo-css3"></ion-icon>
        </div>
        <div className='border-2 rounded-2xl border-purple-500 text-purple-500  h-9 py-2 w-9 ml-2'>
             <ion-icon name="logo-javascript"></ion-icon>
        </div>
        <div className='border-2 rounded-2xl border-purple-500 text-purple-500  h-9 py-2 w-9 ml-2'>
           <ion-icon name="logo-react"></ion-icon>
        </div>
        <div className='border-2 rounded-2xl border-purple-500 text-purple-500  h-9 py-2 w-9 ml-2'>
            <ion-icon name="git-branch-outline"></ion-icon>
        </div>
      
      
      </div>

    </ComeOutWord>
     
  </div>
  
  <div className="mt-[60px] ml-[100px] relative lg:grid md:grid hidden">
  {/* Glow wrapper */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="lg:w-[350px] lg:h-[350px] md:w-[250px] md:h-[250px] w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle_at_center,_#1e3aff,_#ff63ff,_#38bdff,_#fffffa)] blur-2xl opacity-40"></div>
  </div>

  {/* Profile Image */}
  <img
    src={profile}
    className="relative rounded-full lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] w-[150px] h-[150px] z-10"
    alt="profile"
  />
</div>

    </div>
    </div>
  

  
  )
}

export default Lander
