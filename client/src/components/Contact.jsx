import React, { useState, useRef } from 'react';
import '../styles/Contact.css';
import ScreenHeading from '../components/ScreenHeading';
import ScrollScreens from '../utilities/scrollScreens';
import Animations from '../utilities/animations';
import Typewriter from 'typewriter-effect';
import Lottie from 'lottie-react';
import animationData from '../assets/Home/contact.json';
import { toast } from 'react-toastify';
import Footer from './Footer';
import emailjs from '@emailjs/browser';

export default function Contact(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) {
      return;
    }
    Animations.animations.fadeInScreen(props.id);
  }
  const fadeInSubscription =
    ScrollScreens.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [banner, setBanner] = useState("");
  const [check, setCheck] = useState(false);

  const VITE_EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const VITE_EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const VITE_EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const nameInput = form.current['user_name'];
    const emailInput = form.current['user_email'];
    const messageInput = form.current['message'];

    if (nameInput.value.trim() === '') {
      toast.error('Please enter your name');
      nameInput.focus();
      return;
    }

    if (emailInput.value.trim() === '') {
      toast.error('Please enter your email');
      emailInput.focus();
      return;
    }

    if (messageInput.value.trim() === '') {
      toast.error('Please enter your message');
      messageInput.focus();
      return;
    }

    try {
      setCheck(true);
      
      await emailjs.sendForm(VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, form.current, VITE_EMAILJS_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
      toast.success("Message sent successfully!");
      setBanner("Message sent successfully!");
      
      setTimeout(() => {
        setCheck(false);
      }, 1000);
    } catch (error) {
      console.log(error);
      setCheck(false);
    }
  };

  return (
    <div className='main-container fade-in' id={props.id || ""}>
      <ScreenHeading
        title={'Contact Me'}
        subHeading={'Lets Get In Touch!'}
      />
      <div className='central-form'>
        <div className='col'>
          <h2 className='title'>
            <Typewriter
              options={{
                strings: ['Get in Touch 📧', 'Send a Message 📥'],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 50,
              }}
            />
          </h2>
          <a href='https://www.linkedin.com/in/po-yu-chen-305576150'>
            <i className="bi bi-linkedin"></i>
          </a>
          <a href='https://github.com/kk945954'>
            <i className='bi bi-github'></i>
          </a>
        </div>
        <div className='back-form'>
          <div className='img-back'>
            <div className='animation'>
              <Lottie animationData={animationData} loop={true} autoplay={true} />
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <p>{banner}</p>
            <label htmlFor='name'>Name</label>
            <input type='text' name="user_name" />

            <label htmlFor='email'>Email</label>
            <input type='text' name="user_email" />

            <label htmlFor='message'>Message</label>
            <textarea type='text' name="message" />

            <div className='send-btn'>
              <button type='submit'>
                {check ? (
                  <b className='load'><img src="load.gif" alt="Loading..." /></b>
                ) : (
                  <>
                    Send <i className="bi bi-send" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
