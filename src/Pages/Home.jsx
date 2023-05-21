import {React, useState, useEffect} from 'react'
import '../assessts/home.css';
import Course from '../Components/Course';
import Scroll from '../Components/Scroll';
import { Link } from 'react-router-dom';
import Carousel from '../Components/Caraousel';
import Blogs from '../Components/Blogs';

export default function Home() {

  const[message, setMessage] = useState(0);
  const dataArray = [
    {
      Message: "Ambala College of Engineering and Applied Research (ACE) was founded by Dr. Jai Dev to provide higher and technical education opportunities to rural communities. The college is managed by the Shri Ram Swarup Memorial Trust and is affiliated with Kurukshetra University in Haryana, India. The aim of ACE is to provide a value-oriented education that develops competent, compassionate, and conscientious leaders. The founders recognized the importance of applied research at the B.Tech level for improving the quality of engineering education in India and established ACE to address this need.",
    },
    {
      Message:"At ACE, our mission is to empower students with the skills and knowledge required to bridge the gap between theory and practice. We promote a heuristic learning approach that encourages learning by doing. Our curriculum focuses on hands-on experience with the latest software and technical tools, enabling students to gain practical proficiency and stay updated with industry trends. We prioritize the development of both hard and soft skills, including communication, teamwork, and leadership, to prepare our students for success in today's competitive job market.",
    },
    {
      Message:"Our institution is dedicated to meeting international benchmarks in technical education and serving as a hub for technological advancement. We believe in empowering aspiring entrepreneurs through our incubation center, providing them with modern technological knowledge and emphasizing professional ethics and moral values. Our community of forward-thinking individuals is committed to driving innovation and progress in their respective fields while striving for excellence and creativity in everything we do.",
    }
  ]

  const [data,setData] =useState([])
  const [error,setError] =useState(null)
  const [loading,setLoading] =useState(true)
  
  useEffect(() => {
      const fetchData = async ()=>{
          setLoading(true)
          try {
              const res = await fetch("http://localhost:1337/api/blogs?populate=*")
              const json = await res.json()
              console.log(json);
              setData(json.data);
              console.log(data);
              setLoading(false)
              document.title = 'ACE | Home';

          } catch (error) {
              setError(error)
              setLoading(false)
          }
      }
      fetchData();
    
  }, [])
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const reverseData = [...data].reverse();

  return(
    <>
    <div className='main'>
        <div className="overlay">
          <h1>We are engaged to give you a<br/>
          <span>GOOD FUTURE</span></h1>
          <Scroll/>
          <h2>where Education is a passion, not a business</h2>
          <Link to='/'><button className='exp'>Explore</button></Link>
          <Link to='/'><button className='contact'>Contact Us</button></Link>
        </div>
    </div>
    <Course/>
    <section className='aboutSection'>
<div className="about">
  <span>About ACE</span>
  <div className="buttons">
    <button className='hover-underline-animation' onClick={()=> setMessage(0)}>Our History</button>
    <button className='hover-underline-animation' onClick={()=> setMessage(1)}>Our Mission</button>
    <button className='hover-underline-animation' onClick={()=> setMessage(2)}>Our Vision</button>
  </div>
  <div className="message">
    <p>{dataArray[message].Message}</p>
  </div>
  <Link to='/about'><button className='know'>Know More</button></Link>
</div>
</section>
<div className="hero">
    <h1>Exploring the Vibrant Tapestry of College Life: Recent Activities at ACE</h1>
    <h2 className='heroSubHeading'>Engaging Events, Inspiring Initiatives, and Memorable Moments that Define Our Campus Community</h2>

    <div className="card-list">
      <Scroll/>
      {reverseData.slice(0, 2).map((blog) => (
        <div key={blog.id} to={`/blogs/${blog.id}`} className="blog-card">
          <img src={`http://localhost:1337${blog.attributes.blogMedia.data[0].attributes.url}`} alt={blog.attributes.blogtitle} />
          <div className="card-body">
            <h2 className='blogTitle'>{blog.attributes.blogTitle}</h2>
            <p className="blogDescription">{blog.attributes.blogDescription}</p>
            <Link key={blog.id} to={`/blogs/${blog.id}`} className="card">
              <button className='navigator'>Read More</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
<section>
  <Carousel/>
  <div className="query-1">
    <h2>We are always there for you.</h2>
    <div className="queFeed">
      <Link to="/query"><button className='queryBut'>Have a query?</button></Link>
      <Link to="/query"><button className='feedBut'>Leave feedback</button></Link>
    </div>
  </div>
</section>
    </>
  )
}
