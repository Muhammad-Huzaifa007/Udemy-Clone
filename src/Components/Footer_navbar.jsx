import React from 'react'
import logo1 from "../assets/footer/logo1.svg";
import logo2 from "../assets/footer/logo2.svg";
import logo3 from "../assets/footer/logo3.svg";
import logo4 from "../assets/footer/logo4.svg";

const Footer_navbar = () => {
  return (
   <>
   <section className='bg-[#1d1e27] max-lg:mt-15 max-md:mt-0 max-sm:mt-8 lg:mt-[-19px] border-b border-gray-200'>
    <div className='flex lg:justify-evenly items-center p-6 max-lg:flex-col'>
        <div>
            <h2 className='text-white text-lg font-bold max-lg:mb-5'>Top companies choose <span className='text-[#C0C4FC]'>Udemy Business</span> to build in-demand career skills.</h2>
        </div>
        <div className='flex flex-wrap space-x-3'>
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
        </div>
    </div>
   </section>
   </>
  )
}

export default Footer_navbar