import React from 'react'

function Navbar() {
  return (
    <div  className='bg-white/95 py-4 fixed top-0 w-full z-[1000] shadow-[0_2px_20px_rgba(0,0,0,0.1)]'>
         <nav className='max-w-[1200px] mx-auto px-8 flex justify-between items-center'>
          <div className='text-2xl font-bold text-indigo-400'>Mahzil Sohail</div>
          <ul className='flex list-none gap-8'>
            <li><a href='#home' className='no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-indigo-400'>Home</a></li>
            <li><a href='#education' className='no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-indigo-400'>Education</a></li>
            <li><a href='#expertise' className='no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-indigo-400'>Expertise</a></li>
            <li><a href='#skills' className='no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-indigo-400'>Skills</a></li>
            <li><a href='#projects' className='no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-indigo-400'>Project</a></li>
            <li><a href='#certifications' className='no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-indigo-400'>Certification</a></li>
            <li><a href='#contact' className='no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-indigo-400'>Contact</a></li>
          </ul>
        </nav> 
      
    </div>
  )
}

export default Navbar