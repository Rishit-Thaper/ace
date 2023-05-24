import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assessts/blog.css';
import Scroll from './Scroll';

const Blogs = ({ blogs = [] }) => {

  console.log("blog object")
  console.log(blogs)
  
  useEffect(() => {
    document.title = 'ACE | Stories';
  }, []);

  if (!blogs || blogs.length === 0) {
    return <div>Loading...</div>;
  }
  const reverseData = [...blogs].reverse();
  return (
    <div className="hero">
      <h1>Exploring the Vibrant Tapestry of College Life: Recent Activities at ACE</h1>
      <h2 className="heroSubHeading">Engaging Events, Inspiring Initiatives, and Memorable Moments that Define Our Campus Community</h2>
      <Scroll />

      <div className="card-list">
        {reverseData.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={`http://localhost:1337${blog.attributes.blogMedia.data[0].attributes.url}`} alt={blog.attributes.blogtitle} />
            <div className="card-body">
              <h2 className="blogTitle">{blog.attributes.blogTitle}</h2>
              <p className="blogDescription">{blog.attributes.blogDescription}</p>
              <Link to={`/blogs/${blog.id}`} className="card">
                <button className="navigator">Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
