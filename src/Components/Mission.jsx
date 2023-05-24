import {React, useEffect} from 'react'
import "../assessts/about.css"
import Scroll from '../Components/Scroll'
export default function Mission(){
    useEffect(() => {
        document.title = 'ACE | About us';
      }, []
      );
    return(
        <>
        <Scroll />
        <section className="His_Mis_Vis">
            <section className="History">

                <div className="His_quote">
                <p>"The history of an institution is not just a collection of past events, but a living legacy that shapes its present and future."</p>
                </div>
                <div className="His_Content">
                    <p className="His_text">
                    Ambala College of Engineering (ACE) is one of the leading engineering colleges in the region, located in Ambala, Haryana. It was founded in 2002 by Dr. Jai Dev, a visionary educationist, and is managed by the Shri Ram Swaroop Memorial Trust, a non-profit organization dedicated to promoting education and research in India. Dr. Jai Dev's vision for ACE was to provide high-quality technical education to students from all backgrounds, with a focus on practical learning and hands-on experience. He believed that technical education was the key to unlocking India's potential as a global leader in innovation and technology.
                    </p>
                    <p className="His_text">
                    Under the management of the Shri Ram Swaroop Memorial Trust, ACE continued to thrive, attracting talented faculty and students from across the country. The trust was founded in memory of Shri Ram Swaroop, a renowned educationist and philanthropist, with a vision to provide high-quality education to students from all backgrounds, with a focus on innovation, creativity, and social responsibility. Today, ACE continues to expand its programs and facilities, adding new departments and research centers to meet the changing needs of students and the industry. Although Dr. Jai Dev passed away in 2017, his legacy lives on at ACE, which remains committed to providing a world-class education while upholding the values of the Shri Ram Swaroop Memorial Trust.

                    </p>
                </div>

            </section>
        
            <div className="mission-vision">
        <div className="mission">
          <h4>Mission:</h4><hr />
          <ol>
            <li>Attain global engineering education standards through quality teaching, hands-on training, and applied research in practical projects.</li>
            <li>Establish a state-of-the-art incubation center to nurture aspiring entrepreneurs and drive manufacturing growth.</li>
            <li>Foster students' professional ethics and moral values through a transparent, value-based educational system.</li>
            <li>Develop well-rounded individuals by promoting extracurricular activities, arts, spirituality, and community services.</li>
          </ol>
        </div>
        <div className="vision">
          <h4>Vision:</h4><hr />
          <ol>
            <li>Enhancing curriculum, teaching methods, and infrastructure to align with global technical education standards.</li>
            <li>Supporting future entrepreneurs with knowledge of modern technologies and essential skills for successful ventures.</li>
            <li>IIntegrating modern technologies across disciplines further enhances the prospects of success.</li>
            <li>Partnering with international institutions and industries to enhance education and research quality.</li>
          </ol>
        </div>
      </div>
        
        </section>
        </>
    )
};