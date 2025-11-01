import React from 'react'

function Skillscard({ id, icon, title }) {
    return (
        <div className='bg-white text-indigo-400 w-[170px] h-[80px] rounded-[8] p-[12px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.2)]'>
            {icon}
            <span className='font-semibold text-[16px]'>{title}</span>
        </div>
    )
}

export default Skillscard