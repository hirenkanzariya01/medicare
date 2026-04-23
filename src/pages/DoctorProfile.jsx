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
import { BsLightningCharge } from "react-icons/bs";
import Calendar from 'react-calendar'
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Appoinments from '../componants/Appoinments';
// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

function DoctorProfile() {
  const location = useLocation()
  const data = location.state
  const [value, onChange] = useState(new Date());
  return (
    <div className='mainDoctorProfile' >
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
              <CiHeart className='icon1' />
              <h2>{data.successRate || 0}</h2>
              <p>Success</p>
            </div>
            <div className="first">
              <PiMedal className='icon2' />
              <h2>{data.experience || 0}</h2>

              <p>Experience</p>
            </div>
            <div className="first">
              <TbUsers className='icon3' />

              <h2>{data.patients || 0}</h2>
              <p>Patients</p>
            </div>
          </div>
        </div>
        <div className="second">
          <h2 className='drName'>{data.name}</h2>
          <p className='drDept'><BsLightningCharge className='me-2' />{data.dept}</p>
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
            <h2><IoIosInformationCircleOutline /> About Doctor</h2>
            <p>{data.about}</p>
          </div>
        </div>
      </div>

      {/* <div className="appoinment_section">
        <div className="first">
          <h1>Book Your Appointment</h1>
          <h2>Select Date</h2>
          <Calendar onChange={onChange} value={value} />

          <div className="detailsForm">
            <h2>Patient Details</h2>
            <input type="text" placeholder='Enter Name' />
            <input type="number" placeholder='Enter Age' />
            <input type="text" placeholder='Enter Mobile Number' />
            <input type="text" placeholder='Enter Gender' />
            <input type="text" placeholder='enter Email (optional for fee recipt )' />
          </div>
        </div>
        <div className="second">
          Available Time Slots

          8:00 AM
          Selected Doctor:
          gh
          Doctor Speciality:
          nm
          Selected Date:
          Tuesday, April 14, 2026
          Selected Time:
          Not selected
          Consultation Fee:
          ₹6
          Payment:
          Cash
          Online

          Confirm Booking
        </div>
      </div> */}
      <Appoinments data={data} />
    </div>
  )
}

export default DoctorProfile
