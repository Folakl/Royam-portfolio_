import React from 'react'
import TypingDemo from './TypingDemo'
import profile from '../assets/headies.jpg'
import ComeOutWord from './Comeoutword'
import Comeinword from './Comeinword'




const Lander = ({homeRef}) => {
 


  return (
   <div ref={homeRef} >
      
    <div className=' lg:flex  md:flex grid justify-center lg:mx-5 md:mx-5 mx-0 '>
      
  <div className='lg:w-1/2 md:w-1/2 w-2/2'>
      <ComeOutWord>
        <div className=' text-start text-white pt-20 px-3'>
        <h3 className='text-[25px] text-start'>Hello, It's me</h3>
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
  
  <div className=" lg:grid md:grid hidden">
  <img 
    src={profile}
    className="rounded-full lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] w-[150px] h-[150px] mt-[80px] "
    alt="profile"
  />
</div>

    </div>
    </div>
  

  
  )
}

export default Lander
