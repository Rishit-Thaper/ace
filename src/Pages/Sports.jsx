import React from 'react'
import {Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from 'react-icons/md'
import sports1 from '../images/sports1.jpg'
import sports4 from '../images/sports4.jpg'
import sports5 from '../images/sports5.jpg' 
import sports2 from '../images/sports2.jpg'
import sports3 from '../images/sports3.jpg'

import Scroll from '../Components/Scroll'
export default function Sports() {
  const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px',
    color:'white',
    fontSize:"1.5rem",
    zIndex: 2
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><i><MdOutlineKeyboardArrowLeft/></i></button>,
    nextArrow: <button style={{ ...buttonStyle }}><i><MdOutlineKeyboardArrowRight/></i></button>
}
  return(
    <div className="sports">

      <div className='eventHead'>
          
          <Scroll/>

          <div className="slide-container2">
            <Fade duration={2000} {...properties}>
              <div className="fade-each"><img src={sports1} alt="" /></div>
              <div className="fade-each"><img src={sports2} alt="" /></div>
              <div className="fade-each"><img src={sports3} alt="" /></div>
            </Fade>
          </div>

          <div className="headOverlay">
            <h1>Power Your Play</h1>
            <h3>Unleash Your Competitive Spirit, Conquer the Field</h3>
          </div>

      </div>
      <h1 className='cultureHead'>Our Annual Sports Events</h1>

      <div className="eventFlex">

        <div className="eventCard">
          <img src={sports4} alt="aayaam" />
          <div className="eventInfo">
            <h2>ACE Premier League</h2>
            <p>Get ready for the thrilling cricket action as teams battle for the championship. 
              It's a celebration of teamwork and sportsmanship, creating memories that will be 
              cherished forever. Don't miss out on this electrifying event in our college!</p>
          </div>
        </div>
        
        <div className="eventCard">
          <img src={sports5} alt="alumni" />
          <div className="eventInfo">
            <h2>Annual Athletic Meet</h2>
            <p>
            Experience the adrenaline rush as athletes showcase their skills in our Annual Athletic Event. 
            From sprints to jumps, witness the determination and passion on the track. Join us for a day of 
            competition and camaraderie, celebrating the spirit of athleticism.</p>
          </div>
        </div>
      </div>
      Apart these there are also many other sports activities 

    </div>
  )
}
