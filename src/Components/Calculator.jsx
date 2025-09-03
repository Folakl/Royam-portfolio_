import React from 'react'
import calculatorimg from '../assets/calculator.png'

const Calculator = () => {
  return (
     <div className='w-[320px] h-fit flex  justify-between bg-[#93a393]  rounded-md  text-black text-[10px] p-5 '>
                    <div>
                      <h1 className='my-2 font-bold  text-[20px]'>Mini Basic Calculator</h1>
                   
                    <h3 className='mt-3 text-[10px] '>A modern banking app with authentication,balance management  and transaction features</h3>
                    <h3 className='font-bold'>Tech  Stack: </h3>
                    <h3>Tailwind css,React,Redux toolkit</h3>
        
                    <h3 className='font-bold'>Features:</h3>
                    <ul  className='list-disc ml-4'>
                    <li>User authentication(Sign up, Sign In , Logout)</li>
                        <li> Add and withdraw balance</li>
                        <li> Transaction History</li>
                        <li> Responsive Design</li>
                    </ul>
                    
                    <h3  className='mt-2 font-bold text-[10px]'>Live Demo : safepay-8ghw.vercel.app  <link rel="stylesheet" href="safepay-8ghw.vercel.app" /></h3>
                    
                    <h3 className='font-bold text-[10px]'>Github Repository: <span><link rel="stylesheet" href="safepay-8ghw.vercel.app" />safepay-8ghw.vercel.app</span></h3>
                    </div>
                    <div><img src={calculatorimg} alt="" className='rounded-md w-[100px]' /></div>
                </div>
  )
}

export default Calculator
