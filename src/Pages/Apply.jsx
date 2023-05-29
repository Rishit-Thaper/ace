import React from 'react'
import { useState } from 'react'

export default function Apply() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cover, setCover] = useState('');
  const [qual, setQual] = useState('');
  const [job, setJob] = useState('');
  const [file, setFile] = useState([]);
  
  return (
    <div>
      <div className='jobForm'>
        <form action="">
          <div className="firstInput">
            <input type="text" onChange={(e)=> setName(e.target.value)} placeholder='Enter Your Name' required/>
            <input type="email" placeholder='Enter Your Email' required/>
          </div>
          <div className="secondInput">
            <input type='tel' placeholder='Enter Your Number' required/>
            <input type="text" placeholder='Enter Your Qualification' required/>
          </div>
          <div className="thirdInput">
            <input type="text" name="" id="" placeholder='Enter the Job Role'/>
            <textarea placeholder='Cover Letter Here' required/>
          </div>
          <input type="file" name="Resume" id="" required /><br />
          <input type="submit" value="Submit your Application" />
        </form>
      </div>
    </div>
  )
}
