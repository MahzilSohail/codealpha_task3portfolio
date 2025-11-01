import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";

function Certifications() {
  return (
    <div>
        <section id='certifications' className='min-h-screen py-20 max-w-[1200px] mx-auto px-8'>
        <h2 className='text-4xl font-bold text-center mb-12 text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]'>Certifications</h2>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8'>
          <div className='bg-white/95 p-8 rounded-[15px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.2)] animate-zoomIn transition-transform duration-300 hover:scale-105'>
            <FaDatabase className='text-[3rem] m-auto text-indigo-400 mb-4"'/>
            <h3 className='text-gray-800 mb-2 font-semibold'><a href="/CertificateSQL.jpg" target="_blank" className='block mt-3 text-gray-800 hover:text-indigo-400 transition-colors duration-300'>Introduction to SQL</a></h3>
            <p className='text-gray-600 font-medium'>Sololearn</p>
          </div>
          <div className='bg-white/95 p-8 rounded-[15px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.2)] animate-zoomIn transition-transform duration-300 hover:scale-105'>
            <FaHtml5 className='text-[3rem] m-auto text-indigo-400 mb-4"'/>
            <h3 className='text-gray-800 mb-2 font-semibold'><a href="/CertificateHTML.jpg" target="_blank" className='block mt-3 text-gray-800 hover:text-indigo-400 transition-colors duration-300'>Introduction to HTML</a></h3>
            <p className='text-gray-600 font-medium'>Sololearn</p>
          </div>
          <div className='bg-white/95 p-8 rounded-[15px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.2)] animate-zoomIn transition-transform duration-300 hover:scale-105'>
            <FaCss3Alt className='text-[3rem] m-auto text-indigo-400 mb-4"'/>
            <h3 className='text-gray-800 mb-2 font-semibold'><a href="/CertificateCSS.jpg" target="_blank" className='block mt-3 text-gray-800 hover:text-indigo-400 transition-colors duration-300'>Introduction to CSS</a></h3>
            <p className='text-gray-600 font-medium'>Sololearn</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Certifications