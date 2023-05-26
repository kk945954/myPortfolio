import React from 'react'
import Typewriter from 'typewriter-effect';
import '../styles/Profile.css'
import ScrollScreens from '../utilities/scrollScreens';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz profile-icon'>
                        <div className='colz-icon profile-icons'>
                            <a href='https://www.linkedin.com/in/po-yu-chen-305576150'>
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href='https://github.com/kk945954'>
                                <i className='bi bi-github'></i>
                            </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            Hello! My name is <span className='highlighted-text'>Po Yu Chen</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            <h1>
                                I'm a
                                <Typewriter
                                    options={{
                                        strings: ['Full Stack | Web Dev💻', 'Dedicated Engineer🔥', 'Ramen Lover🍜'],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 30,
                                        delay: 50,
                                    }}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Enthusiastic and hardworking web developer with a passion for learning and creating.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn' onClick={() => ScrollScreens.scrollHandler.scrollToHireMe()}>Contact Me</button>
                        <a href='Po Yu Chen_resume.pdf' download='Po Yu Chen_resume.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    )
}
