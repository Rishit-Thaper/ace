import React from 'react'
import '../assessts/societies.css';
import iete from '../images/iete.png'
import Scroll from './Scroll';

export default function Iete() {
  return (
    <div className='mainSociety'>
    <div className='aboutSociety'>
      <Scroll/>
      <h1>IETE Student Forum</h1>
      <h2>Department of Electronics & Communication Engineering</h2>
      <div className="society">
      <ul>
         <li>The forum was initiated by the ECE Department in May 2010.</li>
         <li>Its aim is to strengthen program outcomes through various events and activities, including Engineers' Day, technical events, quizzes, and aptitude tests.</li>
         <li>The forum provides a platform to build leadership, teamwork, and interpersonal skills for students and faculty members.</li>
         <li>It encourages research activities and sharing of research findings in IETE journals.</li>
         <li>The society also organizes events and competitions to encourage innovation and creative thinking among its members.</li>
         <li>	The forum focuses on the development of both soft and hard skills.</li>
      </ul>
        <img src={iete} alt="" />
        </div>
      </div>
    </div>
  )
}
