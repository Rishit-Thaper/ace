import {React, useEffect} from 'react'
import Scroll from '../Components/Scroll';
import '../assessts/career.css'
import { Link } from 'react-router-dom';
const Career = ({jobs}) => {

    console.log("job Object")
    console.log(jobs)

    useEffect(() => {
      document.title = 'ACE | Careers';
    }, []
    );

    return (
        <>
            <div className="careerHead">
                <div className="headerText">
                    <h1>Crafting Leaders, Impacting Industries: Launch Your Career with ACE</h1>
                </div>
            </div>
            <h2 id='careerTag'>Join our vibrant community of professionals and unlock a multitude of rewarding career prospects.</h2>
            <div className="card-list">
              <Scroll />

              {/* Assistant Professor Jobs */}
              <h2 className="jobHead">Assistant Professor Jobs</h2>
              {jobs.map((job) => {
                if (job.attributes.jobTitle === "Assistant Professors" || job.attributes.jobTitle === "Assistant Professor") {
                  return (
                    <div key={job.id} className="job-card">
                        <div className="job-card-details">
                            <h3 className='jobTitle'>{job.attributes.jobTitle}</h3>
                            <h4 className='jobTitle'>{job.attributes.organisation}</h4>
                            <p className="jobDescription">Details: {job.attributes.jobDetails}</p>
                            <p className="jobDescription">Apply Before: {job.attributes.lastDate}</p>
                            <p className="jobDescription">Vacancy: {job.attributes.vacancy}</p>
                        </div>
                           <Link to='/apply'><button>Apply Now</button></Link>
                    </div>
                  );
                }
                return null;
              })}

              {/* Professor Jobs */}
              <h2 className="jobHead">Professor Jobs</h2>
              {jobs.map((job) => {
                if (job.attributes.jobTitle === "Professors" || job.attributes.jobTitle === "Professor") {
                  return (
                    <div key={job.id} className="job-card">
                        <div className="job-card-details">
                            <h3 className='jobTitle'>{job.attributes.jobTitle}</h3>
                            <h4 className='jobTitle'>{job.attributes.organisation}</h4>
                            <p className="jobDescription">Details: {job.attributes.jobDetails}</p>
                            <p className="jobDescription">Apply Before: {job.attributes.lastDate}</p>
                            <p className="jobDescription">Vacancy: {job.attributes.vacancy}</p>
                        </div>
                           <Link to='/apply'><button>Apply Now</button></Link>
                    </div>
                  );
                }
                return null;
              })}
            </div>
        </>
    );
}
export default Career;