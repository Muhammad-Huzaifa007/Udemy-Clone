import React from 'react'

const Trending = () => {
  return (
    <>
    <section className='p-5 bg-[#f6f7f9]'>
        {/* Main div */}
        <div>
            <div className='flex justify-start'>
                <h1 className='text-[#303141] text-3xl font-bold'>Trending Now</h1>
            </div>
            <div className="bg-gray-400 h-[1px] w-full mt-4"></div>
            {/* the Div to contain both left and right portion */}
            <div className='mt-5 flex flex-col lg:flex-row justify-between'>
            {/* Left Side div */}
            <div className='flex flex-col items-centre lg:items-start lg:w-[340px]'>
                <h2 className='text-[#303141] text-3xl font-bold'>ChatGPT is a top skill</h2>
                <a href='#' className='mt-4 text-[#5022C3] text-lg font-bold'>See ChatGPT courses <span className='text-lg  text-center ml-2'><i class="fas fa-greater-than text-xs"></i>
                </span></a>
                <p className='text-[#303141] text-sm'>4,157,639 learners</p>
                <button className='mt-7 border border-[#5022C3] rounded text-base font-bold px-10 py-2 text-[#5022C3] cursor-pointer hover:bg-gray-200'>Show all trending skills <span className='ml-2'><i class="fas fa-arrow-right text-sm"></i>

                </span></button>
            </div>

            {/* Right Side Div */}
            <div className='flex flex-wrap ml-2 gap-x-15'>
                {/* Div - 1  */}
                <div className='flex flex-col items-start'>
                    <h2 className='text-[#303141] text-3xl font-bold mt-10 lg:mt-0'>Development</h2>
                    <a href="#" className='mt-5 text-[#5022C3] text-lg font-bold'>Python<span className='ml-2 text-center'><i class="fas fa-greater-than text-xs"></i></span></a>
                    <p className='text-[#303141] text-sm'>47,367,141 learners</p>
                    
                    <a href="#" className='mt-5 text-[#5022C3] text-lg font-bold'>Web Development<span className='ml-2 text-center'><i class="fas fa-greater-than text-xs"></i></span></a>
                    <p className='text-[#303141] text-sm'>13,945,286 learners</p>
                    
                    <a href="#" className='mt-5 text-[#5022C3] text-lg font-bold'>Data Science<span className='ml-2 text-center'><i class="fas fa-greater-than text-xs"></i></span></a>
                    <p className='text-[#303141] text-sm'>7,717,356 learners</p>
                    
                    
                </div>

                {/* Div - 2  */}
                <div className='flex flex-col items-start'>
                    <h2 className='text-[#303141] text-3xl font-bold mt-10 lg:mt-0'>Design</h2>
                    <a href="#" className='mt-5 text-[#5022C3] text-lg font-bold'>Blender<span className='ml-2 text-center'><i class="fas fa-greater-than text-xs"></i></span></a>
                    <p className='text-[#303141] text-sm'>2,883,698 learners</p>
                    
                    <a href="#" className='mt-5 text-[#5022C3] text-lg font-bold'>Graphic Design<span className='ml-2 text-center'><i class="fas fa-greater-than text-xs"></i></span></a>
                    <p className='text-[#303141] text-sm'>4,463,825 learners</p>
                    
                    <a href="#" className='mt-5 text-[#5022C3] text-lg font-bold'>Adobe Photoshp<span className='ml-2 text-center'><i class="fas fa-greater-than text-xs"></i></span></a>
                    <p className='text-[#303141] text-sm'>12,654,300 learners</p>
                    
                    
                </div>
                {/* Div - 3  */}
                <div className='flex flex-col items-start'>
                    <h2 className='text-[#303141] text-3xl font-bold max-md:mt-10 mt-10 lg:mt-0'>Business</h2>
                    <a href="#" className='mt-5 text-[#5022C3] text-lg font-bold'>PMI Project Management Professional (PMP)<span className='ml-2 text-center'><i class="fas fa-greater-than text-xs"></i></span></a>
                    <p className='text-[#303141] text-sm'>2,883,698 learners</p>
                    
                    <a href="#" className='mt-5 text-[#5022C3] text-lg font-bold'>Microsoft Power BI<span className='ml-2 text-center'><i class="fas fa-greater-than text-xs"></i></span></a>
                    <p className='text-[#303141] text-sm'>4,463,825 learners</p>
                    
                    <a href="#" className='mt-5 text-[#5022C3] text-lg font-bold'>Project Management<span className='ml-2 text-center'><i class="fas fa-greater-than text-xs"></i></span></a>
                    <p className='text-[#303141] text-sm'>12,654,300 learners</p>
                    
                    
                </div>

            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Trending