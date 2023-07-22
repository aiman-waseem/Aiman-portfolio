
import { certificates } from '../../others/Data';

import CertificateCard from './CertificateCard';

const Certifications = () => {
  return (
    <div className='grid justify-center place-content-center place-items-center '>
    {/* // className='grid justify-center' */}
    <div className='p-8 m-8    bg-slate-800 bg-opacity-5 shadow-purple-800 shadow-lg     rounded-lg md:w-10/12'>
      <h1 className='text-4xl'>Certificates</h1>
      <div className='rounded-xl' >
        {certificates.map((certificates, index) => (
          <CertificateCard key={index} certificates={certificates} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Certifications;
