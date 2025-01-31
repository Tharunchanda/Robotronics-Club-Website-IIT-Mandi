import React, { useEffect } from 'react';
import '../assets/Hero.css';
import gsap from 'gsap';
import SplitTextJS from 'split-text-js';
import RINGS from 'vanta/src/vanta.rings';

const Hero = () => {
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
      backgroundColor: 0x240b3f,
      color: 0x240b3f,
      backgroundAlpha: 1,
    });
  }, []);

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-[#29025B] relative'>
      <div className='bg-black bg-opacity-60 rounded-[15%] text-center text-white p-5 min-w-[320px] max-w-fit w-full'>
        <p className='text-2xl py-8'>Welcome to</p>
        <div className='relative text-wrapper'>
          <p className='absolute w-full left-1/2 transform -translate-x-1/2 text-4xl'>Robotics</p>
          <p className='absolute w-full left-1/2 transform -translate-x-1/2 text-4xl top-1/3'>Electronics</p>
          <p className='absolute w-full left-1/2 transform -translate-x-1/2 text-4xl top-2/3'>Robotronics</p>
        </div>
        <p className='text-2xl py-8'>Club</p>
      </div>
      <div className='flex items-center justify-center bg-black bg-opacity-30 p-5 mt-10 rounded-lg backdrop-blur-md relative'>
        <p className='text-white text-lg px-5'>30+ <div className='text-gray-300 text-sm'>members</div></p>
        <div className='w-[2px] h-16 bg-white'></div>
        <p className='text-white text-lg px-5'>7+ <div className='text-gray-300 text-sm'>Ongoing Projects</div></p>
        <div className='w-[2px] h-16 bg-white'></div>
        <p className='text-white text-lg px-5'>10+ <div className='text-gray-300 text-sm'>Sessions</div></p>
      </div>
    </div>
  );
};

export default Hero;