import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.webp'
import { CiUser } from "react-icons/ci";
import { FiKey } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


function BootstrapNavbar() {
  const navigate = useNavigate()


  const handleBtnClick = (path) => {
    console.log('btn is click ')
    navigate(path)
  }

  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container className='navContainer'>
        <div className="logo">
          <img src={logo} alt="" />
          <div className="logoText">
            <h3>MediCare</h3>
            <p>HealthCare Solution</p>
          </div>
        </div>

        <Nav className="navBarLinks py-1" >
          <NavLink to="/" className={({ isActive }) => isActive ? "activeLink" : "inactiveLink"} >Home</NavLink>
          <NavLink to="/doctors" className={({ isActive }) => isActive ? "activeLink" : "inactiveLink"} >Doctor</NavLink>
          <NavLink to="/service" className={({ isActive }) => isActive ? "activeLink" : "inactiveLink"} >Services</NavLink>
          <NavLink to="/appoiments" className={({ isActive }) => isActive ? "activeLink" : "inactiveLink"} >Appoiment</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "activeLink" : "inactiveLink"} >Contact</NavLink>
        </Nav>
        <div className='navButtons'>
          <button className='AdminBtn' onClick={() => {
            handleBtnClick('/doctor-login')
          }}><FaRegUser style={{ margin: "5px" }} />Doctor Admin </button>
          <button className='loginBtn px-3'><FiKey style={{ margin: "5px" }} />Login</button>
        </div>
      </Container>
    </Navbar >
  );
}

export default BootstrapNavbar;