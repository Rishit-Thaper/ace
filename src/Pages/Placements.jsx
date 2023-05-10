import React from 'react'
import '../assessts/placement.css'
import CountUp from 'react-countup'
import {BiMailSend} from 'react-icons/bi'
import {RiUserLocationFill} from 'react-icons/ri'
import tpo from '../images/tpo.png'
// import place1 from '../images/place1.png'
// import place2 from '../images/place2.png'
// import place3 from '../images/place3.png'
// import place4 from '../images/place4.png'
import Scroll from '../Components/Scroll'
export default function Placements() {
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
      <p>“Success is where preparation and opportunity meet”</p>
      <Scroll/>
    </div>
  )
}
