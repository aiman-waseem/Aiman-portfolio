import React from 'react'
import Skills from './Skills'


function AboutCard() {
    return (
        <div className='  grid justify-center place-content-center place-items-center'>
        <div className="AboutContainer   p-8 m-8   shadow-lg shadow-purple-800  bg-slate-800 bg-opacity-5 h-full  grid place-items-center   rounded-lg md:w-3/12" >
        
        <h1 className='text-3xl'>About Me</h1>
            <div className="AboutText bg-purple-600 my-3 p-4 rounded-lg bg-gradient-to-b from-purple-800 to-gray-800">
            
               <p>My name is Aiman, and I am a final-year student of software engineering currently enrolled at the University of Karachi. I possess proficient skills in React web development, and I also have a keen interest in artificial intelligence and deep learning. In fact, I am currently enrolled in the PIAIC Artificial Intelligence course, further expanding my knowledge in this exciting field</p>
            </div>
            <div>
              
            </div>
            <div className="Resumebtn bg-white rounded-md p-1 mt-1  flex flex-row-reverse">
                <a href="https://drive.google.com/file/d/1K3afWzKmZf66oQAGYuMPH8RfG1Y0rf27/view?usp=drive_link">
                    Download Resume
                </a>
            </div>
         </div>
         
        </div>
    )
}

export default AboutCard
