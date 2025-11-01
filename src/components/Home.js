import Link from 'next/link';
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Home() {
  return (
    <div>
        <section id='home' className='min-h-screen flex items-center justify-center text-center text-white px-8'>
                <div className='max-w-[800px] animate-fadeInUp'>
                  <h1 className='text-[3.5rem] font-bold mb-4 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]'>Mahzil Sohail</h1>
                  <p className='text-xl mb-8 opacity-90'>Software Engineering Student | Web Developer <br />Building the future through Code</p>
                  <div className='flex justify-center gap-8 mb-8 flex-wrap'>
                    <div className='flex items-center gap-2 text-base'>
                      <FaLocationDot />
                      <span>Lahore, Pakistan</span>
                    </div>
                    <div className='flex items-center gap-2 text-base'>
                      <FaPhone />
                      <span>+92 323 8451415</span>
                    </div>
                    <div className='flex items-center gap-2 text-base'>
                      <MdEmail />
                      <span>mahzilsohail1@gmail.com</span>
                    </div>
                  </div>
                  <div className='flex justify-center gap-4 mt-8'>
                    <Link href='https://github.com/MahzilSohail' target="_blank" className='text-white text-2xl transition duration-300 transform hover:-translate-y-1 hover:text-indigo-300' > <FaGithub /> </Link>
                    <Link href='https://www.linkedin.com/in/mahzil-sohail-02412b371/' target="_blank" className='text-white text-2xl transition duration-300 transform hover:-translate-y-1 hover:text-indigo-300'><FaLinkedin /></Link>
                  </div>
                  <div className='flex justify-center text-center m-[40px]'>
                    <Link href="/Resume.pdf" target="_blank">
                    <button className="w-[250px] bg-gradient-to-r from-indigo-400 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-md transition duration-300 transform hover:-translate-y-1 hover:-translate-y-1.5">Download CV</button>
                  </Link>
                  </div>
                </div>
              </section>
    </div>
  )
}

export default Home