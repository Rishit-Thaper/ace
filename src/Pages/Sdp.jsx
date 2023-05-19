import {React, useEffect} from 'react'
import Scroll from '../Components/Scroll'
import '../assessts/courses.css'
import sdp from '../images/sdp.png'
export default function Sdp() {
  useEffect(() => {
    document.title = 'ACE | Skill Development Progran';
  }, []
  );
  return (
    <div className='nptel'>
      <div className="div1">
      <h1>ACE One Day Skill Development Program</h1>
      <div className="aboutNptel">
      <ul>
        <li>ACE One Day Skill Development Program is a unique initiative organized by Ambala College of Engineering.</li> 
        <li><b>The program aims to provide school students with exposure to new technologies and skills.</b></li> 
        <li>Students learn about tech <b> such as robotics, coding, and 3D printing from experts in the field.</b></li> 
        <li>The program includes hands-on activities and challenges designed to encourage students to apply what they have learned.</li> 
        <li>Participants will have the opportunity to Interact with faculty and students for career insights.</li> 
        <li>The program is free of charge, and ACE provides all the necessary equipment and materials for the workshops.</li> 
        <li>If you are interested in learning more about the ACE One Day Skill Development Program, please contact us for more information.</li> 
      </ul>
      <img src={sdp} alt="" />
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
      <Scroll/>
    </div>
  )
}
