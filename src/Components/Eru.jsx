import {React, useEffect} from 'react'
import '../assessts/societies.css';
import bt from '../images/APPL_DEP.png'
import Scroll from './Scroll';

export default function Eru() {
  useEffect(() => {
    document.title = 'ACE | Societies';
  }, []
  );
  return (
    <div className='mainSociety'>
      <Scroll/>
    <div className='aboutSociety'>
      <h1>Erudition Society</h1>
      <h2>Department of Applied Science Department</h2>
      <div className="society">
      <ul>
  <li>The Erudition Society aims to foster a culture of continuous learning and academic excellence among students in the College of Applied Science departments.</li>
  <li>It organizes regular workshops, seminars, and guest lectures by subject matter experts to provide additional learning opportunities beyond the classroom.</li>
  <li>The society facilitates peer-to-peer learning and study groups, promoting knowledge sharing and collaborative problem-solving.</li>
  <li>It organizes skill development programs and training sessions to enhance students' practical and professional skills.</li>
  <li>It encourages interdisciplinary interactions and collaborations between students from different departments.</li>
  <li>The society organizes academic competitions, quizzes, and debates to encourage healthy competition and intellectual growth.</li>
  <li>Erudition Society promotes academic integrity and ethical conduct, fostering a strong academic culture.</li>
</ul>

        <img src={bt} alt="" />
        </div>
      </div>
    </div>
  )
}
