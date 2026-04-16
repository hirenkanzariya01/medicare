import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import dr1 from '../images/dr1.png'
import dr2 from '../images/dr2.svg'
import { FaAnglesRight } from "react-icons/fa6";
import { CiMedal } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import Footer from '../componants/Footer';
import Navbar from '../componants/Navbar.jsx'

function Servicespage() {

  const [searchInput, setSearchInput] = React.useState('')
  const doctors_team = [
    {
      id: 1,
      Image: dr1,
      name: "Primary Care",
    },
    {
      id: 2,
      Image: dr2,
      name: "Diagnostics and Support",

    }, {
      id: 3,
      Image: dr1,
      name: "Rehabilitation and Care",

    },
    {
      id: 4,
      Image: dr2,
      name: "Blood Test",

    }
  ]
  const [searchedr, setsearchdr] = React.useState(doctors_team)


  const handleSearch = (e) => {
    let inpvalue = searchInput.toLowerCase()
    const search = doctors_team.filter((drdata) => drdata.name.toLowerCase().includes(inpvalue))
    setsearchdr(search)
  }

  useEffect(() => {
    handleSearch()
  }, [searchInput])

  return (
    <>
    <Navbar />
      <div className='drpage'>
        <h1>Our Diagnostic Services</h1>
        <p>Safe, accurate & reliable testing.</p>
        <div className="searchBox">
          <FaSearch className='icon' />
          <input type="text" placeholder="Search Services " onChange={(e) => {
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
            searchedr.length == 0 ? <p style={{ height: "250px" }}>No Service found matching your search criteria.</p> :

              searchedr.map((e) => {
                return (
                  <div className='drcard'>
                    <img src={e.Image} alt="" />
                    <h4 style={{
                      padding: '15px 0 0 0', textAlign: 'center '
                    }}>{e.name}</h4>
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

export default Servicespage
