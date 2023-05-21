import {React, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../assessts/blog.css'
import Scroll from './Scroll';
const Blogs = ({blogs}) => {

    console.log("Blog Object")
    console.log(blogs)
    const reversedBlogs = [...blogs].reverse();

    console.log("revrse Blog Object")

    console.log(reversedBlogs);
    useEffect(() => {
      document.title = 'ACE | Stories';
    }, []
    );

    return (
      <div className="hero">
        <h1>Exploring the Vibrant Tapestry of College Life: Recent Activities at ACE</h1>
        <h2 className='heroSubHeading'>Engaging Events, Inspiring Initiatives, and Memorable Moments that Define Our Campus Community</h2>

      <div className="card-list">
        <Scroll/>
        {reversedBlogs.map((blog) => (

          <div key={blog.id} to={`/blogs/${blog.id}`} className="blog-card">
            <img src={`http://localhost:1337${blog.attributes.blogMedia.data[0].attributes.url}`} alt={blog.attributes.blogtitle} />
            <div className="card-body">
              <h2 className='blogTitle'>{blog.attributes.blogTitle}</h2>
              <p className="blogDescription">{blog.attributes.blogDescription}</p>
          <Link key={blog.id} to={`/blogs/${blog.id}`} className="card"><button className='navigator'>Read More</button></Link>
            </div>
          </div>
        ))}
  
      </div>
      </div>
    );
}

export default Blogs