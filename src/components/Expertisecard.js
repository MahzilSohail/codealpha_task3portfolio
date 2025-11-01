import React from 'react'

function Expertisecard({id,icon,hd,para}) {
    return (
        <div className='bg-white/95 p-8 rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] animate-fadeInUp transition-transform duration-300 hover:-translate-y-1.5'>
            <h3 className='text-indigo-400 font-bold text-[1.3rem] mb-4 flex items-center gap-2'>
                {icon}
                {hd}
            </h3>
            <p className='text-gray-500 leading-relaxed'>{para}</p>
        </div>
    )
}

export default Expertisecard