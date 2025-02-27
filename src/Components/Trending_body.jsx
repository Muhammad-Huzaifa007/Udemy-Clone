import React from 'react'
import trending from '../assets/trending.webp'

const Trending_body = () => {
  return (
    <>
  <section className='bg-[#f6f7f9] p-5 mt-3'>
    <div className='h-screen w-full flex flex-col lg:flex-row max-lg:justify-center max-lg:items-center'>
    {/* Left Portion */}
    <div className='h-full w-6/12 flex flex-col justif-start py-5 gap-y-8 max-md:mt-2 mt-12 max-lg:justify-center max-lg:items-center max-lg:w-[600px] max-sm:w-[350px]'>
      <h3 className='text-3xl font-normal'>Booz | Allen | Hamilton</h3>
      <h2 className='text-[#303141] text-3xl font-bold max-sm:font-semibold max-sm:text-2xl'>Booz Allen Hamilton Unlocks Talent Retention and Productivity Through Upskilling</h2>
      <div className='flex max-sm:flex-col gap-x-5'>
        <div className='flex flex-col border-b border-gray-300 py-5 w-[250px]'>
          <h2 className='text-[#303141] text-4xl font-bold'>93%</h2>
          <p className=' font-normal'>retention rate among participating employees</p>
        </div>
        <div className='flex flex-col  border-b border-gray-300 py-5 w-[250px]'>
          <h2 className='text-[#303141] text-4xl font-bold'>65%</h2>
          <p>of learners noted a positive impact on their productivity</p>
        </div>
      </div>
      <button className='w-[170px] bg-[#6015d1] text-white font-semibold px-4 py-2 rounded cursor-pointer hover:bg-[#6030d1]'>Read Full Story <span className='ml-2 text-center'><i class="fas fa-arrow-right text-xs"></i></span></button>
    </div>
    {/* Right Portion */}
    <div className='h-full lg:w-6/12 max-md:mt-5 '>
      <img src={trending} className='h-full w-full' alt="" />
    </div>
    </div>
  </section>
    </>
  )
}

export default Trending_body