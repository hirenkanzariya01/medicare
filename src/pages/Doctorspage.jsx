import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import dr1 from '../images/dr1.png'
import dr2 from '../images/dr2.svg'
import { FaAnglesRight } from "react-icons/fa6";
import { CiMedal } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import Footer from '../componants/Footer';
import Navbar from '../componants/Navbar.jsx'
import { useNavigate } from 'react-router-dom';

function Doctorspage() {
  const navigate = useNavigate()
  const [searchInput, setSearchInput] = React.useState('')
  const doctors_team = [
    {
      id: 1,
      Image: dr1,
      name: "Dr Mri",
      dept: "Pediatrics",
      experience: "56 Years",
      successRate: "90%",
      patients: 8,
      qualifications: "MBBS, MD Pediatrics",
      location: "Ahmedabad",
      consultationFee: "₹6",
      availability: "Available",
      about: "Experienced pediatrician with a strong track record in child healthcare."
    },
    {
      id: 2,
      Image: dr2,
      name: "Dr Vijay",
      dept: "Neurology",
      experience: "12 Years",
      successRate: "85%",
      patients: 120,
      qualifications: "MBBS, DM Neurology",
      location: "Surat",
      consultationFee: "₹500",
      availability: "Available",
      about: "Expert in brain and nervous system disorders with modern treatment methods."
    },
    {
      id: 3,
      Image: dr1,
      name: "Dr Rohit",
      dept: "Pediatrics",
      experience: "5 Years",
      successRate: "88%",
      patients: 60,
      qualifications: "MBBS, DCH",
      location: "Rajkot",
      consultationFee: "₹300",
      availability: "Unavailable",
      about: "Focused on child wellness and preventive care."
    },
    {
      id: 4,
      Image: dr2,
      name: "Dr Kevin",
      dept: "Neurology",
      experience: "12 Years",
      successRate: "92%",
      patients: 200,
      qualifications: "MBBS, DM Neurology",
      location: "Vadodara",
      consultationFee: "₹700",
      availability: "Available",
      about: "Highly experienced neurologist with excellent patient recovery rate."
    }
  ]
  const [searchedr, setsearchdr] = React.useState(doctors_team)


  const handleSearch = (e) => {
    let inpvalue = searchInput.toLowerCase()
    const search = doctors_team.filter((drdata) => drdata.name.toLowerCase().includes(inpvalue) || drdata.dept.toLowerCase().includes(inpvalue))
    setsearchdr(search)
  }

  const handleBtnClick = (path, data) => {
    navigate(path, { state: data })
  }


  useEffect(() => {
    handleSearch()
  }, [searchInput])

  return (
    <>
      <Navbar />
      <div className='drpage'>
        <h1>Our Medical Experts</h1>
        <p>Find your ideal doctor by name or specialization</p>
        <div className="searchBox">
          <FaSearch className='icon' />
          <input type="text" placeholder="Search Doctors by name and specialization " onChange={(e) => {
            handleSearch(e)
            setSearchInput(e.target.value)
          }}

            value={searchInput}
          />
          {searchInput ?
            <RxCross2 className='icon' onClick={() => {
              setSearchInput('')
              handleSearch()
            }} />
            :
            <></>}

        </div>

        <div className="cards">

          {
            searchedr.length == 0 ? <p style={{ height: "250px" }}>No doctors found matching your search criteria.</p> :

              searchedr.map((e) => {
                return (
                  <div className='drcard'>
                    <img src={e.Image} alt="" />
                    <h2>{e.name}</h2>
                    <h4>{e.dept}</h4>
                    <div><CiMedal className='me-2' />{e.Exp}</div>
                    <button onClick={() => { handleBtnClick('/doctor-profile', e) }}><FaAnglesRight className='mx-1 mb-1' />Book Now </button>
                  </div>
                )
              })

          }


        </div>

        <div className="blob1"></div>
        <div className="blob2"></div>
      </div>
      <Footer />
    </>
  )
}

export default Doctorspage
