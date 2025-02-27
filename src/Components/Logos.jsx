import React from 'react'
import logo1 from "../assets/logos/logo1.svg";
import logo2 from "../assets/logos/logo2.svg";
import logo3 from "../assets/logos/logo3.svg";
import logo4 from "../assets/logos/logo4.svg";
import logo5 from "../assets/logos/logo5.svg";
import logo6 from "../assets/logos/logo6.svg";
import logo7 from "../assets/logos/logo7.svg";
import logo8 from "../assets/logos/logo8.svg";

const Logos = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center my-5 p-7 max-sm:my-0 '>
        <p className='text-[#595c73] text-lg font-medium'>Trusted by over 16,000 companies and millions of learners around the world</p>
            <div className='flex flex-wrap mt-7 gap-10 lg:gap-15 '>
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
                <img src={logo6} alt="" />
                <img src={logo7} alt="" />
                <img src={logo8} alt="" />
            </div>
    </div>
    </>
  )
}

export default Logos