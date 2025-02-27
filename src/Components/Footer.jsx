import React from 'react'

const Footer = () => {
  return (
    <>
    <section className='bg-[#111116] text-white p-10'>
        <div className='grid grid-cols-4 justify-items-normal max-md:grid-cols-3 max-sm:grid-cols-2 gap-y-8 mx-3'>
            {/* First Column */}
            <div className='flex flex-col justify-start space-y-1'>
                <h2 className='mb-3 font-bold text-lg'>About</h2>
                <a className='hover:underline text-sm font-medium' href="#">About us</a>
                <a className='hover:underline text-sm font-medium' href="#">Careers</a>
                <a className='hover:underline text-sm font-medium' href="#">Contact us</a>
                <a className='hover:underline text-sm font-medium' href="#">Blog</a>
                <a className='hover:underline text-sm font-medium' href="#">Investors</a>
            </div>
          
            {/* Second Column */}
            <div className='flex flex-col justify-start space-y-1'>
                <h2 className='mb-3 font-bold text-lg'>Discovery Udemy</h2>
                <a className='hover:underline text-sm font-medium' href="#">Get the app</a>
                <a className='hover:underline text-sm font-medium' href="#">Teach on Udemy</a>
                <a className='hover:underline text-sm font-medium' href="#">Plans and Pricing</a>
                <a className='hover:underline text-sm font-medium' href="#">Affiliate</a>
                <a className='hover:underline text-sm font-medium' href="#">Help and Support</a>
            </div>

            {/* Third Column */}
            <div className='flex flex-col justify-start space-y-1'>
                <h2 className='mb-3 font-bold text-lg'>Udemy for Business</h2>
                <a className='hover:underline text-sm font-medium' href="#">Udemy Business</a>
            </div>

            {/* Fourth Column */}
            <div className='flex flex-col justify-start space-y-1'>
                <h2 className='mb-3 font-bold text-lg'>Legal & Accessibility</h2>
                <a className='hover:underline text-sm font-medium' href="#">Accessibility statement</a>
                <a className='hover:underline text-sm font-medium' href="#">Privacy policy</a>
                <a className='hover:underline text-sm font-medium' href="#">Sitemap</a>
                <a className='hover:underline text-sm font-medium' href="#">Terms</a>
            </div>
          
        </div>
    </section>
    </>
  )
}

export default Footer