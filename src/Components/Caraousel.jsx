import React from 'react';
import Carousel from 'react-multi-carousel';
import '../assessts/carousel.css';
import 'react-multi-carousel/lib/styles.css';
import user from '../images/userImg.jpg'
import Scroll from './Scroll';
export default function Caraousel() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1920, min: 720 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 480, min: 0 },
          items: 1
        }
      };
      return(
        <section className='testimonials'>
          <Scroll/>
          <div className="head">
            <span id='head'>OUR TESTIMONIALS</span>
          </div>

          <div className="testFlex">

            <h2>What do our ALUMNI think about us?</h2>
            
            <Carousel className='carousel' responsive={responsive}>

              <div className='feedBack'>
                <img src={user} alt="alumniImage"/>
                <div className="alumniFB">
                  <span className='name'>ALUMNI NAME</span><br />
                  <span className='batch'><i>Batch 201X-201X</i></span> <br />
                  <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae explicabo perspiciatis hic pariatur illo doloribus nobis. Odio nobis laudantium, qui sequi id, rem est vel similique quam natus dicta sunt."</p>
                </div>
              </div>

              <div className='feedBack'>
                <img src={user} alt="alumniImage"/>
                <div className="alumniFB">
                  <span className='name'>ALUMNI NAME</span><br />
                  <span className='batch'><i>Batch 201X-201X</i></span> <br />
                  <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae explicabo perspiciatis hic pariatur illo doloribus nobis. Odio nobis laudantium, qui sequi id, rem est vel similique quam natus dicta sunt."</p>
                </div>
              </div>
              
              <div className='feedBack'>
                <img src={user} alt="alumniImage"/>
                <div className="alumniFB">
                  <span className='name'>ALUMNI NAME</span><br />
                  <span className='batch'><i>Batch 201X-201X</i></span> <br />
                  <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae explicabo perspiciatis hic pariatur illo doloribus nobis. Odio nobis laudantium, qui sequi id, rem est vel similique quam natus dicta sunt."</p>
                </div>
              </div>
              
              <div className='feedBack'>
                <img src={user} alt="alumniImage"/>
                <div className="alumniFB">
                  <span className='name'>ALUMNI NAME</span><br />
                  <span className='batch'><i>Batch 201X-201X</i></span> <br />
                  <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae explicabo perspiciatis hic pariatur illo doloribus nobis. Odio nobis laudantium, qui sequi id, rem est vel similique quam natus dicta sunt."</p>
                </div>
              </div>
              
              <div className='feedBack'>
                <img src={user} alt="alumniImage"/>
                <div className="alumniFB">
                  <span className='name'>ALUMNI NAME</span><br />
                  <span className='batch'><i>Batch 201X-201X</i></span> <br />
                  <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae explicabo perspiciatis hic pariatur illo doloribus nobis. Odio nobis laudantium, qui sequi id, rem est vel similique quam natus dicta sunt."</p>
                </div>
              </div>
              
              <div className='feedBack'>
                <img src={user} alt="alumniImage"/>
                <div className="alumniFB">
                  <span className='name'>ALUMNI NAME</span><br />
                  <span className='batch'><i>Batch 201X-201X</i></span> <br />
                  <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae explicabo perspiciatis hic pariatur illo doloribus nobis. Odio nobis laudantium, qui sequi id, rem est vel similique quam natus dicta sunt."</p>
                </div>
              </div>
            </Carousel>
        </div>
        </section>
      )
}
