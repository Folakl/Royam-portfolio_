import React from 'react'
import ComeOutWord from './Comeoutword'
import Comeinword from './Comeinword'
import services from './services'

const Service = ({servicesRef}) => {
  return (

  <div ref={servicesRef} className='my-8 mx-5 '>    
  <h3 className="font-bold text-[30px] text-center m-0 font-mono">My<span className='text-purple-500'>Services</span></h3>
  <div className=" flex-wrap gap-5 lg:justify-center   lg:flex md:flex grid  mt-2">
    
      {services.map((service, index)=>{
        return(
         <ComeOutWord key={index}>
          <div  className='w-[320px] h-[180px] shadow-lg  shadow-[purple]  border-purple-500 border-2 text-start    rounded-md p-6  '>
          
        <h3 className="text-white font-bold pt-3 m-0 text-[15px]">{service.jobtitle}</h3>
        <h3 className="text-white pt-3 m-0 text-[10px]">{service.description}</h3>
        <button className='w-[150px] py-2 h-[35px] my-3 rounded-2xl bg-purple-900 text-white hover:shadow-lg outline-none  hover:shadow-purple-500'>Book Services</button>
        </div>
         </ComeOutWord>
     
        )
      })}
   
    
  </div>
</div>

  )
}

export default Service

