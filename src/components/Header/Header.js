import React from 'react'
import './Header.css'
// import {TiAdjustBrightness} from 'react-icons/ti'
import {FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi';
import Logo from '../Resources/Photos/d-tag1.png'
import {Link} from 'react-scroll'



function Header() {
    return (
            <div className='header-main'>
                <Link activeClass="active" containerId='main-section-id' hashSpy={true} spy={true} smooth={true} offset={-70} duration={1200} className='navbar-link-link' to='about-section'>
                <div className='header-logo'>
                    <img className='logo-img' src={Logo} alt='devansh_goyal'/>
                    <div className='logo-name'>Devansh Goyal</div>
                </div>
                </Link>
                <div className='header-functions'>
                    <div className='resume'>
                        <a target='blank' href='https://drive.google.com/file/d/1AXV1WQer00bVUS0DbkPfO4sm-q-3Ih93/view?usp=sharing' className='resume-btn'>Resume</a>
                    </div>
                    <div className='social-profiles'>
                        {/* add the profile btns */}
                        <a target='blank' href='https://www.instagram.com/debugi99/'><button className='social-profile-btn'><FaInstagram/></button></a>
                        <a target='blank' href='https://www.linkedin.com/in/devansh-goyal-6b91a514b/'><button className='social-profile-btn'><FaLinkedinIn/></button></a>
                        <a target='blank' href='https://github.com/DebuG6290'><button className='social-profile-btn'><FaGithub/></button></a>
                        <a target='blank' href='mailto:goyaldevansh19991999@gmail.com'><button className='social-profile-btn'><FiMail/></button></a>
                    </div>
                    {/* <div className='toggle-mode'>
                        <button className='toggle-mode-btn'><TiAdjustBrightness/></button>
                    </div> */}
                </div>
            </div>
    )
}

export default Header

