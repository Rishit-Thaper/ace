import React from 'react'
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import {SiOpenai} from "react-icons/si";
import {BsRobot} from "react-icons/bs";
import { FcBiotech,FcElectronics,FcCommandLine,FcAutomatic } from "react-icons/fc";
function Course() {
  return (
    <section className='course-section'>
    <div className="courses">
      <h1><span> 
        <Typewriter
            options={{
              strings: ['Engineering', 'Empowering'],
              autoStart: true,
              loop: true,
          }}
        />
      </span> your future</h1>
      <div className="new-course">
        <h1>Launch your Business Career with Our New BBA Course</h1>
        <p>Our new BBA course is designed to provide students with the knowledge and skills they need to succeed in today's competitive business world. With a focus on practical learning and real-world experience, this program will equip you with the tools you need to launch a successful business career.</p>
        <h3>Ready to launch your business career?<br /> Apply for our BBA program today and take the first step towards achieving your goals!</h3>
      </div>
      <h2 id='head01'>Discover our B.Tech programs in</h2>
    </div>
    <div className="course-row">
      <div className="course">
        <i><FcCommandLine size={60}/></i>
        <Link to = "/departments/cse"><h1>Computer Science Engg.</h1></Link>
        <h2>Transforming ideas into technology</h2>
      </div>
      <div className="course">
        <i><FcAutomatic size={60}/></i>
        <Link to = "/departments/me"><h1>Mechanical Engineering</h1></Link>
        <h2>Unleashing the Potential of Machines</h2>
      </div>
      <div className="course">
        <i><FcElectronics size={60}/></i>
        <Link to="/departments/ece"><h1>Electronics & Comm. Engg.</h1></Link>
        <h2>Engineering the Future of Communication</h2>
      </div>
      <div className="course">
        <i><FcBiotech size={60}/></i>
        <Link to="/departments/bt"><h1>Biotech Engineering</h1></Link>
        <h2>Revolutionizing Life Sciences with Technology</h2>
      </div>
    </div>
    <div className='tagline'>
    <span>Specialize, Innovate & Excel</span>
    <h2>Explore Our Two Specialization Courses to Accelerate Your Career Growth</h2>
    </div>
    <div className="course-row">
      <div className="course">
        <i><SiOpenai size={60}/></i>
        <Link to="/departments/aiml"><h1>Artificial Intelligence and Machine Learning</h1></Link>
        <h2>Powering the Future with Intelligent Systems</h2>
      </div>
      <div className="course">
        <i><BsRobot size={60}/></i>
        <Link to="/departments/auto"><h1>Robotics and Automation Engineering</h1></Link>
        <h2>Building the Future with Automated Intelligence</h2>
      </div>
    </div>
  </section>
  )
}

export default Course