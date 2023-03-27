import {React,useEffect,useState} from 'react'
import '../assessts/home.css'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Carousel from '../Components/Caraousel';
import {SiOpenai} from "react-icons/si";
import {BsRobot} from "react-icons/bs";
import { FcBiotech,FcElectronics,FcCommandLine,FcEngineering,FcAutomatic } from "react-icons/fc";
export default function Home() {
  const[message, setMessage] = useState(0);
  const dataArray = [
    {
      Message: "Ambala College of Engineering and Applied Research (ACE) was founded by Dr. Jai Dev to provide higher and technical education opportunities to rural communities. The college is managed by the Shri Ram Swarup Memorial Trust and is affiliated with Kurukshetra University in Haryana, India. The aim of ACE is to provide a value-oriented education that develops competent, compassionate, and conscientious leaders. The founders recognized the importance of applied research at the B.Tech level for improving the quality of engineering education in India and established ACE to address this need.",
    },
    {
      Message:"At ACE, our mission is to empower students with the skills and knowledge required to bridge the gap between theory and practice. We promote a heuristic learning approach that encourages learning by doing. Our curriculum focuses on hands-on experience with the latest software and technical tools, enabling students to gain practical proficiency and stay updated with industry trends. We prioritize the development of both hard and soft skills, including communication, teamwork, and leadership, to prepare our students for success in today's competitive job market.",
    },
    {
      Message:"Our institution is dedicated to meeting international benchmarks in technical education and serving as a hub for technological advancement. We believe in empowering aspiring entrepreneurs through our incubation center, providing them with modern technological knowledge and emphasizing professional ethics and moral values. Our community of forward-thinking individuals is committed to driving innovation and progress in their respective fields while striving for excellence and creativity in everything we do.",
    }
  ]
  return(
    <>
    <div className='main'>
        <div className="overlay">
          <h1>We are engaged to give you a<br/>
          <span>GOOD FUTURE</span></h1>
          <h2>where Education is a passion, not a business</h2>
          <Link to='/'><button className='exp'>Explore</button></Link>
          <Link to='/'><button className='contact'>Contact Us</button></Link>
        </div>
    </div>
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
        <h2>Discover our B.Tech programs in</h2>
      </div>
      <div className="course-row">
        <div className="course">
          <i><FcCommandLine size={60}/></i>
          <h1>Computer Science Engg.</h1>
          <h2>Transforming ideas into technology</h2>
        </div>
        <div className="course">
          <i><FcAutomatic size={60}/></i>
          <h1>Mechanical Engineering</h1>
          <h2>Unleashing the Potential of Machines</h2>
        </div>
        <div className="course">
          <i><FcElectronics size={60}/></i>
          <h1>Electronics & Comm. Engg.</h1>
          <h2>Engineering the Future of Communication</h2>
        </div>
        <div className="course">
          <i><FcBiotech size={60}/></i>
          <h1>Biotech Engineering</h1>
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
          <h1>Artificial Intelligence and Machine Learning</h1>
          <h2>Powering the Future with Intelligent Systems</h2>
        </div>
        <div className="course">
          <i><BsRobot size={60}/></i>
          <h1>Robotics and Automation Engineering</h1>
          <h2>Building the Future with Automated Intelligence</h2>
        </div>
      </div>
    </section>
    <section className='aboutSection'>

<div className="about">
  <span>About ACE</span>
  <div className="buttons">
    <button className='hover-underline-animation' onClick={()=> setMessage(0)}>Our History</button>
    <button className='hover-underline-animation' onClick={()=> setMessage(1)}>Our Mission</button>
    <button className='hover-underline-animation' onClick={()=> setMessage(2)}>Our Vision</button>
  </div>
  <div className="message">
    <p>{dataArray[message].Message}</p>
  </div>
  <Link to='/about'><button className='know'>Know More</button></Link>
</div>
</section>
<section>
  <Carousel/>
</section>
    </>
  )
}
