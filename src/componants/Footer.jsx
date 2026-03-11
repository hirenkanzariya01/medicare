import React from 'react'
import logo from '../images/logo.webp'
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { RiTelegram2Line } from "react-icons/ri";
import { LuFacebook } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { SlSocialTwitter } from "react-icons/sl";
import { LuLinkedin } from "react-icons/lu";
import { LuYoutube } from "react-icons/lu";
import { FaStethoscope } from "react-icons/fa";
import { TbActivity } from "react-icons/tb";
import { BiInjection } from "react-icons/bi";


function Footer() {
  return (
    <div className="mainFooter">
      <div className='footerTabs'>
        <div className="first">
          <div className="logo">
            <img src={logo} alt="" />
            <div className="logoText">
              <h3>MediCare</h3>
              <p>HealthCare Solution</p>
            </div>
          </div>

          <p>Your trusted partner in healthcare innovation. We're committed to providing exceptional medical care with cutting-edge technology and compassionate service.</p>

          <div className="contactInfo">
            <div className="information"><div className='icon'><FiPhone /></div><div>7894561230</div> </div>
            <div className="information"><div className='icon'><IoMailOutline /></div><div>mail123@gmail.com</div> </div>
            <div className="information"><div className='icon'><IoLocationOutline /></div><div>Surendranagar , Gujarat</div> </div>
          </div>
        </div>
        <div className="second">
          <h3>Quick Links</h3>
          <div className="links">
            <div className="link"><div className="icon"><FaArrowRight /></div>Home</div>
            <div className="link"><div className="icon"><FaArrowRight /></div>Doctors</div>
            <div className="link"><div className="icon"><FaArrowRight /></div>Services</div>
            <div className="link"><div className="icon"><FaArrowRight /></div>Contacts</div>
            <div className="link"><div className="icon"><FaArrowRight /></div>Appoiments</div>
          </div>
        </div>
        <div className="third">
          <h3>Quick Links</h3>
          <div className="links">
            <div className="link"><div className="dot"><GoDotFill /></div>
              Blood Pressure Check</div>
            <div className="link"><div className="dot"><GoDotFill /></div>Blood Sugar Test</div>
            <div className="link"><div className="dot"><GoDotFill /></div>Full Blood Count</div>
            <div className="link"><div className="dot"><GoDotFill /></div>X-Ray Scan</div>
            <div className="link"><div className="dot"><GoDotFill /></div>Blood Sugar Test</div>
          </div>
        </div>
        <div className="fourth">
          <h3>Stay Connected</h3>
          <p>Subscribe for health tips, medical updates, and wellness insights delivered to your inbox.</p>
          <div className="inputField">
            <input type="text" placeholder='Enter Email' />
            <button><RiTelegram2Line /> Subscribe</button>
          </div>
          <div className="socialMedia">
            <div className="icon"><LuFacebook /></div>
            <div className="icon"><LuInstagram /></div>
            <div className="icon"><SlSocialTwitter /></div>
            <div className="icon"><LuLinkedin /></div>
            <div className="icon"><LuYoutube /></div>
          </div>
        </div>
        <div className="animatedIcon1">
          <FaStethoscope />
        </div>
        <div className="animatedIcon2">
          <TbActivity />

        </div>
        <div className="animatedIcon3">
          <BiInjection />
        </div>
      </div>
      <hr style={{ margin: "0px 130px " }} />
      <div className="copyright">
        <p>© 2026 MediCare Healthcare.</p>
        <p>Develope by Hiren k. </p>
      </div>

    </div>
  )
}

export default Footer
