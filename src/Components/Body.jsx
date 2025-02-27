import React from "react";
// import bgImage from '.'

const Body = () => {
  return (
    <section className="mt-0.5">
      <div className="bg-[url('/bg.png')] h-[400px] bg-center bg-cover">

      <div className="md:shadow-xl px-4 py-7 lg:mx-20 lg:my-15 md:mx-15 md:my-10 inline-block w-[380px] max-sm:mt-[400px]">
        <h1 className=" text-3xl font-bold text-[#303141] mb-3 max-sm: ">Last day for courses from $9.99.</h1>
        <p className="text-base text-[#303141]">Your future's wide open, and so is our course library. Learn more for less.</p>
      </div>
      <div className=" sm:hidden m-4 px-4 py-2 border border-gray-400">
        <input type="text" placeholder="What do you want to learn?" />
      </div>
      </div>
    </section>
  );
};

export default Body;
