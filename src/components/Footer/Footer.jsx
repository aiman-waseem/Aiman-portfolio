import React from 'react'
import {
    BsLinkedin,BsGithub,} from 'react-icons/bs';
  import { Link } from 'react-router-dom';
function Footer() {
    return (
        <>
        
      {/* <div className='flex justify-center  space-x-3   ' >
        <Link href='https://github.com/aiman-waseem/bytewise-tasks'>
          <a target='_blank'>
            <BsGithub  />
          </a>
          </Link>
          <Link href='https://www.linkedin.com/in/aiman-waseem-204706221/'>
          <a target='_blank'>
            <BsLinkedin />
          </a>
          </Link>
          </div> */}

<div className='flex  justify-center space-x-5 mb-[2rem]'>
  {/* <button className='bg-pink-600 text-lg w-[7rem] '> */}
  {/* <button className="flex items-center justify-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-md">
  
    <a href='https://github.com/aiman-waseem' target='_blank'>
      <BsGithub size={24} color='white' />
    </a>
 
 <span> Github</span>
  </button> */}

<a href='https://github.com/aiman-waseem' target='_blank' className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-md">
  <BsGithub size={24} color='white' />
  <span style={{ color: 'white' }}>Github</span>
</a>

  {/* <button className="flex items-center justify-center space-x-2 bg-blue-800 text-white px-4 py-2 rounded-md">
  
    <a href='https://www.linkedin.com/in/aiman-waseem-204706221/' target='_blank'>
      <BsLinkedin size={24} color='white' />
      </a>
    <span>Linkedin</span>
  </button> */}
  <a href='https://www.linkedin.com/in/aiman-waseem-204706221/' target='_blank' className="flex items-center space-x-2 bg-blue-800 text-white px-4 py-2 rounded-md">
  <BsLinkedin size={24} color='white' />
  <span style={{ color: 'white' }}>Linkedin</span>
</a>


</div>

<div className='mb-[2rem] flex justify-center'>
        <small>Aiman Waseem &copy; {new Date().getFullYear()}</small>
      </div>
 </>
       
    )
}

export default Footer
