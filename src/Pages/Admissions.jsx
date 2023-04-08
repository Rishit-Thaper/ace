import {React, useEffect, useState} from 'react';
import {FaUserGraduate, FaHandshake} from "react-icons/fa"
import {TbBulb} from "react-icons/tb"
import {GiArchiveResearch, GiBrain} from "react-icons/gi"
import {ImBooks} from "react-icons/im"
import Carousel from '../Components/Caraousel';
import photo from '../images/side.jpg';
import '../assessts/admission.css';
function Admissions() {  
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[phone, setPhone] = useState('');
  const[message, setMessage] = useState('');
  const[course, setCourse] = useState('');

  const handleSubmit = async (e) => {

    e.preventDefault();
    
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);
    formData.append("course", course);

    console.log(formData);

    const response = await fetch("https://script.google.com/macros/s/AKfycbzwQLkCGrDYtsXWalpt7E210MLYrdWRWcPqesQ8MpPTtlZmiktcX_G0oEuyrSMv-JY/exec",
    {method: "POST",
    body: formData,
    mode: 'no-cors',
  });
    if (response.ok){
      alert("Form Submitted");
    }else{
      alert("error occured");
    }

  }
  return (
    <>
    <div className="query">
        <div className="queryTagline">
            <h1>Have a query?</h1>
            <h1>Get it resolved</h1>
            <h3>We are always there for you...</h3>
        </div>
        <div className="queryForm">
            <h3>Enter your details</h3>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="Name">Name</label><br />
                <input className='inputField' type="text" required name='Name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='eg. Raj'/><br />
                <label htmlFor="Email">Email</label><br />
                <input className='inputField' type="email" required name='Email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='eg. raj123@gmail.com'/><br />
                <label htmlFor="Phone">Phone</label><br />
                <input className='inputField' type="tel" required name='Phone' value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='eg. 7778889999' /><br />
                <label htmlFor="Message">Message</label><br />
                <input className='inputField' type="message" required name='Message' value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Your query' /><br />
                <label for="cars">Select Course</label><br />
                <select name="course" value={course} onChange={(e)=>setCourse(e.target.value)} id="select" required>
                  <option value="default">Select Course</option>
                  <option value="cse">B.Tech Computer Science and Engineering</option>
                  <option value="ece">B.Tech Electronics and Communication Engineering</option>
                  <option value="me">B.Tech Mechanical Engineering</option>
                  <option value="bt">B.Tech Biotech Engineering</option>
                  <option value="aiml">B.Tech Artificial Intelligence & Machine Learing</option>
                  <option value="robo">B.Tech Automation & Robotics</option>
                  <option value="bba">Bachelor of Business Administration</option>
                </select><br />
                <button id='submit' type='submit'>Submit</button>
            </form>
        </div>
    </div>
    <section className='parent'>
      <div className="child">
        <div className="admit">
          <div  className="collegeTag">
              <h1>Engineering your future, today!</h1>
              <p>Looking to pursue a career in engineering? Look no further than Ambala College of Engineering! Our esteemed institution has been
                 providing quality education and producing skilled engineers for years. With our state-of-the-art facilities and expert faculty, 
                 we ensure that every student receives the best education possible. Plus, our strong industry partnerships guarantee that you'll 
                 have plenty of opportunities for hands-on learning and real-world experience. Don't miss out on this chance to engineer a better 
                 tomorrow. Enroll at Ambala College of Engineering today!</p>
          </div>
            <img src={photo} alt="clgphoto" className='clgPhoto'/>
        </div>
        <div className="chooseUs">
        <h1 className='chooseHead'>Why Choose Us?</h1>
        <div className="reason-div">
          <div className="reason">
              <i><FaUserGraduate/></i>
              <h3>Expert faculty for exceptional education</h3><hr />
              <p>The college provides exceptional education with passionate faculty, innovative teaching methods, and practical experience to prepare graduates for their careers.</p>
          </div>
          <div className="reason">
              <i><TbBulb/></i>
              <h3>Hands-on experiential learning</h3><hr />
              <p>Hands-on experiential learning" stresses practical experience, applying theory to real-world situations, boosting students' confidence and competence for future careers.</p>
          </div>
          <div className="reason">
              <i><FaHandshake/></i>
              <h3>Industry tie-ups for practical learning</h3><hr />
              <p>Industry tie-ups provide practical learning, exposing students to real-world scenarios and best practices, equipping them for successful careers.</p>
          </div>
        </div>
        <div className="reason-div">
          <div className="reason">
              <i><GiArchiveResearch/></i>
              <h3>Innovative & research-focused ambiance</h3><hr />
              <p>Innovative and research-focused, we equip students with latest skills and knowledge, encouraging critical thinking and problem-solving for success in future endeavors.</p>
          </div>
          <div className="reason">
              <i><ImBooks/></i>
              <h3>Renowned for top-notch education</h3><hr />
              <p>The institution offers top-notch education with experienced faculty, advanced resources, and a commitment to excellence, preparing students for success in their fields.</p>
          </div>
          <div className="reason">
              <i><GiBrain/></i>
              <h3>Focused on holistic development</h3><hr />
              <p>We prioritize holistic student development, fostering growth through classroom and extracurricular activities, preparing students for success in all areas.</p>
          </div>
        </div>
      </div>
      </div>
      <div className='list01'>
        <span>Programs at ACE</span>
        <div className="program-list">
          <div className='proSublist'>
            <h2>Our B.Tech Programs:</h2>
            <ul>
              <li>Computer Science & Engineering</li>
              <li>Mechanical Engineering</li>
              <li>Electronics & Communication Engineering</li>
              <li>Bio-Technology Engineering</li>
            </ul>
          </div>
          <div className='proSublist'>
            <h2>Our Specialisation Programs:</h2>
            <ul>
              <li>Artificial Intelligence & Machine Learning Engineering</li>
              <li>Robotics & Automation Engineering</li>
            </ul>
          </div>
          <div className='proSublist'>
            <h2>Our Business Program:<sup>NEW!</sup></h2>
            <ul>
              <li>BBA- Bachelor of Business Administration</li>
            </ul>
          </div>
        </div>
        </div>
        <Carousel/>
    </section>
    </>
  )
}

export default Admissions