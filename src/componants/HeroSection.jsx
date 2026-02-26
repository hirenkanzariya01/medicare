import React from 'react'
import heroImage from '../images/BannerImg.webp'
import { FaStethoscope } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";




function HeroSection() {
  return (
    <div className='mainHeroSection'>

      <div className="left">
        <div className="heroHeading">
          <div className="logo"><FaStethoscope /></div>
          <div className="heading">
            <h1>Medi<span>Care+</span></h1>
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
          </div>
        </div>
        <h2 className='firsTitle'>Premium Healthcare</h2>
        <h2 className='secondTitle'>At Your Fingertips</h2>

        <div className="facitilies">
          <div className="btn"><PiCertificateBold style={{ margin: '0 10px ' }} />Certified Specialists</div>
          <div className="btn"><IoMdTime style={{ margin: '0 10px ' }} />24/7 Availability</div>
          <div className="btn"><MdOutlineHealthAndSafety style={{ margin: '0 10px ' }} />Safe & Secure</div>
          <div className="btn"><LuUsers style={{ margin: '0 10px ' }} />500+ Doctors</div>
          <div className="btn"><MdOutlineDateRange style={{ margin: '0 10px ' }} />Book Appointment Now</div>
          <div className="redBtn"><IoCallOutline style={{ margin: '0 10px ' }} />Emergency Call</div>
        </div>

      </div>
      <div className="right">
        <img src={heroImage} alt="" />
      </div>

    </div>
  )
}

export default HeroSection
