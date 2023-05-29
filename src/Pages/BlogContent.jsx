import {React, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Scroll from '../Components/Scroll';
import '../assessts/blog.css';
const BlogContent = ({ blogs }) => {
  useEffect(() => {
    document.title = 'ACE | Stories';
  }, []
  );
  const { id } = useParams();

  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className='contentHeader'>
      <Scroll/>
      <h1>{blog.attributes.blogTitle}</h1>
      <div className="contentDiv">
        <img className='topImg' src={`http://localhost:1337${blog.attributes.blogMedia.data[0].attributes.url}`} />
        <p>{blog.attributes.blogDescription}</p>
      </div>

      <p className='mainContent'>{blog.attributes.blogContent}</p>

      {blog.attributes.blogMedia.data.map((image) => (
  <img key={image.id} src={`http://localhost:1337${image.attributes.url}`} alt={blog.attributes.blogtitle} />
))}
    </div>
  );
};

export default BlogContent;
