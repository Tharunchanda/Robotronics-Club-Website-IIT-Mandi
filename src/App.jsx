import { useState, useEffect } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import Hero from './components/Hero';

function App() {
  useEffect(()=>{
    aos.init({duration:1000});
  }, [])
  return (
    <>
      <Hero data-aos = "zoom-in"></Hero>
    </>
  )
}

export default App
