import React from 'react'
import logo from '../assets/logo-udemy.svg'
import cart from '../assets/cart.png'
import globe from '../assets/globe.png'
import hamburger from '../assets/hamburger.png'

const Navbar = () => {
  return (
    <nav className='py-3 px-1 bg-[#fff]  shadow-2xl'>
        <div className='flex items-center justify-between lg:justify-evenly'>
          <div className='lg:hidden w-7'>
            <img src={hamburger} alt="" />
          </div>
        <img className='w-28 h-10' src={logo} alt="" />
        <a href='#' className='text-md hidden lg:inline hover:text-[#6d28d2] '>Explore</a>
        <input className='w-5/12 py-3 px-7 rounded-full border border-gray-400 hidden lg:inline-block' type="text" placeholder='Search for anything' />
        <a href='#' className='text-sm hidden lg:inline-block hover:text-[#6d28d2]'>Udemy Business</a>
        <a href='#' className='text-sm hidden lg:inline-block hover:text-[#6d28d2]'>Teach on Udemy</a>
        <img className='h-7 cursor-pointer hover:text-[#6d28d2]' src={cart} alt="" />
        <button className='text-[#6d28d2] text-sm font-bold border border-[#8638ca] px-4 py-2 rounded hidden lg:block cursor-pointer hover:bg-gray-200'>Log in</button>
        <button className='bg-[#6015d1] text-white text-sm font-bold border px-4 py-2 rounded hidden lg:block cursor-pointer hover:bg-[#6d20d2]'>Sign Up</button>
        <div className='border border-gray-700  p-2 rounded hidden lg:inline-block hover:bg-gray-200 cursor-pointer'>
        <img className='h-5' src={globe} alt="" />
        </div>
    </div>
    </nav>
  )
}

export default Navbar