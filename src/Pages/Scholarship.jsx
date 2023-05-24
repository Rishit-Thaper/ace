import React from 'react'
import {Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import srsmt from '../images/srsmt.jpg';
import srsmt1 from '../images/srsmt1.jpg';
import srsmt2 from '../images/srsmt2.jpg';
import srsmt3 from '../images/srsmt3.jpg';
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Scholarship() {
    const buttonStyle = {
        width: "30px",
        background: 'none',
        border: '0px',
        color:'white',
        fontSize:"2rem"
    };
    
    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}><i><MdOutlineKeyboardArrowLeft/></i></button>,
        nextArrow: <button style={{ ...buttonStyle }}><i><MdOutlineKeyboardArrowRight/></i></button>
    }
  return (
    <div>

        <div className="slide-container2">
            <Fade duration={2000} {...properties}>
            <div className="fade-each1">
            <img src={srsmt} alt="srsmt" />
                </div>
              <div className="fade-each1"><img src={srsmt1} alt="srsmt1" /></div>
              <div className="fade-each1"><img src={srsmt2} alt="srsmt2" /></div>
              <div className="fade-each1"><img src={srsmt3} alt="srsmt3" /></div>
            </Fade>
        </div>

        <div className="scholarship">
          <div className="details">
            <h2>Unleash your potential with SRSMT Scholarship Test- paving the way for the future engineers!</h2>
            <p>The Sri Ram Sawarop Memorial Trust Scholarship Test is exclusively for 12th passouts aspiring to pursue engineering. It identifies and rewards exceptional academic excellence and dedication, and provides funding opportunities for their engineering education.</p>
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfdAbk5_in7InfNYRe90b9H4QqTfUx0-Qzbo4lVnN1WanWZRQ/viewform">Click here to register for SRSMT-2023</Link>
            <h3>Tution Fee Scholarship Criteria <br /><span style={{fontSize:"1.5rem"}}>If scored:</span></h3>
            <ul>
              <li>More than 90% : 100% Scholarship</li>
              <li>80-90% : 90% Scholarship</li>
              <li>70-80% : 80% Scholarship</li>
              <li>60-70% : 70% Scholarship</li>
              <li>50-60% : 60% Scholarship</li>
            </ul>
          </div>
        </div>
    </div>
  )
}
