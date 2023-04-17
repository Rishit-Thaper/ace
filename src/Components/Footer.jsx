import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <section className='footer'>
      <div className="links">
      <div className="programs">
          <h2>Programs</h2>
          <ul className='list'>
            <Link to="/departments"><li>BBA <sup>NEW!</sup></li></Link>
            <Link to="/departments"><li>Computer Science</li></Link>
            <Link to="/departments"><li>Electronics & Communication</li></Link>
            <Link to="/departments"><li>Bio-Technology</li></Link>
            <Link to="/departments"><li>Mechanical</li></Link>
            <h3>Specialization Programs</h3>
            <Link to="/departments"><li>Artificial & Machine Learning</li></Link>
            <Link to="/departments"><li>Automation & Robitics</li></Link>
          </ul>
        </div>
        <div className="quickLinks">
        <h2>Quick Links</h2>
          <ul className='list'>
            <li><a href="" download = "calender">Academic Calender</a></li>
            <Link to="/careers"><li>Careers</li></Link>
            <Link to="/blogs"><li>Blog</li></Link>
            <li><a href="" download = "brochure">Download Brochure</a></li>
            <Link to="/bank"><li>Bank Details</li></Link>
            <li><a href="" download = "fees">Fee Deposit Form</a></li>
            <Link to="/admissions"><li>Admission Queries</li></Link>
            <Link to="/contact"><li>Contact Us</li></Link>
          </ul>
        </div>
        <div className="usefulLinks">
        <h2>Useful Links</h2>
          <ul className='list'>
            <Link to="/student-grievence-redressal-form"><li>Student Grievance Redressal Committee</li></Link>
            <Link to="/rules-regulations"><li>College Rules & Regulations</li></Link>
            <li><a href="" download = "admission-form">Admission Form</a></li>
            <Link to="/photo-gallery"><li>Photo Gallery</li></Link>
            <Link to="/terms-and-conditions"><li>Privacy Policy</li></Link>
            <Link to="/terms-and-conditions"><li>Terms & Conditions</li></Link>
            <Link to="/management"><li>Management</li></Link>
            <h2 style={{paddingTop:'0.6rem', paddingBottom:'0.6rem'}}>Affiliations</h2>
            <Link to="/departments"><li>NAAC</li></Link>
            <Link to="/departments"><li>NIRF</li></Link>
            <Link to="/departments"><li>NATS</li></Link>
          </ul>
        </div>
        <div className="touchUs">
        <h2>GET IN TOUCH WITH US</h2>
          <ul className='list'>
            <li>Ambala College Of Engineering and Applied Research Devsthali,<br/>
                Ambala Cantt, Jagadhari Road, P.O. Sambhalkha<br/>
                Ambala,Haryana,India. Pin: 133101<br/></li>
            <h3>Admission Office Address :</h3>
            <li>Shop No. 19, Science Market, Opp. Hargolal Dharamshala, Ambala Cantt-133001</li> 
            <h3>Admission Help No: </h3>
            <li>+91-99960-31315</li>
            <li>+91-9996815503</li>
            <li>+91-9896266033</li>
            <li>+91-8000007983</li>
            <li>0171-2822002</li>
            <li>0171-2828416</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footerSocial">
        <h3>Connect with us</h3>
        <Link className='socialLink' to='/'><i class="fa-brands fa-facebook-f"></i></Link>
        <Link className='socialLink' to='/'><i class="fa-brands fa-instagram"></i></Link>
        <Link className='socialLink' to='/'><i class="fa-brands fa-linkedin"></i></Link>
        <Link className='socialLink' to='/'><i class="fa-solid fa-phone"></i></Link>
        <Link className='socialLink' to='/'><i class="fa-brands fa-youtube"></i></Link>
        <p style={{color:"white", paddingTop:"2rem"}}>©All rights reserved 2023</p>
      </div>
    </section>
  )
}