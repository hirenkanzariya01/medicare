import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';
import user from '../images/user.avif'
import { CiHeart } from "react-icons/ci";
import { PiMedal } from "react-icons/pi";
import { PiGraduationCapLight } from "react-icons/pi";
import { TbUsers } from "react-icons/tb";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";


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
    <div className='mainDoctorProfile'>
      <header>
        <NavLink to="/doctors" className="backbtn"><FaArrowLeft /> Back</NavLink>
        <h1>Doctor Profile</h1>
        <p>{data?.rating || 0}</p>
      </header>
      <div className="profile">
        <div className="first">
          <img src={data.Image || user} alt={data.name} />

          <div className="aboutDr">
            <div className="first">
              <CiHeart className='icon' />
              <h2>{data.successRate || 0}</h2>
              <p>Success</p>
            </div>
            <div className="first">
              <PiMedal className='icon' />
              <h2>{data.experience || 0}</h2>

              <p>Experience</p>
            </div>
            <div className="first">
              <TbUsers className='icon' />

              <h2>{data.patients || 0}</h2>
              <p>Patients</p>
            </div>
          </div>
        </div>
        <div className="second">
          <h2>{data.name}</h2>
          <p>{data.dept}</p>
          <div className="details">
            <div className="d">
              <div className="icon"><MdOutlineLocationOn /></div>
              <div>
                <p>Location</p>
                <p>{data.location}</p>
              </div>
            </div>

            <div className="d">
              <div className="icon"><PiGraduationCapLight /></div>
              <div>
                <p>Qualifications</p>
                <p>{data.qualifications}</p>
              </div>
            </div>

            <div className="d">
              <div className="icon"><FaIndianRupeeSign /></div>
              <div>
                <p>Consultation Fee</p>
                <p>{data.consultationFee}</p>
              </div>
            </div>

            <div className="d">
              <div className="icon"><IoTimeOutline /></div>
              <div>
                <p>Availability</p>
                <p>{data.qualifications}</p>
              </div>
            </div>
          </div>

          <div className="aboutDr">
            <h2><IoIosInformationCircleOutline ></IoIosInformationCircleOutline>About Doctor</h2>
            <p>{data.about}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorProfile
