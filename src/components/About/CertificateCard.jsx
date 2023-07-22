import { AiOutlineLink } from 'react-icons/ai';

const CertificateCard = ({ certificates }) => {
    return (
      //className='my-5 text-white place-content-center '
      <div className='bg-purple-600 my-3 p-4 py-1 rounded-lg bg-gradient-to-b from-purple-800 to-gray-800' >
        <div className='rounded-xl'>
        <div className=' px-8 '>
          <h3 className='text-lg font-bold '>{certificates.name}</h3>
        </div>
        
          <div className='px-8'  >
            <p>{certificates.platform}</p>
            <a href={certificates.verify}>
              <a target='_blank' >
                <AiOutlineLink className='w-full h-6  ' style={{color:"white"}} />
              </a>
            </a>
          </div>
        </div>
          {/* <div className='shadow-lg bg-cyan-500  shadow-cyan-500/50' > */}
            {/* <a href={certificates.verify}>
              <a target='_blank' >
                <AiOutlineLink style={{color:"black"}} />
              </a>
            </a> */}
          {/* </div> */}
        
      </div>
    );
  };
  
  export default CertificateCard;