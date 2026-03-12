import React from 'react'
import { FaSearch } from "react-icons/fa";
import dr1 from '../images/dr1.png'
import dr2 from '../images/dr2.svg'
import { FaAnglesRight } from "react-icons/fa6";
import { CiMedal } from "react-icons/ci";


function Doctorspage() {
  const [searchedr, setsearchdr] = React.useState([])


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
      name: "Dr kevin",
      dept: "Brain",
      Exp: "12 years Experience"
    }, {
      id: 1,
      Image: dr1,
      name: "Dr Mri",
      dept: "Pediatrics",
      Exp: "5 years Experience"
    },
    {
      id: 2,
      Image: dr2,
      name: "Dr kevin",
      dept: "Brain",
      Exp: "12 years Experience"
    }
  ]

  return (
    <div className='drpage'>
      <h1>Our Medical Experts</h1>
      <p>Find your ideal doctor by name or specialization</p>
      <div className="searchBox">
        <FaSearch className='icon' />
        <input type="text" placeholder="Search Doctors by name and specialization " />
        
      </div>

      <div className="cards">
        {
          doctors_team.map((e) => {
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
  )
}

export default Doctorspage
