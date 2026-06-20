import React from 'react'
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { MdCelebration } from "react-icons/md";
const OurStory = () => {
  return (

    <section className="section bg-gray-50 ">
      <div classNameName='container '>
        <div className=" flex flex-col gap-3 mx-2 ">
          <h1 className=" text-3xl font-bold text-center mx-auto">
            Our Story
          </h1>
          <p className="text-gray-600  text-md  text-center max-w-[720px] mx-auto">
            From a simple idea to a thriving platform, here's a look at our journey.</p>
        </div>
        <div className="grid grid-cols-[auto_1fr] gap-x-4 px-3 md:gap-x-6 md:px-30 md:py-10 ">
          <div className="flex flex-col items-center gap-2">
            <div className="bg-blue-700/90 rounded-full size-8 flex items-center justify-center text-white">
              <span> <MdOutlineOutlinedFlag /></span>
            </div>
            <div className="w-1 bg-gray-300 h-full"></div>
          </div>
          <div className="flex flex-1 flex-col pb-8">
            <p className="text-gray-600  text-base font-medium">2025
            </p>
            <p className="text-slate-900  text-xl font-bold">The
              Beginning</p>
            <p className="text-gray-600  text-md  mt-2">
              HomeCare was founded with a mission to simplify the process of finding reliable
              home service professionals.</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-1 bg-gray-300 h-full"></div>
            <div className="bg-blue-700/90 rounded-full size-8 flex items-center justify-center text-white">
              <span> <IoMdTrendingUp size='1.5rem' /></span>
            </div>
            <div className="w-1 bg-gray-300 h-full"></div>
          </div>
          <div className="flex flex-1 flex-col pb-8">

            <p className="text-slate-900  text-xl font-bold">Vision
            </p>
            <p className="text-gray-600  text-md  mt-2">
              Our goal is to create a platform where homeowners can easily connect with skilled,
              reliable service providers in one place.</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-1 bg-gray-300 h-full"></div>
            <div className="bg-blue-700/90 rounded-full size-8 flex items-center justify-center text-white">
              <span><MdCelebration /></span>
            </div>
          </div>
          <div className="flex flex-1 flex-col">

            <p className="text-slate-900 text-xl font-bold">Looking
              Ahead
            </p>
            <p className="text-gray-600 text-md  mt-2">
              We’re just getting started, but our commitment to improving your home service
              experience is what drives us every day</p>
          </div>
        </div>
      </div>
    </section >

  )
}

export default OurStory