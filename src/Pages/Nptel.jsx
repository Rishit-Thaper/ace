import React from 'react'
import Scroll from '../Components/Scroll'
import '../assessts/courses.css'
import nptel from '../images/nptel.png'
export default function Nptel() {
  return (
    <div className='nptel'>
      <div className="div1">
      <h1>National Programme on Technology Enhanced Learning</h1>
      <div className="aboutNptel">
      <ul>
        <li><b>Ambala College of Engineering and Applied Research is an NPTEL Local Chapter that encourages faculty members and students to take up online courses.</b></li>
        <li><b>Students who collect 18-20 credits can receive a degree with a specialization/minor degree in a specific field.</b> </li>
        <li>ACE provides specializations/minor degrees in several areas, including <b>Artificial Intelligence and Machine Learning, Cybersecurity, Data Science, and Robotics and Automation.</b></li>
        <li>The main objective of ACE to collaborate with NPTEL is providing: <b>Quality education, enhance engineering education, encourage online learning, engage with top faculty, improve employability, and credit transfer mechanism.</b></li>
      </ul>
      <img src={nptel} alt="" />
      </div>
      </div>
      <div className="mission-vision">
        <div className="vision">
          <h4>Vision:</h4><hr />
          <ol>
            <li>To create an online platform that provides quality education to anyone interested in learning from the IITs and other reputed institutions in India.</li>
            <li>Provide web and video courses in engineering, physical sciences, and management at undergraduate and postgraduate levels.</li>
            <li>To create an online repository of courses that reflects the curriculum content taught at IIT and IISc.</li>
            <li>To develop and implement innovative methods of teaching and learning that enhance the overall quality of engineering education in the country.</li>
          </ol>
        </div>
        <div className="mission">
          <h4>Mission:</h4><hr />
          <ol>
            <li>To enhance the quality of engineering education in the country through online multimedia courses.</li>
            <li>To create awareness among students about the latest trends and technologies in the field of engineering and physical sciences.</li>
            <li>To provide an opportunity for students to learn from the best professors in the country and improve their employability.</li>
            <li>To develop a repository of web-based learning resources in engineering, science, and humanities and social sciences subjects.</li>
          </ol>
        </div>
      </div>
      <div className="contactNptel">
        <b>For any query, Contact:</b>
        <p>SPOC</p>
        <p>Er. Rajwinder Kaur</p>
        <p>Assistant Professor, CSE</p>
        <p>Mobile: 94664-36642</p>
        <p>Email Id: ambalacollege2002@gmail.com</p>
      </div>
      <Scroll/>
    </div>
  )
}
