import React from 'react';
import { Link } from 'react-router-dom';
import '../assessts/department.css';
import me from '../images/ME_DEP.png'
import cse from '../images/CSE_DEP.png'
import app from '../images/APPL_DEP.png'
import bt from '../images/BT_DEP.png'
import ece from '../images/ECE_DEP.png'
import auto from '../images/AUTO_DEP.png'
import aiml from '../images/AIML_dEP.png'

function Departments() {
  return (
    <>
      <section className='departments'>
        <div className="department-overlay">
          <h1>Discover Our Departments: <br/>Where Passion Meets Excellence</h1>
          <Link></Link>
        </div>
        
        <div className="department_chart">
          
          <div className="dep">
            
              <img src={app} alt="" />
            
            <div className="dep_about">
              <h1>Applied Science & Humanities</h1>
              <p>The Applied Science and Humanities department provides students with a solid foundation in the basic sciences, including physics, chemistry, and mathematics. The department also offers courses in communication skills, ethics, and other humanities subjects. The interdisciplinary nature of this department helps students develop a broad understanding of the scientific and social issues that impact modern society.</p>
              <Link to="/departments/apd">Explore More</Link>

            </div>
          
          </div>
          
          <div className="dep dep1">
          
            <div className="dep_about">
              <h1>Computer Science & Engineering</h1>
              <p>The CSE department is dedicated to providing students with a comprehensive education in the field of computer science and engineering. The department offers a range of courses that cover topics such as programming, algorithms, data structures, computer architecture, operating systems, and more. Students will have access to state-of-the-art laboratories and facilities, which will enable them to gain practical skills and experience.</p>
              <Link to="/departments/cse">Explore More</Link>

            </div>
          
              <img src={cse} alt="" />
          
          </div>
          
          <div className="dep">
          
              <img src={me} alt="" />
          
            <div className="dep_about">
              <h1>Mechanical Engineering</h1>
              <p>The ME department focuses on teaching students the principles of mechanical engineering, including thermodynamics, mechanics, design, and manufacturing. The department offers courses that are designed to prepare students for a career in the engineering industry. Students will have access to modern labs and equipment, allowing them to gain practical experience in the field.</p>
              <Link to="/departments/me">Explore More</Link>

            </div>
          
          </div>
          
          <div className="dep dep1">
          
            <div className="dep_about">
              <h1>Electronics & Communication Engineering</h1>
              <p>The ECE department is dedicated to providing students with a comprehensive education in the field of electronics and communication engineering. The department offers courses that cover topics such as electronic circuits, communication systems, digital signal processing, and more. Students will have access to modern labs and equipment, allowing them to gain practical experience in the field.</p>
              <Link to="/departments/ece">Explore More</Link>

            </div>
          
              <img src={ece} alt="" />
          
          </div>
          
          <div className="dep">
          
              <img src={bt} alt="" />
          
            <div className="dep_about">
              <h1>Biotechnology Engineering</h1>
              <p>The BT department is focused on teaching students the principles of biotechnology, including genetic engineering, bioprocessing, and bioinformatics. The department offers courses that are designed to prepare students for a career in the biotechnology industry. Students will have access to modern labs and equipment, allowing them to gain practical experience in the field.</p>
              <Link to="/departments/bt">Explore More</Link>

            </div>
          
          </div>
          
          <div className="dep dep1">
          
            <div className="dep_about">
                <h1>Artificial Intelligence & Machine Learning</h1>
                <p>
                The AIML department is focused on preparing students for the rapidly growing field of artificial intelligence and machine learning. The department offers courses that cover topics such as data mining, natural language processing, computer vision, and deep learning. Students will have access to cutting-edge tools and technologies, enabling them to gain hands-on experience with AI and ML applications.</p>
                <Link to="/departments/aiml">Explore More</Link>

            </div>

              <img src={aiml} alt="" />
          
          </div>

          <div className="dep">

              <img src={auto} alt="" />

            <div className="dep_about">
              <h1>Automation & Robotics(ME)</h1>
              <p>The Automation and Robotics department is dedicated to teaching students the principles of automation and robotics, including control systems, machine vision, and sensor technology. The department offers courses that are designed to prepare students for a career in the automation and robotics industry. Students will have access to modern labs and equipment, allowing them to gain practical experience in the field.</p>
              <Link to="/departments/auto-robo">Explore More</Link>
            </div>

          </div>
        </div>
        <p className='summary'>We are proud of our diverse faculty and student body. Our focus on innovation, entrepreneurship, and hands-on learning has made our graduates highly sought after by top organizations around the globe.</p>
      </section>
    </>
    )
}

export default Departments;