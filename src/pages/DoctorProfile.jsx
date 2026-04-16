import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';
import user from '../images/user.avif'
import { CiHeart } from "react-icons/ci";
import { PiMedal } from "react-icons/pi";

import { TbUsers } from "react-icons/tb";


function DoctorProfile() {
  const location = useLocation()
  const data = location.state

  // {
  //       id: 3,
  //       Image: dr1,
  //       name: "Dr Rohit",
  //       dept: "Pediatrics",
  //       experience: "5 Years",
  //       successRate: "88%",
  //       patients: 60,
  //       qualifications: "MBBS, DCH",
  //       location: "Rajkot",
  //       consultationFee: "₹300",
  //       availability: "Unavailable",
  //       about: "Focused on child wellness and preventive care."
  //     },

  return (
    <div>
      <header>
        <NavLink to="/doctors"><FaArrowLeft /> Back</NavLink>
        <h1>Doctor Profile</h1>
        <p>{data?.rating || 0}</p>
      </header>
      <div className="profile">
        <div className="first">
          <img src={data.Image || user} alt={data.name} />

          <div className="aboutDr">
            <div className="first">
              <CiHeart />
              <h2>{data.successRate || 0}</h2>
              <p>Success</p>
            </div>
            <div className="first">
              <PiMedal />
              <h2>{data.experience || 0}</h2>

              <p>Experience</p>
            </div>
            <div className="first">
              <TbUsers />

              <h2>{data.patients || 0}</h2>
              <p>Patients</p>
            </div>
          </div>
        </div>
        <div className="second"></div>
      </div>
    </div>
  )
}

export default DoctorProfile
