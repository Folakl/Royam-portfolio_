import React from 'react'
import { motion } from 'framer-motion'


const ComeOutWord = ({children, delay = 0, duration = 2}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{opacity:1,x:0}}
      viewport={{once: false, amount: 0.3}}
      transition={{ duration,delay, ease: 'easeOut'}}
      className="text-center  "
    >
     {children}
    </motion.div>
  )
}

export default ComeOutWord
