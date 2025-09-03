import React from 'react'
import project from './project'
const Portfolio = ({projectRef}) => {
  return (
    <div className=' p-10 ' ref={projectRef}>
      <h3 className='text-[30px] font-bold  text-center'>Portfolio</h3>
      <h3 className='text-[15px] text-center pt-3 pb-2 font-mono '>Latest project </h3>

   
     <div className='flex-wrap flex gap-5 justify-center ' id='portfolio'>

      {project.map((project,index)=>{
        return(
          <div key={index} className='w-[320px] h-contain text-white border-2 bg-transparent text-start p-5 rounded-2xl'>
           
            <div className=''>
               <h3 className='font-bold py-2'>{project.name}</h3>
             <h3 className='font-bold my-2 '> TechStack: <span className='font-normal'>{project.techStack}</span></h3>
             <h3 className='font-bold'>Features: <span className='font-normal'>{project.features}</span></h3>
             <h3 className='font-bold'>Live demo: <a href="">{project.livedemo}</a></h3>
            </div>
         
             
          
          </div>
        )
      })}

   
    
    
      
      
       

         
    
     </div>
    <a href="safepay-8ghw.vercel.app"  className='justify-end flex mt-5 text-purple-900 text-[13px] font-bold cursor-pointer'>View my github to see more</a>
      
    </div>
  )
}

export default Portfolio