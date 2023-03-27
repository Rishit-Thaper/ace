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
                <Link to = "/">Link 1</Link>
                <Link to = "/">Link 2</Link>
                <Link to = "/">Link 3</Link>
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
                  <Link to = "/">Link 1</Link>
                  <Link to = "/">Link 2</Link>
                  <Link to = "/">Link 3</Link>
                </div>
            </div>
            <div className="dropdown1">
              <button className='dropbtn'>Admissions<span><i class="fa-solid fa-caret-down"></i></span></button>
                <div class="dropdown-content1">
                  <Link to = "/">Link 1</Link>
                  <Link to = "/">Link 2</Link>
                  <Link to = "/">Link 3</Link>
                </div>
            </div>
            <div className="dropdown1">
              <button className='dropbtn'>Academics<span><i class="fa-solid fa-caret-down"></i></span></button>
                <div class="dropdown-content1">
                  <Link to = "/">Link 1</Link>
                  <Link to = "/">Link 2</Link>
                  <Link to = "/">Link 3</Link>
                </div>
            </div>
            <div className="dropdown1">
              <button className='dropbtn'>Beyond ACADemICS<span><i class="fa-solid fa-caret-down"></i></span></button>
                <div class="dropdown-content1">
                  <Link to = "/">Link 1</Link>
                  <Link to = "/">Link 2</Link>
                  <Link to = "/">Link 3</Link>
                </div>
            </div>
            <div className="dropdown1">
              <button className='dropbtn'>Placements<span><i class="fa-solid fa-caret-down"></i></span></button>
                <div class="dropdown-content1">
                  <Link to = "/">Link 1</Link>
                  <Link to = "/">Link 2</Link>
                  <Link to = "/">Link 3</Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
