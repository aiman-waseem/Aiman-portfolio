import style from './Header/Header.module.css'
function Navbar() {
    return (
      <>
        <div className={` ${style.border} w-[10rem]`}>
          <img className=' ' src="/images/name-logo-removebg-preview.png" alt="" />
   
      </div>
      </>
    );
  }
  
  export default Navbar;
  