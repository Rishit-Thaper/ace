import {React} from 'react';
import {FaUserGraduate, FaHandshake} from "react-icons/fa"
import {TbBulb} from "react-icons/tb";
import {Fade, Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Query from '../Components/Query';
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from 'react-icons/md'
import bt from '../images/BT.jpg';
import campus from '../images/campus.jpg';
import me from '../images/ME.jpg';
import ece from '../images/ece.jpg';
import srsmt from '../images/srsmt.webp'
import {GiArchiveResearch, GiBrain} from "react-icons/gi"
import {ImBooks} from "react-icons/im"
import Carousel from '../Components/Caraousel';
import photo from '../images/cover01.jpg';
import '../assessts/admission.css';
function Admissions() {
  const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px',
    fontSize:"2rem"
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><i><MdOutlineKeyboardArrowLeft/></i></button>,
    nextArrow: <button style={{ ...buttonStyle }}><i><MdOutlineKeyboardArrowRight/></i></button>
}

  return (
    <>
    <section className='parent'>
      <div className="child">
      <div className="slide-container">
        <Fade duration={2000} {...properties}>
          <div className="fade-each"><img src={campus} alt="" /></div>
          <div className="fade-each"><img src={srsmt} alt="" /></div>
          <div className="fade-each"><img src={bt} alt="" /></div>
          <div className="fade-each"><img src={me} alt="" /></div>
          <div className="fade-each"><img src={ece} alt="" /></div>
        </Fade>
    </div>
        <div className="admit">
          <div  className="collegeTag">
              <h1>Engineering your future, today!</h1>
              <p>Looking to pursue a career in engineering? Ambala College of Engineering offers quality education, expert faculty, state-of-the-art facilities, and strong industry partnerships to produce skilled engineers. Enroll now to pursue a career in engineering and engineer a better tomorrow.</p>
          </div>
            <img src={photo} alt="clgphoto" className='clgPhoto'/>
        </div>
        <div className="scholarship">
          <div className="details">
            <h2>Unleash your potential with SRSMT Scholarship Test- paving the way for the future engineers!</h2>
            <p>The Sri Ram Sawarop Memorial Trust Scholarship Test is exclusively for 12th passouts aspiring to pursue engineering. It identifies and rewards exceptional academic excellence and dedication, and provides funding opportunities for their engineering education.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfdAbk5_in7InfNYRe90b9H4QqTfUx0-Qzbo4lVnN1WanWZRQ/viewform">Click here to register for SRSMT-2023</a>
            <h3>Scholarship Criteria <br /><span style={{fontSize:"1.5rem"}}>If scored:</span></h3>
            <ul>
              <li>More than 90% : 100% Scholarship</li>
              <li>80-90% : 90% Scholarship</li>
              <li>70-80% : 80% Scholarship</li>
              <li>60-70% : 70% Scholarship</li>
              <li>50-60% : 60% Scholarship</li>
            </ul>
          </div>
        </div>
        <div className="chooseUs">
        <h1 className='chooseHead'>Why Choose Us?</h1>
        <div className="reason-div">
          <div className="reason">
              <i><FaUserGraduate/></i>
              <h3>Great faculty for Exceptional Education</h3><hr />
              <p>The college provides exceptional education with passionate faculty, innovative teaching methods to prepare graduates for their careers.</p>
              
          </div>
          <div className="reason">
              <i><TbBulb/></i>
              <h3>Hands-on Experiential Learning</h3><hr />
              <p>Stresses practical experience, applying theory to real-world situations, boosting students' confidence and competence for future careers.</p>
              
          </div>
          <div className="reason">
              <i><FaHandshake/></i>
              <h3>Industry Tie-ups for Practical Learning</h3><hr />
              <p>Industry tie-ups provide practical learning, exposing students to real-world scenarios and best practices, equipping them for successful careers.</p>
          </div>
        </div>
        <div className="reason-div">
          <div className="reason">
              <i><GiArchiveResearch/></i>
              <h3>Research-oriented innovation.</h3><hr />
              <p>Students are prepared for success by providing the latest skills and knowledge and encouraging critical thinking and problem-solving.</p>
              
          </div>
          <div className="reason">
              <i><ImBooks/></i>
              <h3>Renowned for Top-notch Education</h3><hr />
              <p>We provide excellent education through experienced faculty, advanced resources, and a dedication to excellence, equipping students for success in their chosen fields.</p>
          </div>
          <div className="reason">
              <i><GiBrain/></i>
              <h3>Focused on Holistic Development</h3><hr />
              <p>We prioritize holistic student development, fostering growth through classroom and extracurricular activities, preparing students for success in all areas.</p>
          </div>
        </div>
      </div>
      </div>
      <div className="slide-container1">
      <h1 className='chooseHead'>Why Choose Us?</h1>
        <Slide {...properties}>
        <div className="reason each-fade">
              <i><FaUserGraduate/></i>
              <h3>Great faculty for Exceptional Education</h3><hr />
              <p>With committed staff and cutting-edge teaching techniques, the college offers great education that prepares graduates for successful professions.</p>
              
          </div>
          <div className="reason each-fade">
              <i><TbBulb/></i>
              <h3>Hands-on Experiential Learning</h3><hr />
              <p>Emphasises practical experience, putting theory into practise, and building students' competency for future employment.</p>
          </div>
          <div className="reason each-fade">
              <i><FaHandshake/></i>
              <h3>Industry Tie-ups for Practical Learning</h3><hr />
              <p>Industry tie-ups provide practical learning, exposing students to real-world scenarios and best practices, equipping them for successful careers.</p>
          </div>
      <div className="reason each-fade">
              <i><GiArchiveResearch/></i>
              <h3>Research-oriented innovation.</h3><hr />
              <p>By supplying students with the most up-to-date skills and knowledge and promoting critical thinking and problem-solving, students are prepared for success.</p>
              
          </div>
          <div className="reason each-fade">
              <i><ImBooks/></i>
              <h3>Renowned for Top-notch Education</h3><hr />
              <p>We provide excellent education through experienced faculty, advanced resources, and a dedication to excellence, equipping students for success in their chosen fields.</p>
          </div>
          <div className="reason each-fade">
              <i><GiBrain/></i>
              <h3>Focused on Holistic Development</h3><hr />
              <p>We prioritize holistic student development, fostering growth through classroom and extracurricular activities, preparing students for success in all areas.</p>
          </div>
        </Slide>
      </div>
      <div className='list01'>
        <span>Programs at ACE</span>
        <div className="program-list">
          <div className='proSublist'>
            <h2>Our B.Tech Programs:</h2>
            <ul>
              <li>Computer Science & Engineering</li>
              <li>Mechanical Engineering</li>
              <li>Electronics & Communication Engineering</li>
              <li>Bio-Technology Engineering</li>
            </ul>
          </div>
          <div className='proSublist'>
            <h2>Our Specialisation Programs:</h2>
            <ul>
              <li>Artificial Intelligence & Machine Learning Engineering</li>
              <li>Robotics & Automation Engineering</li>
            </ul>
          </div>
          <div className='proSublist'>
            <h2>Our Business Program:<sup>NEW!</sup></h2>
            <ul>
              <li>BBA- Bachelor of Business Administration</li>
            </ul>
          </div>
        </div>
        </div>
        <Carousel/>
        <Query/>
    </section>
    </>
  )
}

export default Admissions