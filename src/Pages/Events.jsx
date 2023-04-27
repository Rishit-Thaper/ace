import React from 'react'
import '../assessts/event.css'
import Scroll from '../Components/Scroll'
export default function Events() {
  return (
    <div className='events'>
      <Scroll/>
      <h1>Explore Events at ACE</h1>
      <h3>Where culture meets innovation, and creativity meets impact!</h3>
      <div className="eventFlex">

        <div className="eventCard">
          <img src="" alt="aayaam" />
          <div className="eventInfo">
            <h2>Aayaam Cultural Event</h2>
            <p>The Aayaam Cultural Event is a celebration of diversity, creativity, and community at Ambala College of Engineering.
               It provides a platform for students to showcase their talents and cultural heritage through music, dance, drama, and 
               other forms of creative expression. The event promotes intercultural understanding and appreciation, and encourages 
               students to explore their passions and connect with others.</p>
          </div>
        </div>

        <div className="eventCard">
          <img src="" alt="blood" />
          <div className="eventInfo">
            <h2>Blood Donation Camps</h2>
            <p>The Blood Donation Event is an important initiative organized at Ambala College of Engineering to create awareness about 
              the need for blood donation and to encourage students to donate blood. The event helps to save lives by providing a steady 
              supply of blood to those in need. It also promotes a culture of social responsibility and altruism among the student community.</p>
          </div>
        </div>

        <div className="eventCard">
          <img src="" alt="hackathon" />
          <div className="eventInfo">
            <h2>ACE-a-THON 24hr. Hackathon Event</h2>
            <p>The ACE-a-Thon 24 Hour Software Hackathon is a highly anticipated event at Ambala College of Engineering that provides a 
              platform for students to showcase their skills and creativity in software development. The event challenges participants 
              to work collaboratively and think outside the box to create innovative solutions to real-world problems. The event helps 
              students to develop valuable skills and prepares them for a career in the fast-growing field of technology.</p>
          </div>
        </div>

        <div className="eventCard">
          <img src="" alt="fair" />
          <div className="eventInfo">
            <h2>Science & Technology Fair</h2>
            <p>The Science and Technology Fair is an annual event at Ambala College of Engineering that provides a platform for students 
              to showcase their research and innovation in various fields of science and technology. The event promotes scientific inquiry 
              and creativity, and encourages students to explore new ideas and solutions to complex problems. The fair attracts participation 
              from students, industry partners, and government agencies, and serves as a forum for knowledge sharing and networking.</p>
          </div>
        </div>

        <div className="eventCard">
          <img src="" alt="alumni" />
          <div className="eventInfo">
            <h2>Alumni Meets</h2>
            <p>The Alumni Meets at Ambala College of Engineering are organized to foster a strong and vibrant alumni community. The events 
              provide an opportunity for alumni to connect with each other and with the college, and to share their experiences and achievements. 
              The alumni meets help to build a sense of pride and loyalty among the alumni, and promote a culture of giving back to the college.</p>
          </div>
        </div>

      </div>
    </div>
  )
}
