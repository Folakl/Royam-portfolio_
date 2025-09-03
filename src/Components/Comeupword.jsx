import React from 'react'
import {motion} from 'framer-motion'

const Comeupword = ({duration=2, delay= 0, children}) => {
  return (
     <motion.div
      initial={{ opacity: 0, y:     100 }}
      whileInView={{opacity:1,y:0}}
      viewport={{once: false, amount: 0.3}}
      transition={{ duration,delay, ease: 'easeOut'}}
      className="text-center  "
    >
     {children}
    </motion.div>
  )
}

export default Comeupword