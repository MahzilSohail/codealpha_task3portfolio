import { Edata } from '@/Edata'
import React from 'react'
import Educationcard from './Educationcard'

function Education() {
  return (
        <section id='education' className='py-20 max-w-[1200px] mx-auto px-8'>
        <h2 className='text-4xl font-bold text-center mb-12 text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]'>Education & Learning</h2>

        {Edata.map((Edata) => {
          return(
            <Educationcard
            key={Edata.id}
            id={Edata.id}
            degree={Edata.degree}
            institute={Edata.institute}
            year={Edata.year}
            />
          )
        })}

      </section>
  )
}

export default Education