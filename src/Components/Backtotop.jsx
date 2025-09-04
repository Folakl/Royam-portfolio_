
import React from 'react'



const Backtotop = ({homeRef}) => {
     const scrolltoTop = ()=>{
  homeRef.current.scrollIntoView({behavior: "smooth" })
 }
  return (
    <div>
      <h3 className='bg-purple-900 text-center h-[20px] w-full  text-white cursor-pointer text-[15px] font-bold '  onClick={scrolltoTop}>Back to Top</h3>
    </div>
  )
}

export default Backtotop