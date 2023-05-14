import React from 'react';
import { Link } from 'react-router-dom';
import '../assessts/blog.css'

const Blogs = ({blogs}) => {

    console.log("Blog Object")
    console.log(blogs)


    return (
      <div className="card-list">
        {blogs.map((blog) => (
        <div className="blog-card">
  
          <Link key={blog.id} to={`/blogs/${blog.id}`} className="card">
            <img src={`http://localhost:1337${blog.attributes.blogMedia.data[0].attributes.url}`} alt={blog.attributes.blogtitle} />
            <div className="card-body">
              <h2>{blog.attributes.blogTitle}</h2>
              <p>{blog.attributes.blogDescription}</p>
            </div>
          </Link>
        </div>
  
        ))}
  
      </div>
    );
}

export default Blogs