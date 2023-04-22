import {React, useEffect} from 'react'

import '../assessts/courses.css';
import bt from '../images/BT1.jpg'
import btLab from '../images/BT_LAB.png';
export default function Bt() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='about_dep'>
      <h1>Department of Bio-Technology Engineering</h1>
      <div className="dep_info">
        
      <ul> 
        <li>The Biotechnology Engineering department at Ambala College of Engineering and Applied Research (ACE) aims to provide students with theoretical and practical knowledge in the field of biotechnology.</li> 
        <li>The department offers training, expert lectures, and counseling to help students excel in their studies.</li> 
        <li>Students have opportunities to secure internships and conduct research in renowned universities and industries.</li> 
        <li>The department has experienced faculty members specializing in areas such as cell and tissue culture technology, microbial biotechnology, and bioinformatics.</li> 
        <li>ACE's Biotechnology Engineering students consistently achieve high pass percentages and secure top positions in the university.</li> 
        <li>The department has well-equipped laboratories and a research center to support teaching and research activities.</li> 
      </ul>
        
        <img src={bt} alt="" />
      </div>
      <div className="lab_info">
        <img src={btLab} alt="" />
        <div className="dep_lab">
          <h2>Laboratries</h2>
          <ul>
            <li>Microbiology Lab</li>
            <li>Biochemistry and Molecular Biology Lab</li>
            <li>Diagnostics and Immunology Lab</li>
            <li>Cell and Tissue culture Lab</li>
            <li>Fermentation and DSP Lab</li>
            <li>Bioinformatics Lab</li>
            <li>Advanced Molecular Lab</li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
