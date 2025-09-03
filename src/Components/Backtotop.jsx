
import React from 'react'



const Backtotop = ({TopRef}) => {
     const scrolltoTop = ()=>{
  TopRef.current.scrollIntoView({behavior: "smooth" })
 }
  return (
    <div className='bg-purple-900 text-center h-[20px] w-full  text-white cursor-pointer text-[15px] font-bold '  onClick={scrolltoTop}>Back to Top</div>
  )
}

export default Backtotop