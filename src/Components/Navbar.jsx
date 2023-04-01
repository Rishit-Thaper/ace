import React, {useState} from 'react';
import '../assessts/navbar.css';
import ACE from '../images/ACE.png'
import { Link } from 'react-router-dom';

export default function Navbar() {
  const[showNav, setShowNav] = useState(false);
  return (
    <div className='main-nav'>
      <div className="social">
          <div className="broc">
            <Link to="/"><button>Download Brochure</button></Link>
            <span>|</span>
            <Link to='/'><button> Campus Tour</button></Link>
          </div>
          <div className="socialLinks">
            <Link className='link' to='/'><i class="fa-brands fa-facebook-f"></i></Link>
            <Link className='link' to='/'><i class="fa-brands fa-instagram"></i></Link>
            <Link className='link' to='/'><i class="fa-brands fa-linkedin"></i></Link>
            <Link className='link' to='/'><i class="fa-solid fa-phone"></i></Link>
            <div className="dropdown">
              <button className='dropbtn'>Quick Links <span><i class="fa-solid fa-caret-down"></i></span></button>
              <div class="dropdown-content">
                <Link to = "/">Academic Calender</Link>
                <Link to = "/">Careers</Link>
                <Link to = "/">Blog</Link>
                <Link to="/">Download Brochure</Link>
                <Link to="/">Admission Queries</Link>
              </div>
            </div>
          </div>
      </div>
      <div className="nav">
        <div className="logo">
            <img src={ACE} alt="logo"/>
            <div className="apply">
              <Link><button><i class="fa-regular fa-hand-pointer"></i> Apply Now</button></Link>
            </div>
            <div className="hamburger">
              <Link onClick={() => setShowNav(!showNav)}><i class="fa-solid fa-bars"></i></Link>
            </div>
            {/* <span>|</span>
            <h1>Ambala College of Engineering and Applied Research</h1> */}
        </div>
        <div className={showNav ? "navLinks mobile-menu-links" : "navLinks"} id='navLinks'>
            <div className="dropdown1">
              <button>About Us<span><i class="fa-solid fa-caret-down"></i></span></button>
                <div class="dropdown-content1">
                  <Link to = "/about">Mission and Vision</Link>
                  <Link to = "/management">Management</Link>
                  <Link to = "/about">Our Facilities</Link>
                  <Link to = "/about">Approval & Affliation</Link>
                  <Link to="/about">Awards & Ranking</Link>
                  <Link to="/about">Social Responsibility </Link>

                </div>
            </div>
            <div className="dropdown1">
              <button className='dropbtn'>Admissions<span><i class="fa-solid fa-caret-down"></i></span></button>
                <div class="dropdown-content1">
                  <Link to = "/admissions">Admissions 2023-24</Link>
                  <Link to = "/departments">Find your Program</Link>
                  <Link to = "/">Download Brochure</Link>
                  <Link to = "/admissions">FEE STructure</Link>
                  <Link to = "/admissions">Scholarship</Link>
                  <Link to = "/admissions">Admission Procedure</Link>
                  <Link to = "/">Admission Form</Link>
                  <Link to = "/admissions">How to Apply</Link>
                  <Link to = "/contact">Contact us</Link>
                </div>
            </div>
            <div className="dropdown1">
              <button className='dropbtn'>Academics<span><i class="fa-solid fa-caret-down"></i></span></button>
                <div class="dropdown-content1">
                  <Link to = "/departments">Departments</Link>
                  <Link to = "/our-collaborations">NPTEL</Link>
                  <Link to = "/programs">ACE Skill Development Program</Link>
                  <Link to = "/EPIC">Entrepreneurship Promotion and Incubation Council</Link>
                  <Link to = "/">Academic Calendar</Link>
                  <Link to = "/">Date Sheet</Link>
                  <Link to = "/departments">Subject Specialisation</Link>
                  <Link to = "/">Exam Guidelines</Link>
                </div>
            </div>
            <div className="dropdown1">
              <button className='dropbtn'>Beyond ACADemICS<span><i class="fa-solid fa-caret-down"></i></span></button>
                <div class="dropdown-content1">
                  <Link to = "/societies">Our Societies</Link>
                  <Link to = "/events">Co-curricular Activities</Link>
                  <Link to = "/sports">Sports Activities</Link>
                  <Link to = "/photo-gallery">Photo Gallery</Link>
                  <Link to = "/alumni-meets">Alumni Meets</Link>
                  <Link to = "/conovocations">Convocation</Link>
                  <Link to = "/programs">Faculty & Student Development Program</Link>
                  <Link to = "/ace-in-news">ACE in News</Link>
                </div>
            </div>
            <div className="dropdown1">
              <button className='dropbtn'>Placements<span><i class="fa-solid fa-caret-down"></i></span></button>
                <div class="dropdown-content1">
                  <Link to = "/placements">Placements</Link>
                  <Link to = "/placements">Our Recruiters</Link>
                  <Link to = "/placements">Training & Placement Officer</Link>
                  <Link to = "/our-collaborations">Industrial Collaborations</Link>
                  <Link to = "/ace-in-news">PLacements News at a Glance</Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
