import React from 'react'
import tokmart from '../assets/tokmart.png'

const Shopping = () => {
  return (
    <div className='w-[250px] h-fit justify-self-center bg-[#7f887f]  rounded-md  text-black p-5'>
                     <h1 className='my-5 text-center font-bold  text-[20px]'>Tokmart Mall</h1>
                     <img src={tokmart} alt="" />
                     <h3 className='mt-3 text-[20px]'>A modern banking app with authentication,balance management  and transaction features</h3>
                     <h3 className='font-bold'>Tech  Stack: </h3>
                     <h3>Tailwind css,React,Redux toolkit</h3>
         
                     <h3 className='font-bold'>Features:</h3>
                     <ul  className='list-disc ml-4'>
                     <li>User authentication(Sign up, Sign In , Logout)</li>
                         <li> Add and withdraw balance</li>
                         <li> Transaction History</li>
                         <li> Responsive Design</li>
                     </ul>
                     
                     <h3  className='mt-5 font-bold text-[10px]'>Live Demo : safepay-8ghw.vercel.app  <link rel="stylesheet" href="safepay-8ghw.vercel.app" /></h3>
                     <h3 className='font-bold text-[10px]'>Github Repository: <span><link rel="stylesheet" href="safepay-8ghw.vercel.app" />safepay-8ghw.vercel.app</span></h3>
                 </div>
  )
}

export default Shopping
