import React from 'react'
import ComeOutWord from './Comeoutword'
import Comeinword from './Comeinword'
import Linechart from './Linechart'


const Skills = ({skillRef}) => {
  return (

<div ref={skillRef} className='lg:justify-self-center md:justify-self-center mx-5'>
  <Comeinword>
    <div className='text-[10px]'>
    <h3 className='font-bold text-center text-[20px] my-2 '>Skills</h3>
   <div className='my-2'>
     <div className='flex justify-between'>
      <h3>HTML</h3>
      <h3>80%</h3>
     </div>
     <Linechart percent={80}/>
   </div>
    <div>
      
    </div>
    <div className='my-2'>
     <div className='flex justify-between'>
      <h3>css</h3>
      <h3>80%</h3>
     </div>
     <Linechart percent={80}/>
   </div>
     <div className='my-2'>
     <div className='flex justify-between'>
      <h3>Tailwind</h3>
      <h3>80%</h3>
     </div>
     <Linechart percent={80}/>
   </div>
     <div className='my-2'>
     <div className='flex justify-between'>
      <h3>JavaScript</h3>
      <h3>60%</h3>
     </div>
     <Linechart percent={60}/>
   </div>
     <div className='my-2'>
     <div className='flex justify-between'>
      <h3>React</h3>
      <h3>50%</h3>
     </div>
     <Linechart percent={50}/>
   </div>
     <div className='my-2'>
     <div className='flex justify-between'>
      <h3>Git</h3>
      <h3>70%</h3>
     </div>
     <Linechart percent={70}/>
   </div>
     <div className='my-2'>
     <div className='flex justify-between'>
      <h3>Redux Toolkit</h3>
      <h3>50%</h3>
     </div>
     <Linechart percent={50}/>
   </div>
  </div>
  </Comeinword>
 

</div>
  )
}

export default Skills

