import React from 'react'
import Navbar from '../componants/Navbar.jsx'
import HeroSection from '../componants/HeroSection.jsx'
import Certificed from '../componants/Certificed.jsx'
import Medicalteam from '../componants/Medicalteam.jsx'
import Review from '../componants/Review.jsx'


function Homepage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <hr style={{ color: "#15db96ee", border: "3px solid", padding: "0px" }} />
      <Certificed />
      <Medicalteam />

      <Review />
      <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, similique rem aliquid error dolorum eaque eum neque fugit, tempora atque fugiat doloremque animi. Molestiae, iste nisi quam vero quaerat animi.</h1>
    </div>
  )
}

export default Homepage
