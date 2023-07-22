import React from 'react'

function ExperienceCard({Experiences}) {
    return (
        <>
         <div className="main place-content-center mt-3">
            <div className="text">
                <h1 className='text-lg  font-bold'>
                     {Experiences.title}
                     {console.log(Experiences.title)}
                </h1>
                <h3 >
                     {Experiences.Skills}
                     {console.log(Experiences.Skills)}
               </h3>
            </div>
         </div>
        </>
    )
}

export default ExperienceCard
