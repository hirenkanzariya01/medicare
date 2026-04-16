import React from 'react'
import Logo from '../images/logo.webp'
import { NavLink } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";

function DoctorLogin() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
  <>
    <div className="login-container">
    <NavLink to='/' className='backLink'><FaArrowLeft /> Back to Home</NavLink>
      <form className="login-box" onSubmit={handleSubmit}>
        <img src={Logo} width='120px' alt="logo image" />
        <h2>Doctor Admin</h2>
        <p>Sign in to manage your profile & schedule</p>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  </>
  );
}

export default DoctorLogin
