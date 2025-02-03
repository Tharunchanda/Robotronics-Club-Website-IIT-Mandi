import { useEffect, useState, useRef } from "react";
import '../assets/Hero.css';
import gsap from 'gsap';
import SplitTextJS from 'split-text-js';
import RINGS from 'vanta/src/vanta.rings';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ScrollParallax } from "react-just-parallax";

const Hero = () => {
  const membersCount = useMotionValue(0);
  const ongoingProjectsCount = useMotionValue(0);
  const sessionsCount = useMotionValue(0);

  const [membersText, setMembersText] = useState("0");
  const [projectsText, setProjectsText] = useState("0");
  const [sessionsText, setSessionsText] = useState("0");

  const parallaxRef = useRef(null);

  useEffect(() => {
    const titles = gsap.utils.toArray('.text-wrapper p');
    const t1 = gsap.timeline({
      repeat: 0,
      onComplete: () => {
        const splittextLast = new SplitTextJS(titles[2]);
        gsap.set(splittextLast.chars, {
          opacity: 1,
          y: 0,
          rotateX: 0,
        });
      },
    });

    titles.forEach((title, index) => {
      const splittext = new SplitTextJS(title);
      if (index < 2) {
        t1.from(splittext.chars, {
          opacity: 0,
          y: 80,
          rotateX: -90,
          stagger: 0.02,
        }, "<")
        .to(splittext.chars, {
          opacity: 0,
          y: -80,
          rotateX: 90,
          stagger: 0.02,
        }, "<1");
      } else {
        t1.from(splittext.chars, {
          opacity: 0,
          y: 80,
          rotateX: -90,
          stagger: 0.02,
        }, "<");
      }
    });

    RINGS({
      el: "#ani",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0x0B192C, // Vanta.js color
      color: 0x240b3f, // Vanta.js ring color
      backgroundAlpha: 0.2, // Lower alpha to see the gradient background through
    });

    // Animate the values for each stat
    animate(membersCount, 30, { duration: 2 });
    animate(ongoingProjectsCount, 7, { duration: 2 });
    animate(sessionsCount, 10, { duration: 2 });
  
  }, []);

    // Update the state from motion values
    useEffect(() => {
      const unsubscribeMembers = membersCount.on("change", (value) => {
        setMembersText(Math.round(value).toString());
      });
      
      const unsubscribeProjects = ongoingProjectsCount.on("change", (value) => {
        setProjectsText(Math.round(value).toString());
      });
      
      const unsubscribeSessions = sessionsCount.on("change", (value) => {
        setSessionsText(Math.round(value).toString());
      });
  
      // Cleanup on component unmount
      return () => {
        unsubscribeMembers();
        unsubscribeProjects();
        unsubscribeSessions();
      };
    }, [membersCount, ongoingProjectsCount, sessionsCount]);

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 overflow-hidden' id='ani'>
     
      {/* Vanta.js Effect */}
      <div className="absolute inset-0 z-0" id="ani"></div>

      {/* Content */}
      <div className='bg-[rgba(0,0,0,0.60)] rounded-[15%] text-center text-white p-5 min-w-[320px] max-w-fit w-full'>
        <p className='lg:text-3xl sm:text-3xl py-6 font-semibold'>Welcome to</p>
        <div className='relative text-wrapper'>
          <p className='absolute w-full left-1/2 transform -translate-x-1/2 lg:text-5xl font-semibold md:text-4xl sm:text-3xl'>Robotics</p>
          <p className='absolute w-full left-1/2 transform -translate-x-1/2 lg:text-5xl top-1/3 font-semibold md:text-4xl sm:text-3xl'>Electronics</p>
          <p className='absolute w-full left-1/2 transform -translate-x-1/2 lg:text-5xl top-2/3 font-semibold md:text-4xl sm:text-3xl'>Robotronics</p>
        </div>
        <p className='lg:text-3xl py-9 mb-2 mt-4 font-semibold md:text-2xl text-xl'>Club</p>
      </div>
      <div className='flex items-center justify-center bg-opacity-30 p-5 lg:mt-10 mt-2 rounded-lg backdrop-blur-md relative md:flex-row flex-col'>
        <motion.p className='text-white text-lg px-5 flex items-center flex-col'>{membersText}+ <div className='text-gray-300 text-lg'>Members</div></motion.p>
        <div className='w-[2px] h-16 bg-white lg:rotate-180 rotate-90'></div>
        <motion.p className='text-white text-lg px-5 flex items-center flex-col'>{projectsText}+ <div className='text-gray-300 text-lg'>Ongoing Projects</div></motion.p>
        <div className='w-[2px] h-16 bg-white lg:rotate-180 rotate-90'></div>
        <motion.p className='text-white text-lg px-5 flex items-center flex-col'>{sessionsText}+ <div className='text-gray-300 text-lg'>Sessions</div></motion.p>
      </div>      

    </div>
  );
};

export default Hero;