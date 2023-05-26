import React, { useEffect } from 'react';
import '../styles/About.css';
import ScreenHeading from '../components/ScreenHeading';
import ScrollScreens from '../utilities/scrollScreens';
import Animations from '../utilities/animations';
import Lottie from 'lottie-react';
import animationData from '../assets/Home/web-development-animation.json';

export default function About(props) {
  

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) {
      return;
    }
    Animations.animations.fadeInScreen(props.id);
  }
  const fadeInSubscription = ScrollScreens.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
  const SCREEN_CONSTSANTS = {
    description: "A dedicated Full-stack developer with knowledge in the MERN stack along with Redux. Proactively staying abreast of emerging technologies and best practices, continuously refining skills to deliver cutting-edge solutions. Committed to driving organizational success by leveraging technical expertise to develop scalable solutions that fuel business growth.",
    hightlights: {
      bullets:[
        "Committed Full-stack developer",
        "Proficient in the MERN stack and Redux",
        "Actively staying current with emerging technologies",
        "Continuously honing skills and expertise",
        "Dedicated to fostering organizational success",
        "Skilled in developing scalable solutions"
      ],
      heading: "Highlights about me:"
    }
  }
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.hightlights.bullets.map((value, i) => (
      <div className='highlight' key={i}>
        <div className='highlight-blob'></div>
        <span>{value}</span>
      </div>
    ))
  }
  return (
    <div className='about-me-container screen-container fade-in' id={props.id || ''}>
      <div className='about-me-parent'>
        <ScreenHeading
          title={'About Me'}
          subHeading={'Why Choose Me?'} 
        />
        <div className='about-me-card'>
          <div className='about-me-profile'>
            <Lottie animationData={animationData} loop={true} autoplay={true} />
          </div>
          <div className='about-me-details'>
            <span className='about-me-description'>{SCREEN_CONSTSANTS.description}</span>
            <div className='about-me-highlights'>
              <div className='highlight-heading'>
                <span>{SCREEN_CONSTSANTS.hightlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
