import { useState, useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs/>
    </>
  )
}

export default App
