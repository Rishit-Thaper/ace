import React from 'react';
import '../assessts/department.css';
import {SiOpenai} from "react-icons/si";
import {BsRobot} from "react-icons/bs";
import {GiMaterialsScience} from "react-icons/gi"
import { FcBiotech,FcElectronics,FcCommandLine,FcAutomatic } from "react-icons/fc";
import { Link } from 'react-router-dom';
function Departments() {
  return (
    <>
      <section className='departments'>
        <div className="department-overlay">
          <h1>Discover Our Departments: <br/>Where Passion Meets Excellence</h1>
          <Link></Link>
        </div>
        <div className="department-flex">
          <div className="department-info">
              <div className="dep">
                  <i><GiMaterialsScience/></i>
                  <Link to="/department/aps"><h3>Applied Science & Humanities</h3></Link>
              </div>
              <div className="dep">
                  <i><FcCommandLine/></i>
                  <Link to="/department/cse"><h3>Computer Science & Engineering</h3></Link>
              </div>
              <div className="dep">
                  <i><FcAutomatic/></i>
                  <Link to="/department/me"><h3>Mechanical Engineering</h3></Link>
              </div>
              <div className="dep">
                  <i><FcElectronics/></i>
                  <Link to="/department/ece"><h3>Electronics & Communication Engineering</h3></Link>
              </div>
            </div>
          <div className="department-info">
              <div className="dep">
                <i><FcBiotech/></i>
                <Link to="/department/bt"><h3>Biotech Engineering</h3></Link>
              </div>
              <div className="dep">
                <i><SiOpenai/></i>
                <Link to="/department/aiml"><h3>Artificial Intelligence & Machine Learning</h3></Link>
              </div>
              <div className="dep">
                <i><BsRobot/></i>
                <Link to="/department/auto-robo"><h3>Automation & Robotics Engineering</h3></Link>
              </div>
          </div>
        </div>


      </section>
    </>
    )
}

export default Departments;