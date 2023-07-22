import React from 'react'
import images from '../../others/images'
import { techstack } from '../../others/Data'
import SkillsCard from './SkillsCard'


// function Skills() {
//     return (
//        <>
//         <div className="skillsContainer">
//         <h1>Skills</h1>
//             <div className="SkillsText">
//                 <div>
//              {techstack.map((stack, index) => (
//              <SkillsCard key={index} stack={stack} />
//           ))} 
//                 </div>
//             </div>
//         </div>
//        </> 
//     )
// }

function Skills() {
    const skillsLeft = techstack.slice(0, 5); // First 5 skills
    const skillsRight = techstack.slice(5, 10); // Last 5 skills
  
    return (
      <>
        <div className="skillsContainer  ">
          <h1>Skills</h1>
          <div className="SkillsText grid grid-cols-2 items-center gap-2">
            <div className=''>
              {skillsLeft.map((stack, index) => (
                <SkillsCard key={index} stack={stack} />
              ))}
            </div>
            <div className=''>
              {skillsRight.map((stack, index) => (
                <SkillsCard key={index} stack={stack} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Skills;
  


