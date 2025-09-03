
import React from 'react'
import profile from '../assets/headies.jpg'
import Comeupword from './Comeupword'

const About = ({ aboutRef }) => {
  return (
    <div className="text-center m-5 p-10" ref={aboutRef}>
      

      <div className="lg:flex md:flex grid justify-between items-center gap-[120px]  ">
        {/* Profile with Glow */}
        <div className=" lg:grid md:grid hidden  relative">
          {/* Glow wrapper */}
          <div className="absolute inset-0 top-10 flex items-center justify-center">
            <div className="w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle_at_center,_#1e3a8a,_#2563eb,_#38bdf8,_#60a5fa)] blur-3xl opacity-70"></div>
          </div>

          {/* Profile Image */}
          <img
            src={profile}
            className="relative rounded-full top-10 w-[300px] h-[300px] z-10"
            alt="profile"
          />
        </div>

        {/* About Text */}
        <div className="flex-1 ">
          <h3 className="font-bold text-[30px] text-start mb-5 ">Front End Developer</h3>
          <h3 className="text-[15px] text-start  leading-relaxed animate-pulse">
            Hi there! I’m a front-end developer passionate about creating clean,
            responsive, and user-friendly web experiences. I enjoy turning ideas
            into reality using HTML, CSS, JavaScript, React, and Tailwind CSS.
            I love solving challenges, optimizing web performance, and
            continuously improving my skills. Whether it’s building interactive
            UIs, exploring new technologies, or collaborating on exciting
            projects, I’m always eager to grow and deliver great results.
            I’m open to freelance projects, internships, and
            collaborations—let’s build something amazing together!
          </h3>
          <Comeupword>
                  <button className='w-[150px] h-[40px] font-bold bg-purple-900   hover:bg:[grey] rounded-md m-10' >
                  <a href="#portfolio" className='text-white '>View My Work</a>
                 </button>
          </Comeupword>
        </div>
      </div>
    </div>
  )
}

export default About

