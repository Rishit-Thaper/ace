import React from 'react';
import { Link } from 'react-router-dom';
import '../assessts/department.css';
import me from '../images/ME_DEP.png'
import cse from '../images/CSE_DEP.png'
import app from '../images/APPL_DEP.png'
import bt from '../images/BT_DEP.png'
import ece from '../images/ECE_DEP.png'
import Scroll from '../Components/Scroll'
function Society() {
  return (
    <>
      <section className='departments'>
        <div className="department-overlay">
          <h1>Connect with Like-Minded Peers: <br /> College Societies and Clubs</h1>
          <Scroll/>
        </div>

        <div className="department_chart">
          
          <div className="dep">            
            <img src={app} alt="" />
            
            <div className="dep_about">
              <h1>Erudition Society</h1>
              <p>The Erudition Society is a student-led organization within the Applied Science and Humanities Department that promotes interest and awareness in the field of applied science and humanities. It enhances the technical and soft skills of its members through various activities, such as seminars, workshops, and conferences, and provides a platform for students to showcase their research and projects in the field.</p>
              <Link to="/societies/erudition">Explore More</Link>
            </div>          
          </div>
          
          <div className="dep dep1">          
            <div className="dep_about">
              <h1>Computer Science of India(CSI)</h1>
              <p>The Computer Society of India (CSI) is a non-profit organization that promotes the advancement of computer science and technology in India. It offers a platform for professionals to share knowledge and expertise through various activities such as conferences, seminars, and training programs. CSI also publishes technical journals and offers certification programs, scholarships, and awards to promote excellence in the field.</p>
              <Link to="/societies/csi">Explore More</Link>
            </div>
          
            <img src={cse} alt="" />
          </div>
          
          <div className="dep">
            <img src={me} alt="" />

            <div className="dep_about">
              <h1>Design Club</h1>
              <p>The Design Club is a student-led organization in the Mechanical Engineering Department that focuses on enhancing the technical and creative skills of its members. It organizes various events, such as design competitions, workshops, and industry visits, to promote innovation and practical learning. The club also provides a platform for students to showcase their projects and collaborate with professionals in the field.</p>
              <Link to="/societies/design-club">Explore More</Link>
            </div>
          </div>
          
          <div className="dep dep1">
            <div className="dep_about">
              <h1>Institution of Electronics and Telecommunication Engineers</h1>
              <p>The IETE Student Forum is a professional society in India that focuses on advancing the fields of electronics, telecommunication, and IT. It offers various professional development programs, conferences, and technical publications to promote innovation and knowledge-sharing among its members. Additionally, IETE provides accreditation for engineering colleges and universities in India and offers certification programs for professionals in the field of electronics and telecommunication.</p>
              <Link to="/societies/iete-forum">Explore More</Link>
            </div>
          
            <img src={ece} alt="" />
          </div>
          
          <div className="dep">
            <img src={bt} alt="" />
          
            <div className="dep_about">
              <h1>Biochepron Society</h1>
              <p>The Biochepron Society is a student-led organization in the Biotech Engineering Department that promotes biotechnology through workshops, events, and research projects. It offers a platform for students to showcase their work, fosters innovation, and provides networking opportunities for internships and job placements</p>
              <Link to="/societies/bio">Explore More</Link>
            </div>
          </div>
        </div>
        <p className='summary'>Joining a society or club is a great way to meet like-minded peers, develop new skills, and enhance your college experience. We encourage you to explore our vibrant community of societies and clubs and find one that aligns with your interests and passions</p>
      </section>
    </>
    )
}

export default Society;