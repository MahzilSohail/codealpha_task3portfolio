import React from 'react'
import Expertisecard from './Expertisecard';
import { Exdata } from '@/Exdata';

function Expertise() {

  return (
    <div>
        <section id='expertise' className='py-20 max-w-[1200px] mx-auto px-8'>
                <h2 className='text-4xl font-bold text-center mb-12 text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]'>Expertise</h2>
                <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8'>
                  
                  {Exdata.map((Exdata) =>{
                    return (
                      <Expertisecard
                      key={Exdata.id}
                      id={Exdata.id}
                      icon={Exdata.icon}
                      hd={Exdata.hd}
                      para={Exdata.para}
                      />
                    );
                  })}
                  
                  {/* <div className='bg-white/95 p-8 rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] animate-fadeInUp transition-transform duration-300 hover:-translate-y-1.5'>
                    <h3 className='text-indigo-400 font-bold text-[1.3rem] mb-4 flex items-center gap-2'>
                      <FaCode className='w-7 h-7'/>
                      Programming
                    </h3>
                    <p className='text-gray-500 leading-relaxed'>Strong grip on C++ and basic understanding of JavaScript. Experience with data structures like linked lists and queues in academic projects, applying OOP concepts such as classes and inheritance in applications.</p>
                  </div>
                  <div className='bg-white/95 p-8 rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] animate-fadeInUp transition-transform duration-300 hover:-translate-y-1.5'>
                    <h3 className='text-indigo-400 font-bold text-[1.3rem] mb-4 flex items-center gap-2'>
                      <FaDatabase className='w-7 h-7'/>
                      Database Systems
                    </h3>
                    <p className='text-gray-500 leading-relaxed'>Proficient in MySQL for DBMS projects, including Hotel Management Database creation. Experienced in writing queries to insert, update, and retrieve data, with basic understanding of database-backend integration using PHP.</p>
                  </div>
                  <div className='bg-white/95 p-8 rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] animate-fadeInUp transition-transform duration-300 hover:-translate-y-1.5'>
                    <h3 className='text-indigo-400 font-bold text-[1.3rem] mb-4 flex items-center gap-2'>
                      <FaPaintbrush className='w-7 h-7'/>
                      UI/UX Design
                    </h3>
                    <p className='text-gray-500 leading-relaxed'>Redesigned mobile app interfaces like Food Panda, Gmail, and Clock using Figma, focusing on layout optimization, color consistency, and intuitive user flow design.</p>
                  </div>
                  <div className='bg-white/95 p-8 rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] animate-fadeInUp transition-transform duration-300 hover:-translate-y-1.5'>
                    <h3 className='text-indigo-400 font-bold text-[1.3rem] mb-4 flex items-center gap-2'>
                      <FaGlobe className='w-9 h-9'/>
                      Web Development
                    </h3>
                    <p className='text-gray-500 leading-relaxed'>Built static websites using HTML and CSS for academic projects. Knowledgeable in frontend layout design, responsive web development, and user-focused design principles.</p>
                  </div>
                  <div className='bg-white/95 p-8 rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] animate-fadeInUp transition-transform duration-300 hover:-translate-y-1.5'>
                    <h3 className='text-indigo-400 font-bold text-[1.3rem] mb-4 flex items-center gap-2'>
                      <FaUsers className='w-9 h-9'/>
                      Management & Communication
                    </h3>
                    <p className='text-gray-500 leading-relaxed'>Comfortable working in teams and managing tasks effectively. Experienced in academic project coordination with strong written and verbal communication skills, enjoying collaboration and maintaining organization.</p>
                  </div> */}
                </div>
              </section>
    </div>
  )
}

export default Expertise