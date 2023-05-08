import React from 'react'
import '../assessts/placement.css'
import CountUp from 'react-countup'
import {RiUserLocationFill} from 'react-icons/ri'
import place1 from '../images/place1.png'
import place2 from '../images/place2.png'
import place3 from '../images/place3.png'
import place4 from '../images/place4.png'
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
          <p> <CountUp end={90}/>+ Placement Drives  </p> 
          <p> <CountUp end={2000}/>+ Students Placed  </p> 
          <p> <CountUp end={25}/>Lac Highest package  </p> 
        </div>
      </div>

      <Scroll/>
    </div>
  )
}
