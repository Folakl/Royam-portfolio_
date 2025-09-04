
import React from 'react'
import profile from '../assets/headies.jpg'
import Comeupword from './Comeupword'

const About = ({ aboutRef }) => {
  return (
    <div className="text-center m-5 lg:p-10 md:gap-10 gap-0" ref={aboutRef}>
      

      <div className="lg:flex md:flex grid justify-between items-center gap-[120px]  ">
        {/* Profile with Glow */}
        <div className=" lg:grid md:grid hidden  ">
        

          {/* Profile Image */}
          <img
            src={profile}
            className="rounded-full top-10 w-[300px] h-[300px] "
            alt="profile"
          />
        </div>

        {/* About Text */}
        <div className="flex-1 ">
          <h3 className="font-bold text-[30px] text-start mb-5 ">Front End Developer</h3>
          <h3 className="text-[15px] text-start  leading-relaxed animate-pulse z-0">
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

