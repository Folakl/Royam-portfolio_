import React from 'react'

const Linechart = ({percent}) => {
  return (
    <div className='w-[350px] mt-2  h-1 bg-purple-900  overflow-hidden'>
        <div className='h-full bg-gradient-to-r from-purple-400 to-purple-900 ' style={{width: `${percent}%`}}>

        </div>

    </div>
  )
}

export default Linechart