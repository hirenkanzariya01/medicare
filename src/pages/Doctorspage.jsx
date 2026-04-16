import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import dr1 from '../images/dr1.png'
import dr2 from '../images/dr2.svg'
import { FaAnglesRight } from "react-icons/fa6";
import { CiMedal } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import Footer from '../componants/Footer';

function Doctorspage() {

  const [searchInput, setSearchInput] = React.useState('')
  const doctors_team = [
    {
      id: 1,
      Image: dr1,
      name: "Dr Mri",
      dept: "Pediatrics",
      Exp: "5 years Experience"
    },
    {
      id: 2,
      Image: dr2,
      name: "Dr Vijay",
      dept: "Brain",
      Exp: "12 years Experience"
    }, {
      id: 3,
      Image: dr1,
      name: "Dr rohit",
      dept: "Pediatrics",
      Exp: "5 years Experience"
    },
    {
      id: 4,
      Image: dr2,
      name: "Dr kevin",
      dept: "Brain",
      Exp: "12 years Experience"
    }
  ]
  const [searchedr, setsearchdr] = React.useState(doctors_team)


  const handleSearch = (e) => {
    let inpvalue = searchInput.toLowerCase()
    const search = doctors_team.filter((drdata) => drdata.name.toLowerCase().includes(inpvalue) || drdata.dept.toLowerCase().includes(inpvalue))
    setsearchdr(search)
  }

  useEffect(() => {
    handleSearch()
  }, [searchInput])

  return (
    <>
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
                    <button><FaAnglesRight className='mx-1 mb-1' />Book Now </button>
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
