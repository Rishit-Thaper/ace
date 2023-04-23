import React from 'react'
import { Link } from 'react-router-dom'
import Scroll from '../Components/Scroll'
import '../assessts/courses.css'
import iic from '../images/iic.png'
export default function Sdp() {
  return (
    <div className='nptel'>
      <div className="div1">
      <h1>Institution Innovation Council</h1>
      <div className="aboutNptel">
      <ul>
        <li>ACE One Day Skill Development Program is a unique initiative organized by Ambala College of Engineering.</li> 
        <li>The program aims to provide school students with exposure to new technologies and skills in a fun and interactive way.</li> 
        <li>Through this program, students can learn about topics such as robotics, coding, and 3D printing from experts in the field.</li> 
        <li>The program includes hands-on activities and challenges designed to encourage students to apply what they have learned.</li> 
        <li>Participants in the ACE One Day Skill Development Program will have the opportunity to Interact with faculty and students for career insights.</li> 
        <li>The program is free of charge, and ACE provides all the necessary equipment and materials for the workshops.</li> 
        <li>If you are interested in learning more about the ACE One Day Skill Development Program, please contact us for more information.</li> 
      </ul>
      <img src={iic} alt="" />
      </div>
      </div>
      <div className="mission-vision">
        <div className="vision">
          <h4>Vision:</h4><hr />
          <ol>
          <li>Foster innovation and technology in the community.</li>
  <li>Provide practical experience for students.</li>
  <li>Inspire and empower young minds in engineering.</li>
  <li>Establish ACE as a hub for innovation and entrepreneurship.</li>
  </ol>
        </div>
        <div className="mission">
          <h4>Mission:</h4><hr />
          <ol>
          <li>Promote interdisciplinary learning and collaboration.</li>
<li>Equip students with practical skills for the real world.</li>
<li>Provide a platform for showcasing talents.</li>
<li>Encourage social responsibility through technology use.</li></ol>
        </div>
      </div>
      <div className="contactNptel">
        <Link to="https://www.ambalacollege.com/wp-content/uploads/2022/11/EstablismentCertificate.pdf"><button>Click here to view the Establishment Certificate</button></Link>
      </div>
      <Scroll/>
    </div>
  )
}
