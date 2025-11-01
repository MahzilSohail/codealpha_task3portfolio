import React from 'react'
import { FaBook } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa6";
import { FaGamepad } from "react-icons/fa6";
import { FaTv } from "react-icons/fa6";

function Project() {
  return (
    <div>
        <section id='projects' className='py-20 max-w-[1200px] mx-auto px-8'>
                <h2 className='text-4xl font-bold text-center mb-12 text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]'>Featured Projects</h2>
                  <div className='grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8'>
                    <div className='bg-white/95 rounded-[15px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)] animate-fadeInUp transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]'>
                      <div className='bg-gradient-to-br from-indigo-400 to-purple-600 text-white p-6 text-center'>
                        <h3 className='text-[1.3rem] mb-2 font-semibold'>Hotel Management System</h3>
                        <FaHotel className='m-auto w-7 h-7'/>
                      </div>
                      <div className='p-8'>
                        <p className='text-gray-600 leading-relaxed'>A comprehensive system for managing hotel operations including room bookings, customer details, payments, and restaurant orders. Features a complete database schema with multiple tables and a user-friendly web interface.</p>
                        <div className='flex flex-wrap gap-2 mt-4'>
                          <span className='bg-indigo-400 text-white px-3 py-1 rounded-full text-xs font-medium'>MySQL</span>
                          <span className='bg-indigo-400 text-white px-3 py-1 rounded-full text-xs font-medium'>HTML</span>
                          <span className='bg-indigo-400 text-white px-3 py-1 rounded-full text-xs font-medium'>CSS</span>
                          <span className='bg-indigo-400 text-white px-3 py-1 rounded-full text-xs font-medium'>PHP</span>
                        </div>
                      </div>
                    </div>
                    <div className='bg-white/95 rounded-[15px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)] animate-fadeInUp transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]'>
                      <div className='bg-gradient-to-br from-indigo-400 to-purple-600 text-white p-6 text-center'>
                        <h3 className='text-[1.3rem] mb-2 font-semibold'>Library Management System</h3>
                        <FaBook className='m-auto w-7 h-7'/>
                      </div>
                      <div className='p-8'>
                        <p className='text-gray-600 leading-relaxed'>
                          Developed for Operating Systems course, managing book records using linked lists and file handling. Includes FIFO scheduling to simulate book issuing order with real-world process management features.
                        </p>
                        <div className='flex flex-wrap gap-2 mt-4'>
                          <span className='bg-indigo-400 text-white px-3 py-1 rounded-full text-xs font-medium'>C++</span>
                          <span className='bg-indigo-400 text-white px-3 py-1 rounded-full text-xs font-medium'>Data Structures</span>
                          <span className='bg-indigo-400 text-white px-3 py-1 rounded-full text-xs font-medium'>File Handling</span>
                          <span className='bg-indigo-400 text-white px-3 py-1 rounded-full text-xs font-medium'>FIFO Scheduling</span>
                        </div>
                      </div>
                    </div>
                    <div className='bg-white/95 rounded-[15px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)] animate-fadeInUp transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]'>
                      <div className='bg-gradient-to-br from-indigo-400 to-purple-600 text-white p-6 text-center'>
                        <h3 className='text-[1.3rem] mb-2 font-semibold'>Song Playlist Manager</h3>
                        <FaMusic className='m-auto w-7 h-7'/>
                      </div>
                      <div className='p-8'>
                        <p className='text-gray-600 leading-relaxed'>
                          A command-line application for managing music playlists with full CRUD operations. Users can add, search, update, and delete songs with permanent data storage using file handling techniques.
                        </p>
                        <div className='flex flex-wrap gap-2 mt-4'>
                          <span className='bg-indigo-400 text-white px-3 py-1 rounded-full text-xs font-medium'>C++</span>
                          <span className='bg-indigo-400 text-white px-3 py-1 rounded-full text-xs font-medium'>Data Structures</span>
                          <span className='bg-indigo-400 text-white px-3 py-1 rounded-full text-xs font-medium'>File Handling</span>
                        </div>
                      </div>
                    </div>
                    <div className='bg-white/95 rounded-[15px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)] animate-fadeInUp transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]'>
                      <div className='bg-gradient-to-br from-indigo-400 to-purple-600 text-white p-6 text-center'>
                        <h3 className='text-[1.3rem] mb-2 font-semibold'>Flappy Bird Game</h3>
                        <FaGamepad className='text-center m-auto w-7 h-7'/>
                      </div>
                      <div className='p-8'>
                        <p className='text-gray-600 leading-relaxed'>
                          Classic Flappy Bird game implementation using C++ with Object-Oriented Programming principles and Data Structures. Features smooth gameplay with collision detection and obstacle navigation.
                        </p>
                        <div className='flex flex-wrap gap-2 mt-4'>
                          <span className='bg-indigo-400 text-white px-3 py-1 rounded-full text-xs font-medium'>C++</span>
                          <span className='bg-indigo-400 text-white px-3 py-1 rounded-full text-xs font-medium'>OOP</span>
                          <span className='bg-indigo-400 text-white px-3 py-1 rounded-full text-xs font-medium'>Game Development</span>
                        </div>
                      </div>
                    </div>
                    <div className='bg-white/95 rounded-[15px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)] animate-fadeInUp transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]'>
                      <div className='bg-gradient-to-br from-indigo-400 to-purple-600 text-white p-6 text-center'>
                        <h3 className='text-[1.3rem] mb-2 font-semibold'>Netflix Clone</h3>
                        <FaTv className='m-auto w-7 h-7'/>
                      </div>
                      <div className='p-8'>
                        <p className='text-gray-600 leading-relaxed'>
                          Static website recreation of Netflix interface built as an academic project. Features clean, user-friendly layout with responsive design and modern web development practices.
                        </p>
                        <div className='flex flex-wrap gap-2 mt-4'>
                          <span className='bg-indigo-400 text-white px-3 py-1 rounded-full text-xs font-medium'>HTML</span>
                          <span className='bg-indigo-400 text-white px-3 py-1 rounded-full text-xs font-medium'>CSS</span>
                          <span className='bg-indigo-400 text-white px-3 py-1 rounded-full text-xs font-medium'>Responsive Design</span>
                        </div>
                      </div>
                    </div>
                  </div>
              </section>
        
    </div>
  )
}

export default Project