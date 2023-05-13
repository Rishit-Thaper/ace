import React from 'react'
import "../assessts/about.css"
import Scroll from '../Components/Scroll'
export default function Mission(){
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
        <section className="Mission_Vision">
            <div className="Mis_quote">
                <p>"Institutions without a clear mission and vision are like ships without rudders, directionless and purposeless."</p>
            </div>
            <div className="Mis_Content">
                <div className="Mis_Container">
                    <div className="Mission">
                        <p className="Mis_Vis_Heading">Mission</p>
                        <hr className="Underline" />
                    </div>
                    <div className="Vision">
                        <p className="Mis_Vis_Heading">Vision</p>
                        <hr className="Underline" />

                    </div>

                </div>

            </div>


        </section>
        </section>
        
        </>
    )
};