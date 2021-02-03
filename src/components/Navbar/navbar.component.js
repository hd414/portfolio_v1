import React from 'react';
import './navbar.styles.css';
import logo from '../../assets/logo4.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>

            <nav className="navigation">

                <a as={Link} to="/" href="#home" className="logo">
                    <img src={logo} style={{ height: "60px", width: "60px" }} />
                </a>

                <input type="checkbox" className="menu-btn" id="menu-btn" />
                <label for="menu-btn" className="menu-icon">
                    <span className="nav-icon"></span>
                </label>

                <ul className="menu">
                    <li><Link style={{ textDecoration: 'none' }} to="/" className="a">Home</Link  ></li>
                    <li><Link style={{ textDecoration: 'none' }} to="/about">About</Link  ></li>
                    <li><Link style={{ textDecoration: 'none' }} to="/skills">Skills</Link  ></li>
                    <li><Link style={{ textDecoration: 'none' }} to="/projects">Projects</Link  ></li>
                    <li><Link style={{ textDecoration: 'none' }} to="/contact">Contact</Link  ></li>
                </ul>

                <Link style={{ textDecoration: 'none' }} to="/resune" className="sign-up-btn">Resume</Link  >




                <nav className="nav-2">

                    <ul className="menu-2">
                        <li><Link style={{ textDecoration: 'none' }} to="/" className="a">Home</Link  ></li>
                        <li><Link style={{ textDecoration: 'none' }} to="/about">About</Link  ></li>
                        <li><Link style={{ textDecoration: 'none' }} to="/skills">Skills</Link  ></li>
                        <li><Link style={{ textDecoration: 'none' }} to="/projects">Projects</Link  ></li>
                        <li><Link style={{ textDecoration: 'none' }} to="/contact">Contact</Link  ></li>
                    </ul>
                    <Link style={{ textDecoration: 'none' }} to="/resune" className="sign-up-btn-2">Resume</Link  >
                </nav>
            </nav>
        </div>
    );
}

export default Navbar;
