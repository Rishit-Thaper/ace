import React from 'react'
import '../assessts/event.css'
import {Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from 'react-icons/md'
import Scroll from '../Components/Scroll'
import hackathon from '../images/hackathon.jpg'
import fair2 from '../images/fair2.jpg'
import fair5 from '../images/fair5.jpg'
import fair6 from '../images/fair6.jpg'

import hackathon1 from '../images/hackathon1.jpg'
// import hackathon2 from '../images/hackathon3.jpg'
import event1 from '../images/event1.jpg'
import event2 from '../images/event2.jpg'
import meet from '../images/meet.jpg'

import aayaam from '../images/aayam.jpg'
export default function Events() {
  
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
  return (
    <div className='events'>
      <Scroll/>
      <div className="eventHead">
        <div className="slide-container2">
          <Fade duration={2000} {...properties}>
            <div className="fade-each"><img src={event1} alt="" /></div>
            <div className="fade-each"><img src={fair2} alt="" /></div>
            <div className="fade-each"><img src={hackathon1} alt="" /></div>
            <div className="fade-each"><img src={event2} alt="" /></div>
            <div className="fade-each"><img src={fair5} alt="" /></div>

          </Fade>
        </div>
        <div className="headOverlay">
          <h1>Explore Events at ACE</h1>
          <h3>Where culture meets innovation, and creativity meets impact!</h3>
        </div>
      </div>   
      <h1 className='cultureHead'>Our Community Engagement Activities</h1>
      <div className="eventFlex">

        <div className="eventCard">
          <img src={aayaam} alt="aayaam" />
          <div className="eventInfo">
            <h2>Aayaam Cultural Event</h2>
            <p>The Aayaam Cultural Event is a celebration of diversity, creativity, and community. It provides a platform for students
               to showcase their talents and cultural heritage through music, dance, drama. The event promotes intercultural understanding.</p>
          </div>
        </div>
        
        <div className="eventCard">
          <img src={meet} alt="alumni" />
          <div className="eventInfo">
            <h2>Alumni Meets</h2>
            <p>
The Alumni Meets at ACE foster a vibrant alumni community by providing a platform for alumni to connect, share experiences, and achievements. These events build pride, loyalty, and a culture of giving back to the college.</p>
          </div>
        </div>
      </div>

        <h1 className="techHead">Our Technical-Innovative Activities</h1>

      <div className="eventFlex1">

        <div className="eventCard">
          <img src={fair6} alt="fair" />
          <div className="eventInfo">
            <h2>Science & Technology Fair</h2>
            <p>The Science and Technology Fair at ACE provides a platform for students to showcase research and innovation. It promotes scientific inquiry, creativity, and problem-solving. The fair facilitates knowledge sharing and networking among students, industry partners, and government agencies.</p>
          </div>
        </div>
        <div className="eventCard">
          <img src={hackathon} alt="hackathon" />
          <div className="eventInfo">
            <h2>ACE-a-THON 24hr. Hackathon</h2>
            <p>The ACE-a-Thon 24 Hr. Hackathon at ACE is a highly anticipated event where students showcase their software development skills. Participants collaborate to create innovative solutions for real-world problems, preparing them for careers in the technology field.</p>
          </div>
        </div>
        </div>
      </div>
  )
}
