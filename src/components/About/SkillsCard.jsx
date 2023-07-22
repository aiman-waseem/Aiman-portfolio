import React from 'react'

function SkillsCard({stack}) {
    return (
       <>
        <div className="SkillsCard text-left  p-5  m-5  rounded-lg flex shadow-lg h-30 bg-purple-600 my-3  bg-gradient-to-b from-purple-700 to-gray-900 md:w-1/2 ">
        <div className="stackImage">
            <img className='w-8 mr-1' src={stack.img} alt="Image" />
        </div>
        <div className='stackTechData w-full'>
            <div bg-white> {stack.tech} </div>
        </div>
        </div>
       </> 
    )
}

export default SkillsCard
