import React from 'react';
import logo from '../logo.png';
import "./styles/Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navcontainer">
        <div className="navbar-content">
          <img className="logo" src={logo} alt="logo" />
          <span className="site-name" href="/">RIPAN</span>
        </div>
        <div className="navbar-links">
          <ul className="nav-list">
            <li>
              <span className="button menu-button"><i className="fas fa-arrow-alt-circle-down"></i>Menu</span>
              <div className="submenu">
                <span className="submenu-title">Admin</span>
                <a href="/admin/login">Admin Login</a>
                <a href="/admin/dashboard">Admin Dashboard</a>
                <div className="submenu-divider"></div>
                <span className="submenu-title">Users</span>
                <a href="/login">Login</a>
                <a href="/signup">Register</a>
                <div className="submenu-divider"></div>
                <span className="submenu-title">More</span>
                <a href="/">Home</a>
                <a href="/about">About Us</a>
                <a href="/courses">Our Courses</a>
                <a href="/wall-of-fame">Wall Of Fame</a>
                <a href="/contact-us">Contact Us</a>
              </div>
            </li>
            <li><a className="button" href="/login" ><i className="fas fa-arrow-alt-circle-down"></i>Login</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
