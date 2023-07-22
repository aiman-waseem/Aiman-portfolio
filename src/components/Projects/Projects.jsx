import React from 'react'
import { ProjectsList } from '../../others/Data';


import  { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
  const [repositories, setRepositories] = useState([]);
 

  useEffect(() => {
    axios
      .get("https://api.github.com/users/aiman-waseem/repos?sort=created")
      .then((response) => {
        setRepositories(response.data);
        console.log(response.data)
       
        console.log(repositories.map((repo)=>("htmlurl",repo.html_url)))
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className='grid justify-center place-content-center place-items-center'>
      
      {/* projectContainer h-full w-[22rem] md:w-4/5 pb-5 bg-slate-800    place-content-center  items-center flex flex-col rounded-xl  justify-center */}
      <div className='bg-slate-800 my-7 m-8  p-8 grid grid-cols-1 place-items-center justify-center  rounded-xl md:w-3/12 bg-opacity-5 shadow-purple-800 shadow-lg   '>
      <h1 className='text-3xl'>Projects </h1>
    {ProjectsList.map((repo)=>
        <div className=' border-solid  border-b-2 border-white mt-5  bg-purple-500 p-5 my-3   bg-gradient-to-b from-purple-800 to-gray-800 rounded-xl'>
          {/* bg-purple-700 mt-5 w-[15rem] */}
        <div  className=''>
        <img className='  rounded' src={repo.img} alt="image" />
        <h3 className='flex place-content-center text-lg font-bold py-2'>{repo.title}</h3>
        </div>
       <div  className='flex space-x-4 mt-6 items-center place-content-center mb-3 '>
          {/* <button onClick={() => window.open(`${repositories.html_url}/tree/master/pokedex`)} className='px-4 py-2 bg-blue-500 text-white rounded-md'>Source Code</button> */}
        <a href={repo.sourceCode} target="_blank" rel="noopener noreferrer" className='px-2 py-2 bg-blue-500 text-white rounded-md'>Source Code</a> 
        <button className='px-2 py-2 bg-purple-500 text-white rounded-md'>  <a className='text-white' href={repo.liveLink} > Live link </a></button>
        {/* <button onClick={() => window.location.href ={repo.liveLink} } className='px-4 py-2 bg-blue-500 text-white rounded-md'>Live link</button> */}
        </div>

        
        </div>
)}
  
        
      </div>
      
    </div>
  );
};

export default Projects;

//This is the code to dynamically display repositories and its working 

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Projects = () => {
//   const [repositories, setRepositories] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://api.github.com/users/aiman-waseem/repos?sort=created")
//       .then((response) => {
//         setRepositories(response.data);
//         console.log(response.data)
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }, []);
  

//   return (
//     <div>
//       <h1>Projects</h1>
//       {repositories.map((repo) => (
//         <div key={repo.id} className='projectContainer bg-red-400 max-w-md place-items-center place-content-center items-center flex flex-col rounded-xl'>
//           <div className='bg-purple-800 mt-5'>
//             {/* <img className='max-w-sm rounded' src={`https://raw.githubusercontent.com/aiman-waseem/${
//                     repositories.name
//                   }/${
//                     repositories.default_branch
//                   }/${repositories.name.toLowerCase()}.png`}
//                   alt="project Image"
//                 />  */}
//             <h3 className='flex place-content-center text-lg font-bold py-2'>{repo.name}</h3>
//           </div>
//           <div className='flex space-x-4 mt-6'>
//            <button><a href={repo.html_url} target="_blank" rel="noopener noreferrer" className='px-4 py-2 bg-blue-500 text-white rounded-md'>Source Code</a></button> 
//             {/* Replace the `live_url` property below with the appropriate property containing the live link */}
//             <a href={repo.live_url} target="_blank" rel="noopener noreferrer" className='px-4 py-2 bg-blue-500 text-white rounded-md'>Live Link</a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Projects;


