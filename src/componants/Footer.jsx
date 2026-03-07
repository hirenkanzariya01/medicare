import React from 'react'
import logo from '../images/logo.webp'
function Footer() {
  return (
    <div>
      <div className="first">
         <div className="logo">
          <img src={logo} alt="" />
          <div className="logoText">
            <h3>MediCare</h3>
            <p>HealthCare Solution</p>
          </div>
        </div>
      </div>
      <div className="second"></div>
      <div className="third"></div>
      <div className="four"></div>
    </div>
  )
}

export default Footer
