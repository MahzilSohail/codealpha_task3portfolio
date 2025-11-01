import React from 'react'

function Educationcard({id, degree, institute, year}) {
  return (
        <div className='bg-white/95 p-8 rounded-[15px] mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.2)] animate-slideInLeft'>
          <h3 className='text-indigo-400 font-bold text-[1.4rem] mb-2'>{degree}</h3>
          <div className='font-bold text-gray-600 mb-2'>{institute}</div>
          <div className='text-gray-500 text-sm'>{year}</div>
        </div>
  )
}

export default Educationcard