import React from 'react'
import logo from '../assets/udemy.svg'
import globe from '../assets/globe.png'

const Footer_end = () => {
  return (
    <>
    <section className='bg-[#111116] text-white p-3 border-t border-gray-200'>
        <div className='flex justify-between items-center mx-4 max-md:flex-col max-md:items-start'>
            <div className='flex items-center space-x-4'> 
                <img src={logo} className='w-25 h-15'  alt="" />
                <p className='text-sm'>© 2025 Udemy, Inc.</p>
            </div>
            <div>
                <a href='#' className='text-sm font-semibold hover:underline'>Cookie Settings</a>
            </div>
            <div className='flex items-center space-x-3'>
                <div>
                <i class="fas fa-globe fa-lg"></i>
                </div>
                <a href="#">English</a>
            </div>

        </div>
    </section>
    </>
  )
}

export default Footer_end