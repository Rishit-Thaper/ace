import React from 'react'
import { Link } from 'react-router-dom'
import Scroll from '../Components/Scroll'
import '../assessts/courses.css'
import iic from '../images/iic.png'
export default function Iic() {
  return (
    <div className='nptel'>
      <div className="div1">
      <h1>Institution Innovation Council</h1>
      <div className="aboutNptel">
      <ul>
        <li>ACE's collaboration with IIC provides <b>numerous opportunities to promote innovation and entrepreneurship among our students and faculty members.</b> </li>
        <li>Gain access to a wide range of resources to support innovation and entrepreneurship, including mentorship, funding, and networking opportunities through our collaboration with IIC.</li>
        <li>Develop your entrepreneurial skills by participating in workshops and training programs on entrepreneurship and innovation, organized by our college with the support of IIC.</li>
        <li>Receive incubation and acceleration support for your startups, including access to office space and legal/financial resources, through our collaboration with IIC.</li>
        <li>Opportunities for visibility and recognition through participation in events and competitions organized by IIC.</li>
      </ul>
      <img src={iic} alt="" />
      </div>
      </div>
      <div className="mission-vision">
        <div className="vision">
          <h4>Vision:</h4><hr />
          <ol>
            <li>Create a dynamic and thriving ecosystem for entrepreneurship within higher education institutions in India.</li>
            <li>Promote economic growth by supporting innovative and successful startups.</li>
            <li>Fostering creative thinking and entrepreneurial skills among students.</li>
            <li>Build a strong network of stakeholders, including investors, industry experts, and entrepreneurs, to support the growth of startups.</li>
          </ol>
        </div>
        <div className="mission">
          <h4>Mission:</h4><hr />
          <ol>
  <li>  Provide a platform for innovation and entrepreneurship.</li>
  <li>Foster an entrepreneurial culture within higher education institutions by organizing events, workshops, and training programs.</li>
  <li>Support startups through funding, mentorship, and resources.</li>
  <li>Creating a supportive startup ecosystem through stakeholder networking and collaboration</li>
</ol>
        </div>
      </div>
      <div className="contactNptel">
        <Link to="https://www.ambalacollege.com/wp-content/uploads/2022/11/EstablismentCertificate.pdf"><button>Click here to view the Establishment Certificate</button></Link>
      </div>
      <Scroll/>
    </div>
  )
}
