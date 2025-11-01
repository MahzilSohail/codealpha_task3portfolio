import { Skilldata } from '@/Skilldata'
import React from 'react'
import Skillscard from './Skillscard';


function Skills() {
  return (
    <div>
        <section id='skills' className='py-20 max-w-[1200px] mx-auto px-8'>
                <h2 className='text-4xl font-bold text-center mb-12 text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]'>Skills</h2>
                <div className=' grid grid-cols-5 gap-12'>
                  
                {Skilldata.map((Skill) =>{
                  return(
                    <Skillscard
                    key={Skill.id}
                    id={Skill.id}
                    icon={Skill.icon}
                    title={Skill.title}
                    />
                  );
                }
                )}

                </div>
              </section>
    </div>
  )
}

export default Skills