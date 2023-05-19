import {React, useEffect} from 'react'
import '../assessts/placement.css'
import CountUp from 'react-countup'
import {BiMailSend} from 'react-icons/bi'
import {RiUserLocationFill} from 'react-icons/ri'
import tpo from '../images/tpo.png'
import { Link } from 'react-router-dom'
import recruiter1 from '../images/recruiter1.jpg'
import recruiter2 from '../images/recruiter2.jpg'
import recruiter3 from '../images/recruiter3.jpg'
import recruiter4 from '../images/recruiter4.jpg'
import recruiter5 from '../images/recruiter5.jpg'
import recruiter7 from '../images/recruiter7.jpg'
import recruiter8 from '../images/recruiter8.jpg'
import Scroll from '../Components/Scroll'
export default function Placements() {
  useEffect(() => {
    document.title = 'ACE | Placements';
  }, []
  );
  return (
    <div>
      <div className="placements">
        <div className="placementHeader">
          <div className="headerText">
            <h1>From Campus to Career: Seize Opportunities with ACE</h1>
          </div>
        </div>

          <h2 className='h2'><i><RiUserLocationFill/></i>Placement Hub of the Region</h2>
        <div className="stats">
            <p> <CountUp id="count" end={90}/>+ Placement Drives  </p> 
            <p> <CountUp id="count" end={2000}/>+ Students Placed  </p> 
            <p> <CountUp id="count" end={21}/>Lac Highest package  </p>
            <p> <CountUp id="count" end={30}/>+ Companies  </p> 
        </div>
      </div>
      <div className="tpoInfo">
        <img src={tpo} alt="tpo" />
        <div className="aboutTPO">
          <h1>Mr. Ajay Pal Singh</h1>
          <h2>Air Veteran | Training & Placement Officer</h2>
          <p>"ACE ensures that its students receive the best placement offers, regularly conducting employability tests in partnership with leading assessment companies to enhance their employability quotient. The institute is dedicated to bridging the industry-academia gap, resulting in new partnerships with leading corporates. Additionally, ACE is impaneled with all three Defense services: the Army, Navy, and Airforce. ACE, Ambala is a gateway to a wider, brighter, and better world."</p>
          <h3><i><BiMailSend/></i> tpo@ambalacollege.ac.in</h3>
        </div>
      </div>
      <div className="recruiters">
        <h1>Our Recruiters</h1>
        <marquee behavior="scroll" direction="left">
          <img src={recruiter1} alt="recruiters" />
          <img src={recruiter2} alt="recruiters" />
          <img src={recruiter3} alt="recruiters" />
          <img src={recruiter4} alt="recruiters" />
          <img src={recruiter5} alt="recruiters" />
          <img src={recruiter7} alt="recruiters" />
          <img src={recruiter8} alt="recruiters" />
        </marquee>
      </div>
      <p className='placeQuote'>“Success is where preparation and opportunity meet”</p>
      <div className="finalDiv">
        <h1>Looking to jumpstart your future with ACE?</h1>
        <Link to='/query'><button>Apply Now</button></Link>
        <Link to='/brochure'><button>Download Brochure</button></Link>
      </div>
      <Scroll/>
    </div>
  )
}
