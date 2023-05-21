import {React, useEffect} from 'react'
import ece from '../images/ECE.jpg'
import eceLab from '../images/ECE_LAB.jpg'
import '../assessts/courses.css';

export default function Ece() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'ACE | Departments';
  }, []);

  return (
    <div className='about_dep'>
      <h1>Department of Electronics & Communication Engineering</h1>
      <div className="dep_info">
        
      <ul> 
        <li>The Department of Electronics and Communication Engineering at Ambala College of Engineering and Applied Research offers a UG program in Electronics and Communication Engineering.</li> 
        <li>The labs are well-equipped to provide hands-on experience to the students besides the regular curriculum.</li> 
        <li>The department has indigenously developed MEMS/Microelectronics R&D Lab, which is a unique feature in the region.</li> 
        <li>The department aims to produce highly-skilled, industry-ready engineers who can contribute directly to the design and development of electronics and communication-based systems.</li> 
        <li>To bridge the gap between industry and academia, the department started an Industry Resource Person (IRP) interaction program three years back.</li> <li>The department established the Centre for Research in Electronics Engineering (CREE) under a MOU with ASIMA to extend research activities.</li> 
      </ul>  
        <img src={ece} alt="" />
      </div>
      <div className="lab_info">
        <img src={eceLab} alt="" />
        <div className="dep_lab">
          <h2>Laboratries</h2>
          <ul>
            <li>Analog and Digital Communication</li>
            <li>Audio Visual Electronics</li>
            <li>Basic Electrical, Electronics, and Design</li>
            <li>Advance Digital Communication</li>
            <li>Digital Signal Processing and VLSI Design</li>
            <li>Electromechanical Energy Conversion</li>
            <li>Linear IC Application</li>
            <li>Microcontroller and Design Automation</li>
            <li>Microelectronics and MEMS R&D</li>
            <li>Antenna Design</li>
            <li>Wireless and Mobile Communication</li>
            <li>Analog Electronics</li>
            <li>Electronics Workshop</li>
            <li>Project Lab</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
