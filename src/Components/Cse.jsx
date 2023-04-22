import React from 'react'
import '../assessts/courses.css';
import cse from '../images/college11.jpeg'
import cseLab from "../images/CSE_LAB.JPG"
import Scroll from './Scroll';
export default function Cse() {
  return (
    <div className='about_dep'>
      <h1>Department of Computer Science & Engineering</h1>
      <div className="dep_info">
    <Scroll/>
        
        <ul>
          <li>Our goal is to provide not only efficient and effective computer education but also to instill modern technical values in our students.</li>
          <li>We encourage and engage our students to automate different departments/sections of the Institute to make them more competent in today's world.</li>
          <li>The department has Air-Conditioned Labs, a centralized computer center, and an R&D Lab for staff.</li>
          <li>The labs are equipped with over 300 state-of-the-art Thin Clients and Stand-alone Computers.</li>
          <li>The labs offer ample work space and 24-hour internet access free of charge.</li>
          <li>The systems are on a LAN and run on the Linux Operating System (OS), which is one of the most widely used OS in the world.</li>
          <li>The computer-to-student ratio is better than 1:4.</li>
          <li>Wi-Fi internet access is available throughout the campus.</li>
        </ul>
        
        <img src={cse} alt="" />
      </div>
      <div className="lab_info">
        <img src={cseLab} alt="" />
        <div className="dep_lab">
          <h2>Laboratries</h2>
          <ul>
            <li>Database Systems Lab</li>
            <li>Programming Languages Lab</li>
            <li>Advanced Technologies Lab</li>
            <li>Computer Hardware Lab</li>
            <li>C Programming Lab</li>
            <li>Software Labs</li>
            <li>IBM Open Source Lab</li>
            <li>Projects Developments Lab</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
