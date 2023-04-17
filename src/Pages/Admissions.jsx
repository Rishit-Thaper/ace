import {React, useEffect, useState} from 'react';
import {FaUserGraduate, FaHandshake} from "react-icons/fa"
import {TbBulb} from "react-icons/tb"
import Query from '../Components/Query';
import {GiArchiveResearch, GiBrain} from "react-icons/gi"
import {ImBooks} from "react-icons/im"
import Carousel from '../Components/Caraousel';
import photo from '../images/side.jpg';
import '../assessts/admission.css';
function Admissions() {

  return (
    <>
    <section className='parent'>
      <div className="child">
        <div className="admit">
          <div  className="collegeTag">
              <h1>Engineering your future, today!</h1>
              <p>Looking to pursue a career in engineering? Look no further than Ambala College of Engineering! Our esteemed institution has been
                 providing quality education and producing skilled engineers for years. With our state-of-the-art facilities and expert faculty, 
                 we ensure that every student receives the best education possible. Plus, our strong industry partnerships guarantee that you'll 
                 have plenty of opportunities for hands-on learning and real-world experience. Don't miss out on this chance to engineer a better 
                 tomorrow. Enroll at Ambala College of Engineering today!</p>
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
              <h3>Innovative & Research-Focused Ambiance</h3><hr />
              <p>We equip students with latest skills and knowledge, encouraging critical thinking and problem-solving for success in future endeavors.</p>
          </div>
          <div className="reason">
              <i><ImBooks/></i>
              <h3>Renowned for Top-notch Education</h3><hr />
              <p>The institution offers top-notch education with experienced faculty, advanced resources, and a commitment to excellence, preparing students for success in their fields.</p>
          </div>
          <div className="reason">
              <i><GiBrain/></i>
              <h3>Focused on Holistic Development</h3><hr />
              <p>We prioritize holistic student development, fostering growth through classroom and extracurricular activities, preparing students for success in all areas.</p>
          </div>
        </div>
      </div>
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