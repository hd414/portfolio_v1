import React from 'react';
import './navbar.styles.css';
import logo from '../../assets/letterh.svg';
import { Link, useLocation } from 'react-router-dom';
import cv from '../../assets/cv.pdf';
const Navbar = () => {

    const fun = () => {
        const a = document.getElementsByClassName('menu-btn')[0];
        a.checked = false;
    }

    const location = useLocation();

    return (
        <div>

            <nav className="navigation">

                <Link to="/" className="logo">
                    <img className="logo-svg" src={logo} style={{ height: "60px", width: "60px" }} alt="logo" />
                </Link>

                <input type="checkbox" className="menu-btn" id="menu-btn" />
                <label htmlFor="menu-btn" className="menu-icon">
                    <span className="nav-icon"></span>
                </label>

                <ul className="menu">
                    <li><Link style={{ textDecoration: 'none' }} to="/" className={` ${location.pathname === '/' ? 'active-link' : ''}`}>Home</Link  ></li>
                    <li><Link style={{ textDecoration: 'none' }} to="/about" className={` ${location.pathname === '/about' ? 'active-link' : ''}`}>About</Link  ></li>
                    <li><Link style={{ textDecoration: 'none' }} to="/skills" className={` ${location.pathname === '/skills' ? 'active-link' : ''}`}>Skills</Link  ></li>
                    <li><Link style={{ textDecoration: 'none' }} to="/projects" className={` ${location.pathname === '/projects' ? 'active-link' : ''}`}>Projects</Link  ></li>
                    <li><Link style={{ textDecoration: 'none' }} to="/contact" className={` ${location.pathname === '/contact' ? 'active-link' : ''}`}>Contact</Link  ></li>
                </ul>

                <a style={{ textDecoration: 'none' }} href={cv} className="sign-up-btn">Resume</a>




                <nav className="nav-2">

                    <ul className="menu-2">
                        <li><Link style={{ textDecoration: 'none' }} onClick={fun} to="/" className={` ${location.pathname === '/' ? 'active-link' : ''}`}>Home</Link  ></li>
                        <li><Link style={{ textDecoration: 'none' }} onClick={fun} to="/about" className={` ${location.pathname === '/about' ? 'active-link' : ''}`}>About</Link  ></li>
                        <li><Link style={{ textDecoration: 'none' }} onClick={fun} to="/skills" className={` ${location.pathname === '/skills' ? 'active-link' : ''}`}>Skills</Link  ></li>
                        <li><Link style={{ textDecoration: 'none' }} onClick={fun} to="/projects" className={` ${location.pathname === '/projects' ? 'active-link' : ''}`}>Projects</Link  ></li>
                        <li><Link style={{ textDecoration: 'none' }} onClick={fun} to="/contact" className={` ${location.pathname === '/contact' ? 'active-link' : ''}`}>Contact</Link  ></li>
                    </ul>
                    <a style={{ textDecoration: 'none' }} href={cv} className="sign-up-btn-2">Resume</a>
                </nav>
            </nav>
        </div >
    );
}

export default Navbar;
