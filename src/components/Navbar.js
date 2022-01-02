import React from 'react'
// import {Link} from 'react-router-dom';
import { Link } from "react-scroll";
import './Navbar.css'
// import { AiOutlineUser } from "react-icons/ai";
import { BsFillPuzzleFill, BsFillTelephoneFill, BsPersonFill, BsTools, BsTrophyFill } from "react-icons/bs";

function Navbar() {
    return (
        <div className='main-navbar'>
            <nav className='navbar-links'>
                <ul className='navbar-links-list'>
                    {/* <li className='navbar-link'>
                        <Link to='/'>About</Link>
                    </li>
                    <li className='navbar-link'>
                        <Link to='/skills'>Skills</Link>
                    </li>
                    <li className='navbar-link'>
                        <Link to='/projects'>Projects</Link>
                    </li>
                    <li className='navbar-link'>
                        <Link to='/acheivements'>Acheivements</Link>
                    </li>
                    <li className='navbar-link'>
                        <Link to='/contact'>Contact</Link>
                    </li> */}
                    <li className='navbar-link'>
                        <Link activeClass="active" containerId='main-section-id' hashSpy={true} spy={true} smooth={true} offset={-70} duration={1200} className='navbar-link-link' to='about-section'><div className='total-section-description'><BsPersonFill/><div className='section-description'>About</div></div></Link>
                    </li>
                    <li className='navbar-link'>
                        <Link  activeClass="active" containerId='main-section-id' hashSpy={true} spy={true} smooth={true} offset={-70} duration={1200} className='navbar-link-link' to='skills-section'><div className='total-section-description'><BsTools/><div className='section-description'>Skills</div></div></Link>
                    </li>
                    <li className='navbar-link'>
                        <Link activeClass="active" containerId='main-section-id' hashSpy={true} spy={true} smooth={true} offset={-70} duration={1200} className='navbar-link-link' to='projects-section'><div className='total-section-description'><BsFillPuzzleFill/><div className='section-description'>Projects</div></div></Link>
                    </li>
                    <li className='navbar-link'>
                        <Link activeClass="active" containerId='main-section-id' hashSpy={true} spy={true} smooth={true} offset={-70} duration={1200} className='navbar-link-link' to='acheivements-section'><div className='total-section-description'><BsTrophyFill/><div className='section-description'>Acheivements</div></div></Link>
                    </li>
                    <li className='navbar-link'>
                        <Link activeClass="active" containerId='main-section-id' hashSpy={true} spy={true} smooth={true} offset={-70} duration={1200} className='navbar-link-link' to='contact-section'><div className='total-section-description'><BsFillTelephoneFill/><div className='section-description'>Contact</div></div></Link>
                    </li>
                </ul>
            </nav>
            
        </div>
    )
}

export default Navbar
