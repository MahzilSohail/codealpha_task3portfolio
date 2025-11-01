import React from 'react'

import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Certifications from '@/components/Certifications';
import Project from '@/components/Project';
import Skills from '@/components/Skills';
import Expertise from '@/components/Expertise';
import Education from '@/components/Education';
import Home from '@/components/Home';
import Navbar from '@/components/Navbar';
function Portfolio() {
  return (
    <div className='min-h-screen leading-relaxed text-gray-800 bg-gradient-to-br from-indigo-400 to-purple-600 font-sans '>
      <Navbar/>
      <Home/>
      <Education/>
      <Expertise/>
      <Skills/>
      <Project/>
      <Certifications/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Portfolio