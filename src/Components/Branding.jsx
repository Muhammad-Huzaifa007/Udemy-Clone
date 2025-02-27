import React from 'react'
import bg2 from '../assets/bg2.png'
const Branding = () => {
  return (
    <>
    <section className="p-5">
        <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-between max-sm:space-y-7 max-sm:items-center'>
            {/* Left Side Div */}
            <div className='flex flex-col items-start lg:w-[680px] mx-2 max-sm:ml-5'>
                <h1 className='text-[#303141] text-3xl font-bold'>Top trends for the future of work</h1>
                <p className='my-4 text-[#303141] text-lg font-normal '>Our 2025 Global Learning & Skills Trends Report is out now! Find out how to build the skills to keep pace with change.</p>
                <button className='text-[#6d28d2] font-bold border px-3 py-2 rounded cursor-pointer hover:bg-gray-200'>Get the Report <span><i className="fas fa-arrow-right ml-2 text-center"></i>
                </span></button>
            </div>
            {/* Right Side div */}
            <div className='mx-3 flex w-[350px] sm:w-[650px] md:w-[900px] lg:w-[1700px] max-sm:justify-center max-sm:items-center'>
                <img src={bg2} alt="" />
            </div>
        </div>
    </section>
    </>
  )
}

export default Branding