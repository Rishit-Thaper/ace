import React, {useState} from 'react';
import '../assessts/navbar.css';
import ACE from '../images/ACE.png'
import { Link } from 'react-router-dom';

export default function Navbar() {
  const[showNav, setShowNav] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);
  const [showDropdown5, setShowDropdown5] = useState(false);
  const [showDropdown6, setShowDropdown6] = useState(false);

  const [hoverDropdown1, setHoverDropdown1] = useState(false);
  const [hoverDropdown2, setHoverDropdown2] = useState(false);
  const [hoverDropdown3, setHoverDropdown3] = useState(false);
  const [hoverDropdown4, setHoverDropdown4] = useState(false);
  const [hoverDropdown5, setHoverDropdown5] = useState(false);
  const [hoverDropdown6, setHoverDropdown6] = useState(false);

  const handleLinkClick = () => {
    setShowNav(false);
  }
  
  const handleMouseEnterDropdown1 = () => {
    setHoverDropdown1(true);
  };
  const handleMouseLeaveDropdown1 = () => {
    setHoverDropdown1(false);
  };
  const handleMouseEnterDropdown2 = () => {
    setHoverDropdown2(true);
  };

  const handleMouseLeaveDropdown2= () => {
    setHoverDropdown2(false);
  };
  const handleMouseEnterDropdown3 = () => {
    setHoverDropdown3(true);
  };

  const handleMouseLeaveDropdown3 = () => {
    setHoverDropdown3(false);
  };
  const handleMouseEnterDropdown4 = () => {
    setHoverDropdown4(true);
  };

  const handleMouseLeaveDropdown4 = () => {
    setHoverDropdown4(false);
  };
  const handleMouseEnterDropdown5 = () => {
    setHoverDropdown5(true);
  };

  const handleMouseLeaveDropdown5 = () => {
    setHoverDropdown5(false);
  };
    const handleMouseEnterDropdown6 = () => {
    setHoverDropdown6(true);
  };

  const handleMouseLeaveDropdown6 = () => {
    setHoverDropdown6(false);
  };

  const handleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
    setShowDropdown2(false);
    setShowDropdown3(false);
    setShowDropdown4(false);
    setShowDropdown5(false);
    setShowDropdown6(false);
  };
// ajsghasghgsagsbsmbcnsdbcnsdbm
  const handleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
    setShowDropdown1(false);
    setShowDropdown3(false);
    setShowDropdown4(false);
    setShowDropdown5(false);
    setShowDropdown6(false);
  };

  const handleDropdown3 = () => {
    setShowDropdown3(!showDropdown3);
    setShowDropdown1(false);
    setShowDropdown2(false);
    setShowDropdown4(false);
    setShowDropdown5(false);
    setShowDropdown6(false);
  };

  const handleDropdown4 = () => {
    setShowDropdown4(!showDropdown4);
    setShowDropdown1(false);
    setShowDropdown2(false);
    setShowDropdown3(false);
    setShowDropdown5(false);
    setShowDropdown6(false);
  };

  const handleDropdown5 = () => {
    setShowDropdown5(!showDropdown5);
    setShowDropdown1(false);
    setShowDropdown2(false);
    setShowDropdown3(false);
    setShowDropdown4(false);
    setShowDropdown6(false);
  };
  const handleDropdown6 = () => {
    setShowDropdown6(!showDropdown6);
    setShowDropdown1(false);
    setShowDropdown2(false);
    setShowDropdown3(false);
    setShowDropdown4(false);
    setShowDropdown5(false);
  };
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

            <div className="dropdown" onMouseEnter={handleMouseEnterDropdown6} onMouseLeave={handleMouseLeaveDropdown6}>
              
              <button onClick={handleDropdown6} className='dropbtn'>Quick Links <span><i class="fa-solid fa-caret-down"></i></span></button>
              
              {showDropdown6 || hoverDropdown6 ? (<div className="dropdown-content" onMouseEnter={handleMouseEnterDropdown6} onMouseLeave={handleMouseLeaveDropdown6}>
              
                <Link to = "/">Academic Calender</Link>
                <Link to = "/">Careers</Link>
                <Link to = "/">Blog</Link>
                <Link to="/">Download Brochure</Link>
                <Link to="/">Admission Queries</Link>
              
              </div>):null}
            </div>
          </div>
      </div>
      <div className="nav">
        <div className="logo">
            
        <Link to='/'><img src={ACE} alt="logo"/></Link>

            <div className="apply">
              <Link to='/query'><button><i class="fa-regular fa-hand-pointer"></i> Apply Now</button></Link>
            </div>

            <div className="hamburger">
              <Link onClick={() => setShowNav(!showNav)}><i class="fa-solid fa-bars"></i></Link>
            </div>

        </div>
        <div className={showNav ? "navLinks mobile-menu-links" : "navLinks"} id='navLinks'>
            
            <div className="dropdown1"onMouseEnter={handleMouseEnterDropdown1} onMouseLeave={handleMouseLeaveDropdown1}>
              
              <button onClick={handleDropdown1}>About Us<span><i class="fa-solid fa-caret-down"></i></span></button>
              
              {showDropdown1 || hoverDropdown1 ? (<div className="dropdown-content1" onMouseEnter={handleMouseEnterDropdown1} onMouseLeave={handleMouseLeaveDropdown1}>
                  <Link onClick={handleLinkClick} to = "/about">Mission and Vision</Link>
                  <Link onClick={handleLinkClick} to = "/management">Management</Link>
                  <Link onClick={handleLinkClick} to = "/facilities">Our Facilities</Link>
                  <Link onClick={handleLinkClick} to = "/about">Approval & Affliation</Link>
                  <Link onClick={handleLinkClick} to="/about">Awards & Ranking</Link>
                  <Link onClick={handleLinkClick} to="/about">Social Responsibility </Link>
              
                </div>): null}
            </div>

            <div className="dropdown1" onMouseEnter={handleMouseEnterDropdown2} onMouseLeave={handleMouseLeaveDropdown2}>

              <button onClick={handleDropdown2} className='dropbtn'>Admissions<span><i class="fa-solid fa-caret-down"></i></span></button>

              {showDropdown2 || hoverDropdown2 ? (<div className="dropdown-content1" onMouseEnter={handleMouseEnterDropdown2} onMouseLeave={handleMouseLeaveDropdown2}>
                  <Link onClick={handleLinkClick} to = "/admissions">Admissions 2023-24</Link>
                  <Link onClick={handleLinkClick} to = "/departments">Find your Program</Link>
                  <Link onClick={handleLinkClick} to = "/">Download Brochure</Link>
                  <Link onClick={handleLinkClick} to = "https://www.ambalacollege.com/wp-content/uploads/2018/06/fee.pdf">FEE DEposit Form</Link>
                  <Link onClick={handleLinkClick} to = "/admissions">Scholarship</Link>
                  <Link onClick={handleLinkClick} to = "https://www.ambalacollege.com/wp-content/uploads/2018/06/BtechAdmissionForm.pdf">Admission Form</Link>
                  <Link onClick={handleLinkClick} to = "/contact">Contact us</Link>

                </div>):null}
            </div>

            <div className="dropdown1"onMouseEnter={handleMouseEnterDropdown3} onMouseLeave={handleMouseLeaveDropdown3}>

              <button onClick={handleDropdown3} className='dropbtn'>Academics<span><i class="fa-solid fa-caret-down"></i></span></button>
              {showDropdown3 || hoverDropdown3 ? (<div className="dropdown-content1" onMouseEnter={handleMouseEnterDropdown3} onMouseLeave={handleMouseLeaveDropdown3}>
                  <Link onClick={handleLinkClick} to = "/departments">Departments</Link>
                  <Link onClick={handleLinkClick} to = "/nptel">NPTEL</Link>
                  <Link onClick={handleLinkClick} to = "/iic">Institution Innovation Council</Link>
                  <Link onClick={handleLinkClick} to = "/ace-sdp">ACE Skill Development Program</Link>
                  <Link onClick={handleLinkClick} to = "https://www.epicambala.com/">Entrepreneurship Promotion and Incubation Council</Link>
                  <Link onClick={handleLinkClick} to = "https://www.ambalacollege.com/wp-content/uploads/2021/11/academic-calander-1.pdf">Academic Calendar</Link>
                  <Link onClick={handleLinkClick} to = "">Date Sheet</Link>
                  <Link onClick={handleLinkClick} to = "https://www.ambalacollege.com/wp-content/uploads/2021/06/Website_Emerging_Area_Document1.pdf">Subject Specialisation</Link>
                  <Link onClick={handleLinkClick} to = "https://www.ambalacollege.com/wp-content/uploads/2021/03/Examination-Guidelines.pdf">Exam Guidelines</Link>
                </div>):null}

            </div>
            <div className="dropdown1"onMouseEnter={handleMouseEnterDropdown4} onMouseLeave={handleMouseLeaveDropdown4}>

              <button onClick={handleDropdown4} className='dropbtn'>Life @ ACE<span><i class="fa-solid fa-caret-down"></i></span></button>
              {showDropdown4 || hoverDropdown4 ? (<div className="dropdown-content1" onMouseEnter={handleMouseEnterDropdown4} onMouseLeave={handleMouseLeaveDropdown4}>
                  <Link onClick={handleLinkClick} to = "/societies">Our Societies</Link>
                  <Link onClick={handleLinkClick} to = "/events">Co-curricular Activities</Link>
                  <Link onClick={handleLinkClick} to = "/sports">Sports Activities</Link>
                  <Link onClick={handleLinkClick} to = "/photo-gallery">Stories of ACE</Link>
                  <Link onClick={handleLinkClick} to = "/programs">Faculty & Student Development Program</Link>
                </div>):null}
            </div>

            <div className="dropdown1"onMouseEnter={handleMouseEnterDropdown5} onMouseLeave={handleMouseLeaveDropdown5}>

              <button onClick={handleDropdown5} className='dropbtn'>Placements<span><i class="fa-solid fa-caret-down"></i></span></button>
              {showDropdown5 || hoverDropdown5 ? (<div className="dropdown-content1" onMouseEnter={handleMouseEnterDropdown5} onMouseLeave={handleMouseLeaveDropdown5}>
                  <Link onClick={handleLinkClick} to = "/placements">Placements</Link>
                  <Link onClick={handleLinkClick} to = "/our-collaborations">Industrial Collaborations</Link>
                  <Link onClick={handleLinkClick} to = "/ace-in-news">PLacements News at a Glance</Link>
                </div>):null}
            </div>
        </div>
      </div>
    </div>
  )
}
