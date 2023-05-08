import React from 'react'
import "../assessts/about.css"
import Scroll from '../Components/Scroll'
import bus from "../images/college09.jpeg";
import hostel from "../images/college01.jpeg";
import gym from "../images/Gym_Compressed.jpg";
export default function Facilities(){
    return(
        <>
        <section className="Facilities">
        {/* Quote heading for facilities ... */}
        <p className='quote'>Our facilities are a tangible representation of our commitment to promoting the growth and success of our students.</p>
        <Scroll />
        <section className="facility">
            <div className="container">
                <div className="first">
                    <img id="BusImg" src={bus} />
                <p id="FaciHeading">Transport</p>
                <ul className="FaciContent"> 
                    <li> Bus facility for the students & faculty to commute to and from the campus.</li>
                    <li>The buses operates on a fixed schedule.</li>
                    <li>Maintained regularly to ensure safety of the students.</li>
                </ul>
                
                </div>
                <div className="second">
                <img id="BusImg" src={bus} />
                <p id="FaciHeading">ATM</p>
                <ul className="FaciContent">
                    <li>ATM facility for the students to access cash on campus.</li>
                    <li>ATM is located at the entrance of college.</li>
                    <li>Well-equipped with CCTV cameras.</li>

                </ul>
                
                </div>
                <div className="third">
                <img id="BusImg" src={hostel} />
                <p id="FaciHeading">Hostel</p>
                <ul className="FaciContent">
                    <li>Boys hostel with a capacity of 250 & girls hostel with a capacity of 129.</li>
                    <li>Free Wi-fi connectivity for hostelers.</li>
                    <li>On campus faculty quarters along with Director's house & Guest house. </li>


                </ul>
                
                </div>
                <div className="forth">
                <img id="BusImg" src={gym} />
                <p id="FaciHeading">Gymnasium</p>
                <ul className="FaciContent">
                    <li>Well-equipped gym for boys near boys hostel.</li>
                    <li>Multi-purpose gym.</li>
                    <li>Treadmill & gym cycle, etc. is also available in girls hostel.</li>


                </ul>

                
                </div>

            </div>
        </section>
        </section>
        </>
    )
};