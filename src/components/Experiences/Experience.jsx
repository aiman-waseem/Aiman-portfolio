import React from 'react'
import { Experiences } from '../../others/Data'
import ExperienceCard from './ExperienceCard'

function Experience() {
    return (
        <div className='grid justify-center my-3'>
           
            {/* my-7 m-8 px-16 p-5  */}
         <div className='bg-slate-800 my-7  md:p-9 md:m-8  text-center bg-opacity-5 shadow-purple-800 shadow-lg rounded-lg md:w-11/12'>
         <h1 className='text-3xl '>Experience</h1>
         {/* p-6 my-5 mx-3  px-4  mobile */}
            <div className=' md:my-3 md:p-4  p-6 my-5 mx-3  px-4  bg-gradient-to-b from-purple-800 to-gray-800 rounded-lg'>

            {Experiences.map((Experiences)=> (
                <ExperienceCard Experiences={Experiences} />
            ))}
            </div>
              


         </div>
        </div>
    )
}

export default Experience
