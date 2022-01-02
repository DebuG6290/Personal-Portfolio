import React, {useEffect} from 'react'
import './Skills.css'
import html from '../Resources/Photos/html.png'
import css from '../Resources/Photos/css-3.png'
import javascript from '../Resources/Photos/js.png'
import algorithm from '../Resources/Photos/algorithm (1).png'
import react from '../Resources/Photos/react.png'
import cpp from '../Resources/Photos/c-.png'
import iot from '../Resources/Photos/motherboard.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

function Skills() {
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])
    return (
        <section className='skills-section'>
            <div className='main-skills'>
                <div className='main-skills-heading'>
                    <h1>Skills</h1>
                </div>
                <div className='deriv-skills'>
                    <div className='lang skills'>
                        <div className='lang skills-heading'>
                            Languages & Libraries
                        </div>
                        <div className='lang skills-content'>
                            <div className='lang skills-item'>
                                <img src={html} alt='img' className='skills-img'/>
                                HTML
                            </div>
                            <div className='lang skills-item'>
                                <img src={javascript} alt='img' className='skills-img'/>
                                JavaScript
                            </div>
                            <div className='lang skills-item'>
                                <img src={css} alt='img' className='skills-img'/>
                                CSS
                            </div>
                            <div className='lang skills-item'>
                                <img src={react} alt='img' className='skills-img'/>
                                React
                            </div>
                            <div className='lang skills-item'>
                                <img src={cpp} alt='img' className='skills-img'/>
                                C++
                            </div>
                        </div>
                    </div>
                    <div className='other skills'>
                        <div className='other skills-heading'>
                            Others
                        </div>
                        <div className='other skills-content'>
                            <div className='other skills-item'>
                                <img src={algorithm} alt='img' className='skills-img'/>
                                Data Structures & Algo
                            </div>
                            <div className='other skills-item'>
                                <img src={iot} alt='img' className='skills-img'/>
                                Internet of Things
                            </div>
                            <div className='other skills-item'>
                                
                            </div>
                            <div className='other skills-item'>
                                
                            </div>
                            <div className='other skills-item'>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
