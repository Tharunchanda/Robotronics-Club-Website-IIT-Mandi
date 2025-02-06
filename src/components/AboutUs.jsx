import React from 'react';
import '../assets/About.css';
import im1 from '../assets/images/logo.jpg';
const About = () => {
  return (
    <div className='about-main' id="about">
      <div className='about-heading'>About Us</div>
      <div className='about-wrapper'>
        <div className='up-about'>
          <div className='about-img' data-aos="fade-left">
            <img src={im1} alt='Robotics Club' />
          </div>
          <div className='up-info' data-aos="fade-right">
          The Robotronics Club at the Indian Institute of Technology (IIT) Mandi is a dynamic student organization under the Science and Technology Council of the Student Gymkhana. Established to nurture a strong interest in robotics and technological innovation, the club serves as a hub for students who are enthusiastic about exploring automation, artificial intelligence, and robotics.          </div>
        </div>
        <div className='line-break'></div>
        <div className='down-about'>
          <div className='left-down' data-aos="fade-right">
          The club is driven by a mission to establish a vibrant environment for students who share a passion for robotics. Here, we aim to create a space where collective learning, growth, and the achievement of goals become a shared journey. The club is dedicated to providing its members with the tools, knowledge, and resources essential for addressing real-world challenges through innovative technological solutions.          </div>
          <div className='right-down' data-aos="fade-left">
          Through annual sessions, events, and hackathons, students from various disciplines come together to collaborate and showcase their skills. Beyond the campus, the club has made its mark in inter-IIT and other competitions, bringing numerous prizes and enhancing the institution's prestige. As the club continues to evolve, it remains dedicated to fostering a culture of learning, collaboration, and innovation.

</div>
        </div>
      </div>
    </div>
  );
};

export default About;
