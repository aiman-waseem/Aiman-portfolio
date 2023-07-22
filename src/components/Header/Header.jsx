import style from './Header.module.css'
import React from 'react'
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub } from 'react-icons/bs';



// function Header(){
//   return (
//     <>
//       <div className=" mainContainer mb-4  bg-slate-800 ">
//         <Navbar/>
//         <div className='md:h-[25rem] md:flex md:flex-col md:items-center  '>
//         <div className={`md:p-8  font-bold text-4xl  ml-4 bg-purple-600 md:h-[20rem]  `}>
//           <h1 className='pr-10 mb-3 '>Hi!</h1>
//           <h1 className='ml-30'>I am Aiman 👋</h1>
//           <br />
//           <p className='text-lg md:text-2xl'>REACT/NEXTJS Developer</p>
//           <div className={`mr-4  grid   place-items-center  md:p-0 `}>
//           <img src="\images\my-pic.png" alt="" className="w-8/12 h-8/12 md:w-8/12 md:h-8/12  md:mb-64" />
//         </div>
//         </div>
        
//         </div>
//       </div>
//     </>
//   );
// }

function Header() {
  return (
    <div className="mainContainer mb-4 bg-slate-800">
      <Navbar />
      <div className="md:h-[25rem] flex flex-col md:flex-row items-center ">
        <div className="md:p-8 font-bold text-4xl     md:h-[20rem] flex flex-col justify-center items-center md:w-1/2">
          <h1 className="pr-10 mb-3">Hi!</h1>
          <h1 className="ml-30">I am Aiman 👋</h1>
          <br />
          <p className="text-lg md:text-2xl">REACT/NEXTJS Developer</p>

          <div className='flex space-x-3 mt-2'>
          <button className="flex items-center justify-center w-12 h-12 bg-gray-950 rounded-full">
          <a href='https://github.com/aiman-waseem' target="_blank">
          <BsGithub size={24} color='white' />
           </a>

          </button>

           <button className="flex items-center justify-center w-12 h-12 bg-blue-800 rounded-full">

            <a target='blank' href="https://www.linkedin.com/in/aiman-waseem-204706221/">
             <BsLinkedin size={23} color='white' />
             </a>
          </button>
          </div>
        </div>
        

        <div className="mr-4 flex justify-center items-center md:w-1/2">
          <img src="/images/my-pic.png" alt="" className="w-8/12 h-8/12 md:w-6/12 md:h-6/12" />
        </div>
      </div>
    </div>
  );
}


export default Header
