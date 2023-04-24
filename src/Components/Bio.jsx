import React from 'react'
import '../assessts/societies.css'
import bt from '../images/BT_DEP.png'
import Scroll from './Scroll'
export default function Bio() {
  return (
    <div className='society'>
        <h1>Biochepron Society</h1>
        <h2>Department of Biotechnology Engineering</h2>
        <div className="aboutSociety">
            <Scroll/>
            <ul>
                <li>The Biochepron Society is a student-led organization within the Biotech Engineering Department.</li>
                <li>Its main objective is to promote interest and awareness in the field of biotechnology.</li>
                <li>The society aims to enhance the technical and soft skills of its members through various activities, such as workshops, seminars, and industry visits.</li>
                <li>It provides a platform for students to showcase their research and projects related to biotechnology.</li>
                <li>The society also organizes events and competitions to encourage innovation and creative thinking among its members.</li>
                <li>Additionally, the Biochepron Society collaborates with industry experts and academic professionals to offer opportunities for internships, research projects, and job placements in the biotechnology field.</li>
            </ul>

            <img src={bt} alt="" />
      </div>
        
      <div className="societyEvents">
            <h2>Event Organised by the Society:</h2>
            <ul>
                <li>Declamation

                </li>
            </ul>
        </div>
      </div>
  )
}
