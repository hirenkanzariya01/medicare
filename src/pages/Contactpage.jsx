import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMyLocation } from "react-icons/md";
import { MdOutlineMedicalServices } from "react-icons/md";
import { LuMessageSquareText } from "react-icons/lu";
import { FaTelegramPlane } from "react-icons/fa";

function Contactpage() {
  return (
    <div className='contactpage'>
      <div className="left">
        <h1>Contact Our Clinic</h1>
        <p>Fill the form — we'll open WhatsApp so you can connect with us instantly</p>

        <form >
          <div className="row1">
            <div className="name">
              <label htmlFor=""><FaRegUser />Full Name</label>
              <input type="text" placeholder='Full Name' />
            </div>
            <div className="email">
              <label htmlFor=""><MdOutlineMail />Email</label>
              <input type="text" placeholder='example@domain.com' />
            </div>
          </div>
          <div className="row1">
            <div className="phone">
              <label><MdOutlinePhone /> Phone</label>
              <input type="text" placeholder='1234567890' />
            </div>
            <div className="Deperment">
              <label><MdOutlineMyLocation /> Deperment</label>
              <select name="" id="">
                <option value="">Select Departmant</option>
                <option value="Genral Physical">Genral Physical</option>
                <option value="Cardilogist">Cardilogist</option>
                <option value="Orthopadics">Orthopadics</option>
                <option value="Dertmalogist">Dertmalogist</option>
              </select>
            </div>
          </div>
          <div className="services">
            <label><MdOutlineMedicalServices />Services</label>
            <select name="" id="">
              <option value="">Select Departmant</option>
              <option value="Genral Physical">Genral Physical</option>
              <option value="Cardilogist">Cardilogist</option>
              <option value="Orthopadics">Orthopadics</option>
              <option value="Dertmalogist">Dertmalogist</option>
            </select>
          </div>
          <div className="message">
            <label><LuMessageSquareText />Message</label>
            <textarea name="" id="" placeholder='Describe your concaran brtefly' style={{ "outline": "2px solid #009A63" }}></textarea>
          </div>
          <button>
            <FaTelegramPlane className='me-1' /> Send Via WahtsApp
          </button>
        </form>
      </div>


      <div className="right">
        <div className="first">
          <h2>Visit Our Clinic</h2>
          <p>Gomtinagar, Lucknow, Uttar Pradesh</p>
          <p><MdOutlinePhone className='me-1' />8299431275</p>
          <p><MdOutlineMail className='me-1' />info@yourclinic.com</p>
        </div>
        <div className="second">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2065.290472350891!2d71.62773923996232!3d22.73087492464505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x72a8ffd2b5247a5%3A0x839b2d28e8a78f01!2sShakti%20Education%20Institute%20%E2%80%93%20Graphic%20Design%2C%20Digital%20Marketing%20%26%20Web%20Development%20Courses!5e0!3m2!1sen!2sin!4v1773668790072!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="third">
          <h2>Clinic Hours</h2>
          <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
        </div>
      </div>

      <div className="blob3"></div>
      <div className="blob4"></div>
    </div>
  )
}

export default Contactpage
