import {React, useState} from 'react'

export default function Query() {

    const[name, setName] = useState('');
    const[phone, setPhone] = useState('');
    const[email, setEmail] = useState('');
    const[message, setMessage] = useState('');
    const[course, setCourse] = useState('');

    const handleSubmit = async (e) => {

      const formData = new FormData();

      formData.append('Name',name);
      formData.append('Email',email);
      formData.append('Phone',phone);
      formData.append('Message',message);
      formData.append('Course',course);
  
      e.preventDefault();
      console.log(formData);
  
      try {
        const res = await fetch("https://script.google.com/macros/s/AKfycbzlgQJIGptmwL7KuVg9yaTU9BOrofHszSYReQoa4Ed8ZUzwsc4UBiK8KFGKlGaWcm6K/exec", {
          method: "POST",
          body: formData,
        });
    
        console.log(res);
        if(res.ok){
          alert("The request has been received, we'll get back to you shortly.");
          setName('');
          setCourse('');
          setPhone('');
          setMessage('');
          setEmail('');
        }
      } catch (error) {
        console.error(error);
      }
    }
  return (
    <div className="query" style={{borderBottom:"5px solid #24a1e5"}}>
    <div className="queryTagline">
        <h1>Have a query ?</h1>
        <h1>Get it resolved</h1>
        <h3>We are always there for you...</h3>
    </div>
    <div className="queryForm">
        <h3>Enter your details</h3>
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="Name">Name</label><br />
            <input className='inputField' type="text" required name='Name' value={name} onChange={(e) => setName(e.target.value)} placeholder='eg. Raj'/><br />
            <label htmlFor="Email">Email</label><br />
            <input className='inputField' type="email" required name='Email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='eg. raj123@gmail.com'/><br />
            <label htmlFor="Phone">Phone</label><br />
            <input className='inputField' type="tel" required name='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='eg. 7778889999' /><br />
            <label htmlFor="Message">Message</label><br />
            <input className='inputField' type="message" required name='Message' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your query' /><br />
            <label for="Course">Select Course</label><br />
            <select name="Course" id="select" value={course} onChange={(e) => setCourse(e.target.value)} required>
              <option value="Not Clear">Select Course</option>
              <option value="CSE">B.Tech Computer Science and Engineering</option>
              <option value="ECE">B.Tech Electronics and Communication Engineering</option>
              <option value="ME">B.Tech Mechanical Engineering</option>
              <option value="BT">B.Tech Biotech Engineering</option>
              <option value="AI/ML">B.Tech Artificial Intelligence & Machine Learing</option>
              <option value="ROBO">B.Tech Automation & Robotics</option>
              <option value="BBA">Bachelor of Business Administration</option>
            </select><br />
            <button id='submit' type='submit'>Submit</button>
        </form>
    </div>
</div>
  )
}
