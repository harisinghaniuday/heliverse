import React from 'react'
import logo from './Assets/MotionArtEffect-logo.png';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="nav-logo">
        <img src={logo}/>
      </div>
      <div className="nav-button">
        Buy Now
      </div>
    </nav>
  )
}

export default Navbar