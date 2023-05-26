import React, { useEffect, useState } from 'react'
import ScreenHeading from '../components/ScreenHeading'
import ScrollScreens from '../utilities/scrollScreens';
import Animations from '../utilities/animations';
import "../styles/Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) {
      return;
    }
    Animations.animations.fadeInScreen(props.id);
  }
  const fadeInSubscription = ScrollScreens.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
          {props.gitIcon && props.demoIcon ? (
            <div className="heading-icons">
              <div className='colz project-icon'>
                <div className='colz-icon project-icons'>
                  <a href={props.gitLink} alt='Repo'>
                    <i className={props.gitIcon} alt='Repo'></i>
                  </a>
                  <a href={props.demoLink} alt='Demo'>
                    <i className={props.demoIcon} alt='Demo'></i>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    )
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", logoSrc: "javascript.svg" },
    { skill: "HTML", logoSrc: "html.svg" },
    { skill: "CSS", logoSrc: "css3.svg" },
    { skill: "React JS", logoSrc: "react.svg" },
    { skill: "Redux", logoSrc: "redux.svg" },
    { skill: "Node JS", logoSrc: "nodejs.svg" },
    { skill: "Express JS", logoSrc: "express.svg" },
    { skill: "Mongo DB", logoSrc: "mongodb.svg" },
    { skill: "MySQL", logoSrc: "mysql.svg" },
    { skill: "Java", logoSrc: "java.svg" },
    { skill: "python", logoSrc: "python.svg" },
    { skill: "WordPress", logoSrc: "wordpress.svg" }
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      // duration: { fromDate: "2021", toDate: "Present" },
      description: "Discover my meticulously crafted portfolio website, showcasing my skills, experiences, and creative work. Experience a captivating showcase of my projects and achievements, reflecting my expertise and passion for delivering impactful results.",
      subHeading: "Technologies Used: React, JavaScript, HTML5, CSS3, Rxjs",
      gitIcon: "bi bi-github",
      gitLink: "https://github.com/kk945954/myPortfolio",
      demoIcon: "bi bi-link-45deg",
      demoLink: ""

    },
    {
      title: "e-Commerce Website",
      // duration: { fromDate: "2020", toDate: "2021" },
      description: "A functional e-commerce website allows users to add products to their cart, checkout, and purchase products.",
      subHeading: "Technologies Used: React, JavaScript, HTML5, CSS3, Node.js, Express.js, MongoDB, Redux-toolkit",
      gitIcon: "bi bi-github",
      gitLink: "https://github.com/kk945954/Ramen-Ordering",
      demoIcon: "bi bi-link-45deg",
      demoLink: "https://ramen-ordering.vercel.app/"
    },
  ];

  const resumeDetails = [
    <div className='resume-screen-container' key='education'>
      <ResumeHeading
        heading={"University of Maryland, College Park"}
        subHeading={"Bachelor of Science in Computer Science"}
        fromDate={"2015"}
        toDate={"2018"}
      />
    </div>,

    <div className='resume-screen-container programming-skills-container' key='programming-skills'>
      {programmingSkillsDetails.map((skill, index) => (
        <div className='skill-parent' key={index}>
          {skill.logoSrc ? <img className='skill-logo' src={skill.logoSrc} alt="skill" /> : ""}
        </div>
      ))}
    </div>,

    <div className='resume-screen-container' key='projects'>
      {projectsDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          gitIcon={projectDetails.gitIcon}
          gitLink={projectDetails.gitLink}
          demoIcon={projectDetails.demoIcon}
          demoLink={projectDetails.demoLink}
        />
      ))}
    </div>,

    <div className='resume-screen-container' key='interests'>
      <ResumeHeading
        heading="Cooking"
        description="I gain enhanced flavors and ingredients from creativity in cooking, and attention to detail 
                     brings me well-executed meals. Curiosity expands my culinary knowledge, and maintaining cleanliness 
                     maintains a safe cooking environment."
      />
      <ResumeHeading
        heading="Traveling"
        description="I gain enriched understanding and broadened perspectives from open-mindedness while traveling, 
                     and adaptability helps me navigate unfamiliar environments. Planning maximizes my travel experiences, 
                     and embracing flexibility brings me the joy of spontaneity."
      />
      <ResumeHeading
        heading="Gaming"
        description="Strategic thinking improves my problem-solving skills, and teamwork fosters effective communication in gaming. 
                     Perseverance develops my resilience and enhances my flexibility in various game situations."
      />
    </div>
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={bullet.logoSrc}
          alt="Bullet"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  }

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className='resume-details-carousal'
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );

  }

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className='resume-container screen-container fade-in' id={props.id || ""}>
      <div className='resume-content'>
        <ScreenHeading
          title={'Resume'}
          subHeading={'My Bio Details'}
        />
        <div className='resume-card'>
          <div className='resume-bullets'>
            <div className='bullet-container'>
              <div className='bullet-icons'></div>
              <div className='bullets'>{getBullets()}</div>
            </div>
          </div>
          <div className='resume-bullet-details'>{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  )
}
