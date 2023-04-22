import React from 'react';
import '../assessts/courses.css';
import me from '../images/ME.jpg';
import meLab from '../images/AUTO_DEP.png'
import Scroll from './Scroll'
export default function Auto() {
  return (
    <div className='about_dep'>
      <h1>Department of Automation & Robotics</h1>
      <div className="dep_info">
        <Scroll/>
      <ul> 
        <li>The Department of Mechanical Engineering at Ambala College of Engineering and Applied Research was established in 2004.</li> 
        <li>The department is highly reputed for offering top-quality teaching and research opportunities.</li> 
        <li>The department has received recognition from independent and government bodies for its outstanding contributions to teaching and research activities.</li> 
        <li>The department offers B.Tech in Mechanical Engineering and consultancy services for local industries.</li> 
        <li>The department has a dedicated Centre for Research in Mechanical Engineering and Sciences (CRMS) that collaborates with the Ambala Scientific Instruments Association (ASIMA) for technical training and product development.</li> 
        <li>The department offers a dynamic learning environment for students with excellent laboratory facilities and a team of committed faculty members.</li> 
      </ul>
        
        <img src={meLab} alt="" />
      </div>
      <div className="lab_info">
        <img src={me} alt="" />
        <div className="dep_lab">
          <h2>Laboratries</h2>
          <ul>
            <li>Centralized Workshop</li>
            <li>Fluid Mechanics</li>
            <li>Strength of Material</li>
            <li>Thermodynamics</li>
            <li>Production Technology</li>
            <li>Heat and Mass Transfer</li>
            <li>Refrigeration and Air- Conditioning</li>
            <li>Kinematics & Dynamics of Machine</li>
            <li>Thermal Engineering</li>
            <li>CAD/CAM Lab</li>
            <li>Tribology and Mechanical Vibration</li>
            <li>Material Science Lab</li>
            <li>Measurement and Control Lab</li>
            <li>Centre for Research in Mechanical Sciences</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
