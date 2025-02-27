import React from 'react'
import feature from "../assets/features/feature.png";
import feature1 from "../assets/features/feature1.webp";
import feature2 from "../assets/features/feature2.webp";
import feature3 from "../assets/features/feature3.png";
import feature4 from "../assets/features/feature4.webp";

const Features = () => {
  return (
    <>
    <section className='mt-7 bg-[##f6f7f9] p-5'>
      <div className=' mb-7 flex justify-start max-lg:justify-center max-lg:items-center'>
        <h1 className='text-[#303141] text-3xl font-bold'>Learning Focuses on your goals</h1>
      </div>
        {/* Main div | Includes both div */}
        <div className='flex flex-col  lg:justify-between lg:flex-row '>
            {/* Left Div */}
            <div className='flex flex-col gap-4 max-lg:justify-center max-lg:items-center'>
              {/* First Upper div of left Side */}
                <div className='flex items-center justify-center gap-4 border border-gray-300 md:w-[530px]  p-5 rounded cursor-pointer hover:bg-gray-200'>
                  <div>
                    <img src={feature1} className='h-20 w-35' alt="" />
                  </div>
                  <div>
                    <h2 className='text-[#303141] text-lg font-bold'>Hands-on training</h2>
                    <p className='my-1 text-[#303141] text-base'>Upskills effectively with AI-powered coding exercises,practice tests,and quizzes.</p>
                  </div>
                </div>

              {/* Second Upper div of left Side */}
                <div className='flex items-center justify-center gap-4 border border-gray-300 md:w-[530px] p-5 rounded cursor-pointer hover:bg-gray-200'>
                  <div>
                    <img src={feature2} className='h-20 w-35' alt="" />
                  </div>
                  <div>
                    <h2 className='text-[#303141] text-lg font-bold'>Certification prep</h2>
                    <p className='my-1 text-[#303141] text-base'>Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.</p>
                    <p className='text-[#6d28d2] font-bold'>Explore Courses <span className='ml-2 align-middle'><i class="fas fa-arrow-right"></i>
                    </span></p>
                  </div>
                </div>
              {/* Third Upper div of left Side */}
                <div className='flex items-center justify-center gap-4 border border-gray-300 md:w-[530px] p-5 rounded cursor-pointer hover:bg-gray-200'>
                  <div>
                    <img src={feature3} className='h-20 w-35' alt="" />
                  </div>
                  <div>
                    <h2 className='text-[#303141] text-lg font-bold'>Insights and analytics</h2>
                    <p className='my-1 text-[#303141] text-base'>Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.</p>
                    <p className='text-[#6d28d2] font-bold'>Explore Courses <span className='ml-2 align-middle'><i class="fas fa-arrow-right"></i>
                    </span></p>
                  </div>
                </div>
              {/* Fourth Upper div of left Side */}
                <div className='flex items-center justify-center gap-4 border border-gray-300 md:w-[530px] p-5 rounded cursor-pointer hover:bg-gray-200'>
                  <div>
                    <img src={feature4} className='h-20 w-35' alt="" />
                  </div>
                  <div>
                    <h2 className='text-[#303141] text-lg font-bold'>Customizable content</h2>
                    <p className='my-1 text-[#303141] text-base'>Create tailored learning paths for team and organization goals and even host your own content and resources.</p>
                    <p className='text-[#6d28d2] font-bold'>Explore Courses <span className='ml-2 align-middle'><i class="fas fa-arrow-right"></i>
                    </span></p>
                  </div>
                </div>
    
            </div>

            {/* Right Div */}
            <div className=' max-lg:justify-center max-lg:items-center'>
              <img src={feature} alt="" />
            </div>
          
        </div>
    </section>
    </>
  )
}

export default Features