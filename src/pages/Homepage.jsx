import React from 'react'
import Navbar from '../componants/Navbar.jsx'
import HeroSection from '../componants/HeroSection.jsx'
import Certificed from '../componants/Certificed.jsx'
import Medicalteam from '../componants/Medicalteam.jsx'



function Homepage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <hr style={{ color: "#15db96ee", border: "3px solid", padding: "0px" }} />
      <Certificed />
      <Medicalteam />
    </div>
  )
}

export default Homepage
