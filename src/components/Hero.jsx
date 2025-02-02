import { useEffect, useState, useRef } from "react";
import '../assets/Hero.css';
import gsap from 'gsap';
import SplitTextJS from 'split-text-js';
import RINGS from 'vanta/src/vanta.rings';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Hero = () => {
  const membersCount = useMotionValue(0);
  const ongoingProjectsCount = useMotionValue(0);
  const sessionsCount = useMotionValue(0);

  const [membersText, setMembersText] = useState("0");
  const [projectsText, setProjectsText] = useState("0");
  const [sessionsText, setSessionsText] = useState("0");

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
      backgroundColor: 0x0B192C,
      color: 0x240b3f,
      backgroundAlpha: 1,
    });

    // Animate the values for each stat
    animate(membersCount, 30, { duration: 2 });
    animate(ongoingProjectsCount, 7, { duration: 2 });
    animate(sessionsCount, 10, { duration: 2 });
  
  }, []);

    // Update the state from motion values
    useEffect(() => {
      const unsubscribeMembers = membersCount.onChange((value) => {
        setMembersText(Math.round(value).toString());
      });
      const unsubscribeProjects = ongoingProjectsCount.onChange((value) => {
        setProjectsText(Math.round(value).toString());
      });
      const unsubscribeSessions = sessionsCount.onChange((value) => {
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
    <div className='w-full h-screen flex flex-col justify-center items-center relative' id='ani' >
      <div className='bg-[rgba(0,0,0,0.60)] rounded-[15%] text-center text-white p-5 min-w-[320px] max-w-fit w-full'>
        <p className='text-3xl py-6 font-semibold md:text-xl sm:text-base'>Welcome to</p>
        <div className='relative text-wrapper'>
          <p className='absolute w-full left-1/2 transform -translate-x-1/2 text-5xl font-semibold md:text-4xl sm:text-3xl xs:text-xl'>Robotics</p>
          <p className='absolute w-full left-1/2 transform -translate-x-1/2 text-5xl top-1/3 font-semibold md:text-4xl sm:text-3xl xs:text-xl'>Electronics</p>
          <p className='absolute w-full left-1/2 transform -translate-x-1/2 text-5xl top-2/3 font-semibold md:text-4xl sm:text-3xl xs:text-xl'>Robotronics</p>
        </div>
        <p className='text-3xl py-9 mb-2 mt-4 font-semibold md:text-2xl sm:text-xl xs:text-lg'>Club</p>
      </div>
      <div className='flex items-center justify-center bg-opacity-30 p-5 mt-10 rounded-lg backdrop-blur-md relative'>
        <motion.p className='text-white text-lg px-5'>{membersText}+ <div className='text-gray-300 text-sm'>Members</div></motion.p>
        <div className='w-[2px] h-16 bg-white'></div>
        <motion.p className='text-white text-lg px-5'>{projectsText}+ <div className='text-gray-300 text-sm'>Ongoing Projects</div></motion.p>
        <div className='w-[2px] h-16 bg-white'></div>
        <motion.p className='text-white text-lg px-5'>{sessionsText}+ <div className='text-gray-300 text-sm'>Sessions</div></motion.p>
      </div>      
    </div>
  );
};

export default Hero;