import React from 'react';
import { useParams } from 'react-router-dom';
import Scroll from '../Components/Scroll';
import '../assessts/blog.css';
const BlogContent = ({ blogs }) => {
  const { id } = useParams();

  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    
    <div>
      <Scroll/>
      <img src={`http://localhost:1337${blog.attributes.blogMedia.data[0].attributes.url}`} />
      <h1>{blog.attributes.blogTitle}</h1>
      <div>{blog.attributes.blogContent}</div>
    </div>
  );
};

export default BlogContent;
