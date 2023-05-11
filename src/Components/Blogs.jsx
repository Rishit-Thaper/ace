import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:1337/api/blogs?populate=*',{method: "GET"});
            const json = await response.json();
            // setBlogs(json);
            if (Array.isArray(json)) {
                setBlogs(json);
              } else {
                console.error('Invalid data format');
                console.log(json.data);
                setBlogs(json.data);
              }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="card-list">
      {blogs.map((blog) => (
        <Link key={blog.id} to={`/blogs/${blog.id}`} className="card">
          {/* <img src={blog.image} alt={blog.attributes.blogtitle} /> */}
          <div className="card-body">
            <h2>{blog.attributes.blogTitle}</h2>
            <p>{blog.attributes.blogDescription}</p>
            <p>{blog.attributes.blogContent}</p>
          </div>
        </Link>
      ))}
    </div>
    // <div>blogs</div>
  );
}
