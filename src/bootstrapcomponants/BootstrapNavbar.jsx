import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.webp'
import { CiUser } from "react-icons/ci";
import { FiKey } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";


function BootstrapNavbar() {
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

        <Nav className="navBarLinks">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">doctor</Nav.Link>
          <Nav.Link href="#pricing">Services</Nav.Link>
          <Nav.Link href="#pricing">Appoiments</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
        <div className='navButtons'>
          <button className='AdminBtn'><FaRegUser style={{ margin: "5px" }} />Doctor Admine </button>
          <button className='loginBtn px-3'><FiKey style={{ margin: "5px" }} />Login</button>
        </div>
      </Container>
    </Navbar >
  );
}

export default BootstrapNavbar;