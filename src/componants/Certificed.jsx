import React from 'react'
import C1 from '../images/C1.webp'
import C2 from '../images/C2.webp'
import C3 from '../images/C3.webp'
import C4 from '../images/C4.svg'
import C5 from '../images/C5.webp'
import C6 from '../images/C6.webp'
import C7 from '../images/C6.webp'
import { GoDotFill } from "react-icons/go";
import { MdHorizontalRule } from "react-icons/md";

function Certificed() {
  return (
    <div className='certificedSection' >
      <h1>
        <MdHorizontalRule className='line' />
        CERTIFIED & EXCELLENCE
        <MdHorizontalRule className='line' />

      </h1>
      <p>Government recognized and internationally accredited healthcare standards</p>
      <div className="tagline"><GoDotFill className='dot' /> OFFICIALLY CERTIFIED</div>
      <div className="certificates_list">
        <marquee behavior="scroll" direction="left" scrollamount="15" pauseOnHover={true}  >

          <div className="merquee d-flex gap-5" >
            <div className="certificate">
              <img src={C1} alt="" style={{ width: "100px" }} />
              <p>Quality Healthcar</p>
            </div>
            <div className="certificate">
              <img src={C2} alt="" style={{ width: "120px" }} />
              <p>Quality Healthcar</p>
            </div>
            <div className="certificate">
              <img src={C3} alt="" />
              <p>Quality Healthcar</p>
            </div>
            <div className="certificate">
              <img src={C4} alt="" />
              <p>Quality Healthcar</p>
            </div>
            <div className="certificate">
              <img src={C5} alt="" />
              <p>Quality Healthcar</p>
            </div>
            <div className="certificate">
              <img src={C6} alt="" />
              <p>Quality Healthcar</p>
            </div>
            <div className="certificate">
              <img src={C7} alt="" />
              <p>Quality Healthcar</p>
            </div>

          </div>
        </marquee>
      </div>
    </div>

  )
}

export default Certificed
