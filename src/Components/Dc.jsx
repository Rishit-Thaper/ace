import {React, useEffect} from 'react'
import '../assessts/societies.css';
import Scroll from './Scroll';
import me from '../images/ME.jpg'

export default function Dc() {
  useEffect(() => {
    document.title = 'ACE | Societies';
  }, []
  );
  return (
    <div className='mainSociety'>
    <div className='aboutSociety'>
      <Scroll/>
      <h1>Design Club</h1>
      <h2>Department of Mechanical Engineering</h2>
      <div className="society">
      <ul>
          <li>The club was initiated to provide practical skills training to students.</li>
          <li>Its aim is to foster creativity and technical skills in designing mechanical systems.</li>
          <li>The club provides a platform to showcase talents and expertise for students and faculty members.</li>
          <li>It encourages collaboration between students, faculty members, and industry experts to develop innovative ideas.</li>
          <li>The club offers opportunities for research and publication in the Mechanical Engineering Department's name.</li>
          <li>Regular workshops and seminars are organized to enhance knowledge and keep up with industry trends.</li>
          <li>The club conducts design competitions to promote healthy competition and inspire excellence.</li>
          <li>Members have access to state-of-the-art facilities and resources for hands-on learning experiences.</li>
          <li>Guest lectures by industry professionals are arranged to provide valuable insights and networking opportunities.</li>
      </ul>
        <img src={me} alt="" />
        </div>
      </div>
    </div>
  )
}
