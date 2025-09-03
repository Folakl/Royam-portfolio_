import React from 'react'
import {Typewriter} from "react-simple-typewriter"
const TypingDemo = () => {
  return (
    <div className='  w-contain h-contain text-purple-500 font-bold   rounded-md '>
        <Typewriter words={['Frontend Developer', 'Passionate Coder' ,'Graphic Designer', 'Food scientist']}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        delaySpeed={1500}
        deleteSpeed={50}>
            
        </Typewriter>
    </div>
  )
}

export default TypingDemo