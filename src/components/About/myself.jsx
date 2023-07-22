import AboutCard from "./AboutCard";
import Skills from "./Skills";
import Certifications from "./Certifications";
import { useState } from "react";

function AboutList({ setActiveDetail, activeDetail }) {
    return (
      <div className="grid grid-cols-3 justify-center  font-semibold text-lg md:text-2xl md:mx-72 rounded-lg">
    
        <a 
        className="  m-3  text-white hover:underline hover:text-purple-500 "
        
          href='#AboutCard'
          onClick={() => setActiveDetail('#AboutCard')}
        
        //   className={activeDetail === '#AboutMe' ? styles.active : ''}
        >
          About
        </a>
       

       
        <a
         className="  m-3 text-white  hover:underline hover:text-purple-500 "
          href='#Skills'
          onClick={() => setActiveDetail('#Skills')}
        //   className={activeDetail === '#Skills' ? styles.active : ''}
        >
          Skills
        </a>
        

        <a
         className=" m-3 text-white hover:text-purple-600 "
          href='#Ceritifications'
          onClick={() => setActiveDetail('#Certifications')}
        //   className={activeDetail === '#Ceriticates' ? styles.active : ''}
        >
         Certifications
        </a>
      </div>
    );
  }
  
  const MySelf = () => {
    const [activeDetail, setActiveDetail] = useState('#AboutCard');
    if (activeDetail === '#AboutCard') {
      return (
        <div >
          <AboutList
            setActiveDetail={setActiveDetail}
            activeDetail={activeDetail}
          />
          <AboutCard />
        </div>
      );
    }
    if (activeDetail === '#Skills') {
      return (
        <div >
          <AboutList
            setActiveDetail={setActiveDetail}
            activeDetail={activeDetail}
          />
          <Skills />
        </div>
      );
    }
    if (activeDetail === '#Certifications') {
      return (
        <div >
          <AboutList
            setActiveDetail={setActiveDetail}
            activeDetail={activeDetail}
          />
          <Certifications />
        </div>
      );
    }
    return (
      <div className="flex justify-between  " >
        <a
          href='#AboutCard'
          onClick={() => setActiveDetail('#AboutCard')}
          // className={activeDetail === '#AboutCard' ? styles.active : ''}
          //  className={activeDetail === '#AboutCard' ? `${styles.active}  border-solid border-b-2 border-purple-500` : "m-3 text-white hover:underline hover:text-purple-400"}
        >
          About
        </a>
        <a
          href='#Skills'
          className="px-3 mx-3"
          onClick={() => setActiveDetail('#Skills')}
        
        >
          Skills
        </a>
        <a
          className="px-3 mx-3"
          href='#Ceritifications'
          onClick={() => setActiveDetail('#Ceritifications')}
        //   className={activeDetail === '#Ceriticates' ? styles.active : ''}
         >
         Certifications
        </a>
      </div>
    );
    }
  
  export default MySelf;
    