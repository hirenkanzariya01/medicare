import React from 'react'
import Navbar from '../componants/Navbar.jsx'
import HeroSection from '../componants/HeroSection.jsx'
import Certificed from '../componants/Certificed.jsx'
import Medicalteam from '../componants/Medicalteam.jsx'
import Review from '../componants/Review.jsx'
import Footer from '../componants/Footer.jsx'

function Homepage() {
  return (
    <div>
     
      <HeroSection />
      <hr style={{ color: "#15db96ee", border: "3px solid", padding: "0px" }} />
      <Certificed />
      <Medicalteam />

      <Review />
      <Footer />
    </div>
  )
}

export default Homepage
