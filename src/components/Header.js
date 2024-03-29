import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <img src="./logo123.png" alt="logo" width="100"></img>
      <nav>
        <Link className='nav-links' to="/residencies">Residencies</Link>
        <Link className='nav-links' to="/our-value">Our Value</Link>
        <Link className='nav-links' to="/contact-us">Contact Us</Link>
        <Link  className='nav-links' to="/get-started">Get Started</Link>
      </nav>
    </header>
    
  );
}

export default Header;