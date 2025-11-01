import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

function Contact() {
  return (
    <div>
        <section id='contact' className='py-20 min-h-screen max-w-[1200px] mx-auto px-8'>
                <h2 className='text-4xl font-bold text-center mb-12 text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]'>Contact Me</h2>
                <div className='flex justify-center gap-8 items-center'>
                  <div className='flex flex-col gap-5'>
                    <div className="flex items-center gap-4 bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-lg">
                      <FaLocationDot className='w-6 h-6'/>
                      <span className="font-semibold text-gray-800">Location</span><br />
                      <span className="text-gray-600">Lahore, Pakistan</span>
                    </div>
                    <div className="flex items-center gap-4 bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-lg">
                      <MdEmail className='w-6 h-6'/>
                      <span className="font-semibold text-gray-800">Email</span><br />
                      <span className="text-gray-600">mahzilsohail1@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4 bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-lg">
                      <FaGithub className='w-6 h-6'/>
                      <span className="font-semibold text-gray-800">Github</span><br />
                      <span className="text-gray-600">MahzilSohail</span>
                    </div>
                  </div>
                  <div>
                    <form className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md space-y-4">
                      <input type="text" placeholder='Your Name' className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                      <input type='email' placeholder='Your Email' className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                      <input type='text' placeholder='Your Message' className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
                      <button className="w-full bg-gradient-to-r from-indigo-400 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition">Send Message</button>
                    </form>
                  </div>
                </div>
              </section>
    </div>
  )
}

export default Contact