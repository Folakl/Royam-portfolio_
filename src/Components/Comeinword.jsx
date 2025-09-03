import React from 'react'
import {motion} from 'framer-motion'
const Comeinword = ({children, delay = 0, duration = 1}) => {
  return (
    <motion.div
    initial= {{opacity:0,x: 100  }}
    whileInView={{opacity:1, x: 0}}
    viewport={{once: false, amount:0.2}}
    transition={{ duration,delay, ease: 'easeOut'}}
    className="text-center "

    >
      {children}  
    </motion.div>
    
  )
}

export default Comeinword