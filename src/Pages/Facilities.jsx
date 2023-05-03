import React from 'react'
import "../assessts/about.css"
import Scroll from '../Components/Scroll'
import bus from "../images/college09.jpeg";
import reference from "../images/college01.jpeg";
export default function Facilities(){
    return(
        <>
        {/* Quote heading for facilities ... */}
        <p className='quoteFacility'>Our facilities are a tangible representation of our commitment to promoting the growth and success of our students.</p>
        <Scroll />
        <section className="facility">
            <div className="container">
                <div className="first">
                    <img id="BusImg" src={bus} />
                <p>Transport</p>
                <button className="ExploreBtn">Explore</button>
                </div>
                <div className="second">
                <img id="BusImg" src={reference} />
                <p>ATM</p>
                <button className="ExploreBtn">Explore</button>
                </div>
                <div className="third">
                <img id="BusImg" src={bus} />
                <p>Hostel</p>
                <button className="ExploreBtn">Explore</button>
                </div>
                <div className="forth">
                <img id="BusImg" src={reference} />
                <p>Gymnasium</p>
                <button className="ExploreBtn">Explore</button>
                </div>

            </div>
        </section>
        </>
    )
}