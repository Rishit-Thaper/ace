import React from 'react'
import '../assessts/societies.css';
import Scroll from './Scroll';
import csi from '../images/csi.jpg'

export default function Csi() {
  return (
    <div className='mainSociety'>
      <Scroll/>
    <div className='aboutSociety'>
      <h1>Computer Society of India</h1>
      <h2>Department of Computer Science & Engineering</h2>
      <div className="society">
      <ul>
          <li>The CSI chapter in our CSE department aims to promote knowledge and understanding of computer science among students.</li>
          <li>It provides a platform for students to enhance their technical skills through workshops, seminars, and training sessions.</li>
          <li>The CSI organizes coding competitions to foster healthy competition and encourage innovation.</li>
          <li>Guest lectures and industry interactions are arranged to keep students updated with the latest trends in the field of computer science.</li>
          <li>The CSI facilitates networking opportunities by connecting students with professionals, alumni, and experts in the industry.</li>
          <li>The CSI supports and encourages participation in national and international conferences, workshops, and technical events.</li>
          <li>Members of the CSI have the opportunity to publish research papers and articles in reputed journals and magazines.</li>
      </ul>
        <img src={csi} alt="" />
        </div>
      </div>
    </div>
  )
}
