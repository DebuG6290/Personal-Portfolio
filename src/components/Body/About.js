import React, { useEffect } from 'react'
import './About.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import gfg from '../Resources/Photos/geeksforgeeks.png'
import leetcode from '../Resources/Photos/leetcode.png'
import codeforces from '../Resources/Photos/codeforces.png'
import codechef from '../Resources/Photos/codechef.png'

function About() {
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])
    return (
        <section  className='about-section'>
            <div data-aos='fade-up' className='main-about'>
                <div className='name-about'>
                <div className='about-heading'>
                    <div className='about-head-1'>
                        <h1>Hi, I'm Devansh.</h1>
                    </div>
                    <div className='about-head-2'>
                        
                    </div>
                </div>
                <div className='about-desc'>
                    I am a 3rd Year Undergraduate student at NIT Durgapur,
                    pursuing Electronics and Communication. I am fond of learning
                    and applying new technologies.
                </div>
            </div>
            <div className='coding-profiles'>
                {/* <div className='coding-profiles-heading'>
                    Coding Profiles
                </div> */}
                <div className='coding-profiles-body'>
                <a href='https://www.codechef.com/users/debugi' target='blank'><div className='coding-profile-item'>
                        <div className='coding-profile-logo'>
                            <img src={codechef} alt='img'/>
                        </div>
                        <div className='coding-profile-name'>
                            CodeChef
                        </div>
                    </div></a>
                    <a href='https://codeforces.com/profile/Debugi' target='blank'><div className='coding-profile-item'>
                        <div className='coding-profile-logo'>
                            <img src={codeforces} alt='img'/>
                        </div>
                        <div className='coding-profile-name'>
                            CodeForces
                        </div>
                    </div></a>
                    <a href='https://leetcode.com/debugi/' target='blank'><div className='coding-profile-item'>
                        <div className='coding-profile-logo'>
                            <img src={leetcode} alt='img'/>
                        </div>
                        <div className='coding-profile-name'>
                            LeetCode
                        </div>
                    </div></a>
                    <a href='https://auth.geeksforgeeks.org/user/goyaldevansh19991999/profile' target='blank'><div className='coding-profile-item'>
                        <div className='coding-profile-logo'>
                            <img src={gfg} alt='img'/>
                        </div>
                        <div className='coding-profile-name'>
                            GeeksForGeeks
                        </div>
                    </div></a>
                </div>
                </div>
            </div>
        </section>
    )
}

export default About
