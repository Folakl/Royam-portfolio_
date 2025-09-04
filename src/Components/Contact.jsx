import React from 'react'
import Comeinword from './Comeinword';
import { useState } from 'react';
const Contact=({ContactRef})=>{
 const [email,setEmail] = useState("");
 const [subject,setSubect] = useState("");
 const [message,setMessage] = useState("");
    const [name,setName] = useState("");
    const handleSubmit =()=>{
        if (email === "" || name === "" || subject=== "" || message === ""){
            alert("enter necessary details")
        }
        else{
           alert("entered sucessfully ")
    }}
  return (
    <div ref={ContactRef}>
          <h3 className='text-center  text-[30px] my-3'>Contact<span className='text-purple-900'>Me</span></h3>
 
    <Comeinword>
        <div className='lg:flex md:flex grid gap-20 px-[120px]= py-5 '>
    <div className='text-start px-5'>
      
        <h3 className='text-start py-2 font-bold'>Lets work Together</h3>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo provident est dicta fugiat facilis, ducimus possimus perferendis neque eaque. Quibusdam obcaecati sunt reprehenderit odit natus voluptatibus consequuntur recusandae accusamus, modi atque distinctio numquam illo voluptate exercitationem iste veritatis iusto debitis. Accusamus ab, voluptatibus ipsum mollitia excepturi harum sunt placeat.</h3>
     <div className='my-5'>
         <div className='flex gap-2'>
        <h3 className='text-purple-900 text-[20px]'><ion-icon name="mail-outline"></ion-icon></h3>
        <h3>yakubroimot2001@gmail.com</h3>
      </div>
      <div className='flex gap-2'>
        <h3 className='text-purple-900 text-[20px]'><ion-icon name="call-outline"></ion-icon></h3>
        <h3>08145950267</h3>
      </div>
     </div>
     <div className='flex gap-2'>
       <a href="https://www.facebook.com/roimot.yakub" className='border-2 border-purple-900
         text-purple-900 text-center py-2 text-[20px]   rounded-2xl w-[40px] h-[40px]  '>
            <ion-icon name="logo-facebook"></ion-icon>
        </a>
        <br />
        <a href="https://www.facebook.come/roimot.yakub" className='border-2 border-purple-900
         text-purple-900 text-center py-2 text-[20px]   rounded-2xl w-[40px] h-[40px]  '>
            <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <br />
       <a href="https://www.facebook.come/roimot.yakub" className='border-2 border-purple-900
         text-purple-900 text-center py-2 text-[20px]   rounded-2xl w-[40px] h-[40px]  '>
            <ion-icon name="logo-twitter"></ion-icon>
        </a>
        <br />
        <a href="https://www.facebook.come/roimot.yakub" className='border-2 border-purple-900
         text-purple-900 text-center py-2 text-[20px]   rounded-2xl w-[40px] h-[40px]  '>
            <ion-icon name="logo-linkedin"></ion-icon>
        </a>
     </div>

    </div>

    {/* user info section */}
    <div className='my-5 py-2 text-start px-2 lg:w-[400px] md:w-[400px] w-[350px] mx-2 h-contain border-2 rounded-2xl border-purple-900'>
         <h3>Name</h3>
        <input type="text" name="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter your email' id="" className=' px-2 w-[300px] my-2 outline-none  h-[40px] rounded-2xl text-white bg-purple-900' />
       
        <h3 >Email</h3>
        <input type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter your email' id="" className=' px-2 w-[300px] my-2 outline-none  h-[40px] rounded-2xl text-white bg-purple-900' />
        
        <h3>Enter your  Subject</h3>
       <input type="text" onChange={(e)=>{setSubect(e.target.value)}} className='w-full h-[40px] rounded-2xl  bg-purple-900 px-2 outline-none my-2 ' name='subject' placeholder='Enter your Subject' />
        
        <h3>Enter your  Message</h3>
     <textarea onChange={(e)=>{setMessage(e.target.value)}}  className='w-full h-contain rounded-2xl  bg-purple-900  px-2 outline-none my-2 ' name='message' placeholder='Enter your message'>

     </textarea>
        <button className='bg-white text-black w-[120px] h-[40px] rounded-2xl border-2 border-black my-2 mx-20 outline-none' onClick={handleSubmit}>Submit</button>
    </div>


    </div>
    </Comeinword>
    </div>
    )}

export default Contact