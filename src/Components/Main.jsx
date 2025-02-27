import React from "react";
import arrow from "../assets/up-arrow.png";
import card1 from "../assets/courses-cards/card-1.jpg";
import card2 from "../assets/courses-cards/card-2.jpg";

const Main = () => {
  return (
    <>
      <section className="p-7 max-sm:mt-60">
        <div className="mt-7 flex flex-col itms-start justify-center">
          <h1 className="text-[#303141] text-3xl font-bold ">
            All the skills you need in one place
          </h1>
          <p className="text-[#303141] text-lg mt-2">
            From critical skills to technical topics, Udemy supports your
            professional development.
          </p>
        </div>
        <div className="mt-10">
          <div>
            <ul className="flex items-center justify-start max-sm:justify-between gap-7 text-[#303141] text-lg font-bold  ">
              <li>
                <a href="#">Data Science</a>
              </li>
              <li className="hidden lg:block hover:text-gray-900">
                <a href="#">IT Certifications</a>
              </li>
              <li className="hidden lg:block hover:text-gray-900">
                <a href="#">LeaderShip</a>
              </li>
              <li className="hidden lg:block hover:text-gray-900">
                <a href="#">Web Developement</a>
              </li>
              <li className="hidden lg:block hover:text-gray-900">
                <a href="#">Communication</a>
              </li>
              <li className="hidden lg:block hover:text-gray-900">
                <a href="#">Business Analytics and Intelligence</a>
              </li>
              <li>
                <img
                  src={arrow}
                  className="h-7 font-bold inline lg:hidden"
                  alt=""
                />
              </li>
            </ul>
          </div>
          <div className="bg-gray-400 h-[1px] w-full mt-4"></div>
        </div>

        <div id="coursesList" className="mt-10 w-full overflow-x-auto px-4">
          <ul className="flex items-center gap-x-5 min-w-max">
            <li className="shrink-0">
              <a href="#">
                <div className="bg-gray-300 px-7 py-3 rounded-full text-[#303141] hover:bg-gray-400">
                  <h3 className="font-bold text-lg">ChatGPT</h3>
                  <p className="text-sm">4M+ learners</p>
                </div>
              </a>
            </li>
            <li className="shrink-0">
              <a href="#">
                <div className="bg-gray-300 px-7 py-3 rounded-full text-[#303141] hover:bg-gray-400">
                  <h3 className="font-bold text-lg">Data Science</h3>
                  <p className="text-sm">7M+ learners</p>
                </div>
              </a>
            </li>
            <li className="shrink-0">
              <a href="#">
                <div className="bg-gray-300 px-7 py-3 rounded-full text-[#303141] hover:bg-gray-400">
                  <h3 className="font-bold text-lg">Python</h3>
                  <p className="text-sm">47.7M+ learners</p>
                </div>
              </a>
            </li>
            <li className="shrink-0">
              <a href="#">
                <div className="bg-gray-300 px-7 py-3 rounded-full text-[#303141] hover:bg-gray-400">
                  <h3 className="font-bold text-lg">Machine Learning</h3>
                  <p className="text-sm">8M+ learners</p>
                </div>
              </a>
            </li>
            <li className="shrink-0">
              <a href="#">
                <div className="bg-gray-300 px-7 py-3 rounded-full text-[#303141] hover:bg-gray-400">
                  <h3 className="font-bold text-lg">Deep Learning</h3>
                  <p className="text-sm">2M+ learners</p>
                </div>
              </a>
            </li>
            <li className="shrink-0">
              <a href="#">
                <div className="bg-gray-300 px-7 py-3 rounded-full text-[#303141] hover:bg-gray-400">
                  <h3 className="font-bold text-lg">
                    Artificial Intelligence (AI)
                  </h3>
                  <p className="text-sm">3M+ learners</p>
                </div>
              </a>
            </li>
            <li className="shrink-0">
              <a href="#">
                <div className="bg-gray-300 px-7 py-3 rounded-full text-[#303141] hover:bg-gray-400">
                  <h3 className="font-bold text-lg">Statistics</h3>
                  <p className="text-sm">1M+ learners</p>
                </div>
              </a>
            </li>
            <li className="shrink-0">
              <a href="#">
                <div className="bg-gray-300 px-7 py-3 rounded-full text-[#303141] hover:bg-gray-400">
                  <h3 className="font-bold text-lg">
                    Natural Language Processing (NLP)
                  </h3>
                  <p className="text-sm">802,400+ learners</p>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div id="coursesCards" className="mt-10 overflow-y-hidden flex gap-4 overflow-x-auto">

          {/* card -1 */}
          <div 
          className="w-[330px] h-[400px] bg-neutral-50 border border-gray-300 rounded-xl shrink-0 transform transition duration-500 hover:scale-105">
            {/* Image */}
            <div>
              <img
                src={card1}
                className="h-full w-full object-cover rounded-t-xl"
                alt=""
              />
            </div>
            {/* Lower portion */}
            <div 
            className="px-5 py-2 gap-y-1 flex flex-col justify-center items-start  mb-7 text-[#282934]">
              <h2 className="text-lg font-bold">
                ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More
              </h2>
              <p>Julian Meleanson Benza Maman, Leap...</p>
              <p className="font-bold text-yellow-900">
                4.5 ⭐⭐⭐⭐⭐{" "}
                <span className="text-gray-800 text-sm font-light">
                  (44,456)
                </span>{" "}
              </p>
              <p className="text-lg font-bold">$9.99</p>
              <button 
              className="bg-blue-300 text-emerald-900 w-20 text-sm font-medium rounded py-1">
                Bestseller
              </button>
            </div>
          </div>
          {/* card -2  */}
          <div 
          className="w-[330px] h-[400px] bg-neutral-50 border border-gray-300 rounded-xl shrink-0 transform transition duration-500 hover:scale-105">
            {/* Image */}
            <div>
              <img
                src={card1}
                className="h-full w-full object-cover rounded-t-xl"
                alt=""
              />
            </div>
            {/* Lower portion */}
            <div 
            className="px-5 py-2 gap-y-1 flex flex-col justify-center items-start  mb-7 text-[#282934]">
              <h2 className="text-lg font-bold">
                ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More
              </h2>
              <p>Julian Meleanson Benza Maman, Leap...</p>
              <p className="font-bold text-yellow-900">
                4.5 ⭐⭐⭐⭐⭐{" "}
                <span className="text-gray-800 text-sm font-light">
                  (44,456)
                </span>{" "}
              </p>
              <p className="text-lg font-bold">$9.99</p>
            
            </div>
          </div>
          {/* card - 3  */}
          <div 
          className="w-[330px] h-[400px] bg-neutral-50 border border-gray-300 rounded-xl shrink-0 transform transition duration-500 hover:scale-105">
            {/* Image */}
            <div>
              <img
                src={card1}
                className="h-full w-full object-cover rounded-t-xl"
                alt=""
              />
            </div>
            {/* Lower portion */}
            <div 
            className="px-5 py-2 gap-y-1 flex flex-col justify-center items-start  mb-7 text-[#282934]">
              <h2 className="text-lg font-bold">
                ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More
              </h2>
              <p>Julian Meleanson Benza Maman, Leap...</p>
              <p className="font-bold text-yellow-900">
                4.5 ⭐⭐⭐⭐⭐{" "}
                <span className="text-gray-800 text-sm font-light">
                  (44,456)
                </span>{" "}
              </p>
              <p className="text-lg font-bold">$9.99</p>
            
            </div>
          </div>
          {/* card - 4  */}
          <div 
          className="w-[330px] h-[400px] bg-neutral-50 border border-gray-300 rounded-xl shrink-0 transform transition duration-500 hover:scale-105">
            {/* Image */}
            <div>
              <img
                src={card1}
                className="h-full w-full object-cover rounded-t-xl"
                alt=""
              />
            </div>
            {/* Lower portion */}
            <div 
            className="px-5 py-2 gap-y-1 flex flex-col justify-center items-start  mb-7 text-[#282934]">
              <h2 className="text-lg font-bold">
                ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More
              </h2>
              <p>Julian Meleanson Benza Maman, Leap...</p>
              <p className="font-bold text-yellow-900">
                4.5 ⭐⭐⭐⭐⭐{" "}
                <span className="text-gray-800 text-sm font-light">
                  (44,456)
                </span>{" "}
              </p>
              <p className="text-lg font-bold">$9.99</p>
            
            </div>
          </div>
          {/* card - 5  */}
          <div 
          className="w-[330px] h-[400px] bg-neutral-50 border border-gray-300 rounded-xl shrink-0 transform transition duration-500 hover:scale-105">
            {/* Image */}
            <div>
              <img
                src={card1}
                className="h-full w-full object-cover rounded-t-xl"
                alt=""
              />
            </div>
            {/* Lower portion */}
            <div 
            className="px-5 py-2 gap-y-1 flex flex-col justify-center items-start  mb-7 text-[#282934]">
              <h2 className="text-lg font-bold">
                ChatGPT Complete Guide: Learn Generative AI, ChatGPT & More
              </h2>
              <p>Julian Meleanson Benza Maman, Leap...</p>
              <p className="font-bold text-yellow-900">
                4.5 ⭐⭐⭐⭐⭐{" "}
                <span className="text-gray-800 text-sm font-light">
                  (44,456)
                </span>{" "}
              </p>
              <p className="text-lg font-bold">$9.99</p>
            
            </div>
          </div>
        </div>
        
        <div className="mt-10 max-sm:flex justify-center items-center">
        <button className="border border-[#6d28d2] text-[#6d28d2] text-lg font-bold py-2 px-3 rounded cursor-pointer hover:bg-gray-200">Show all Data Science Courses</button>
        </div>
      </section>
    </>
  );
};

export default Main;
