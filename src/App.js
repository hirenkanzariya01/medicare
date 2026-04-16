import React from 'react'
import Homepage from './pages/Homepage'
import DoctorsPage from './pages/Doctorspage'
import ServicesPage from './pages/Servicespage'
import Appoimentspage from './pages/Appoimentspage'
import ContactPage from './pages/Contactpage'

import DoctorLogin from './pages/DoctorLogin'
import DoctorProfile from './pages/DoctorProfile'
// https://doctor-frontend-141j.onrender.com/


import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/appoiments" element={<Appoimentspage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/doctor-login' element={<DoctorLogin />} />
        <Route path = '/doctor-profile' element={<DoctorProfile />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
