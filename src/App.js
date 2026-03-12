import React from 'react'
import Homepage from './pages/Homepage'
import DoctorsPage from './pages/Doctorspage'
import ServicesPage from './pages/Servicespage'
import Appoimentspage from './pages/Appoimentspage'
import ContactPage from './pages/Contactpage'
import Navbar from './componants/Navbar'
import Footer from './componants/Footer'


// https://doctor-frontend-141j.onrender.com/


import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/appoiments" element={<Appoimentspage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App
