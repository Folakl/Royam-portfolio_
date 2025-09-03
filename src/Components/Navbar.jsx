import React from 'react'


const Navbar = ({ togglemenu, setTogglemenu, skillRef, aboutRef, projectRef,servicesRef, homeRef, TopRef,ContactRef}) => {
 const scrolltoHome =()=>{
  homeRef.current.scrollIntoView({behavior: "smooth"})
 }
   const scrolltoContact =()=>{
  ContactRef.current.scrollIntoView({behavior: "smooth"})
 }
 const scrolltoSkill =()=>{
  skillRef.current.scrollIntoView({behavior: "smooth"});
 };
 const scrolltoAbout = ()=>{
  aboutRef.current.scrollIntoView({behavior:"smooth"});
 }
 const scrolltoService = ()=>{
  servicesRef.current.scrollIntoView({behavior:"smooth"});
 }
 const scrolltoproject = ()=>{
  projectRef.current.scrollIntoView({behavior: "smooth"})
 }

  const handleClick = () => {
    setTogglemenu(!togglemenu);
  };

  return (
    <div ref={TopRef}>
      {/* Top Navbar */}
      <div className='font-bold text-white  text-[10px] items-center h-contain flex justify-between pl-3 pr-2 pt-5 pb-2'>
        <div>
          <h3 className='font-bold text-[15px]'>
           <ion-icon name="logo-web-component"></ion-icon>Royam
          </h3>
        </div>

        {/* Desktop Menu */}
        <div className='justify-center lg:flex md:flex hidden'>
          <ul className='flex '>
            <li className='cursor-pointer hover:animate-bounce  px-2' onClick={scrolltoHome} >Home</li>
            <li className='cursor-pointer hover:animate-bounce  px-2' onClick={scrolltoSkill} >Skill</li>
            <li className='cursor-pointer hover:animate-bounce  px-2' onClick={scrolltoAbout}>About</li>
            <li className='cursor-pointer hover:animate-bounce  px-2' onClick={scrolltoproject}>Projects</li>
            <li className='cursor-pointer hover:animate-bounce  px-2'>Faq</li>
            <li className='cursor-pointer hover:animate-bounce  px-2' onClick={scrolltoService}>Services</li>
          </ul>
        </div>

        {/* Desktop Contact & Mobile Menu Button */}
        <div>
          <button onClick={scrolltoContact} className='bg-purple-900  border-purple-500 border-2 outline-none w-[120px] h-[30px] hover:w-[130px] hover:h-[32px] rounded-full text-white lg:block md:block hidden'>
            Contact <span className='my-2'><ion-icon name="arrow-forward-outline"></ion-icon></span>
          </button>
          <h3 
            className='text-white font-bold lg:hidden md:hidden grid cursor-pointer'
            onClick={handleClick}
          >
            <ion-icon size="large" name="menu-outline"></ion-icon>
          </h3>
        </div>
      </div>

      {/* Mobile Overlay Menu */}

    </div>
  )
}

export default Navbar


