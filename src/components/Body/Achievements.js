import React from 'react'
import './Achievements.css'
import optum from '../Resources/Photos/Optum.jpg'
import hult from '../Resources/Photos/HultPrize.jpg'
import accenture from '../Resources/Photos/Accenture.jpg'
function Achievements() {
    return (
        <section className='achievements-section'>
            <div className='main-achievements'>
                <div className='main-achievements-heading'>
                    <h1>Achievements</h1>
                </div>
                <div className='main-achievements-body'>
                    <div className='achievement-item'>
                        <div className='achievement-item-heading'>
                            Optum Stratethon-Season 3
                        </div>
                        <div className='achievement-item-body'>
                            <div className='achievement-item-img'>
                                <img className='achievement-item-img-tag' src={optum} alt='img'/>
                            </div>
                            <div className='achievement-item-text'>
                                <div className='achievement-item-award'>
                                    <ul>
                                        <li>Living our Values Award Winner</li>
                                        <li>First Place in the Institute</li>
                                    </ul>
                                </div>
                                <div className='achievement-item-description'>
                                    Designed and determined a way to increase medical adherence in adults. Specifically designed for diabetes due to its alarming cases.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='achievement-item'>
                        <div className='achievement-item-heading'>
                            Accenture Innovation Challenge
                        </div>
                        <div className='achievement-item-body'>
                            <div className='achievement-item-img'>
                                <img className='achievement-item-img-tag' src={accenture} alt='img'/>
                            </div>
                            <div className='achievement-item-text'>
                                <div className='achievement-item-award'>
                                    Among the Top 20 teams in the Nationwide Hackathon
                                </div>
                                <div className='achievement-item-description'>
                                    Designed a Smart Desk which could automatically adjust to users preffered height just by scanning a QR from Mobile App. Useful in Corporate Workspaces with Hybrid working models.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='achievement-item'>
                        <div className='achievement-item-heading'>
                            Hult Prize 2021
                        </div>
                        <div className='achievement-item-body'>
                            <div className='achievement-item-img'>
                                <img className='achievement-item-img-tag' src={hult} alt='img'/>
                            </div>
                            <div className='achievement-item-text'>
                                <div className='achievement-item-award'>
                                    Regional Finalists in Mumbai Impact Summits
                                </div>
                                <div className='achievement-item-description'>
                                    Designed a model to sell produce directly from farmers to small restaurent owners. This will help them get better quality produce at lower prices, which can make them capable to compete with the big players.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements
