import React from 'react';
import '../assessts/courses.css';
import applied from '../images/APPLIED.jpeg'
export default function Applied() {;
  return (
    <div className='about_dep'>
      <h1>Department of Applied Science & Humanities</h1>
      <div className="dep_info">
        <ul>
          <li>The Department of Applied Sciences and Humanities at Ambala College of Engineering and Applied Research offers high-quality education in applied sciences and humanities to students of all disciplines.</li>
          <li>Applied sciences act as a link between fundamental sciences and engineering practices.</li>
          <li>The department aims to develop the full potential of students and provide them with the skills and qualifications needed to achieve their ambitions.</li>
          <li>The department is equipped with state-of-the-art equipment, including Physics and Chemistry laboratories and an English communication lab.</li>
          <li>The department teaches Bio technology and Environmental sciences to improve the environment for society.</li>
          <li>The curriculum also includes good management practices.</li>
          <li>The department offers a Personality Development Program (PDP) for all B.Tech students to enhance their professional skills and personality.</li>
          <li>The department's laboratories include Physics, Chemistry, and a Language Lab.</li>
        </ul>
        <img src={applied} alt="" />
      </div>
      <div className="lab_info">
        <div className="dep_lab">
          <h2>Laboratries</h2>
          <ul>
            <li>Physics Lab</li>
            <li>Chemistry Lab</li>
            <li>Language Lab</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
