import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => (
  <header>
   <div className="logo-container">
      <img src={`${process.env.PUBLIC_URL}/image/devasthanamlogo.png`} alt="Temple Logo" className="logo" />
      <h1>Sri Lakshmi Ganapathi Hanumatheesawara Temple</h1>
    </div>
    <nav>
      <ul className='nav-li'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/donations">Donations</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
