import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { MdEditDocument } from "react-icons/md";
import { Link, useParams  } from 'react-router-dom';
const ChooseBookingMethod = () => {
   const { category } = useParams();
  return (
    <div className="flex justify-center items-center p-4 sm:p-5">
      <div className="flex flex-col w-full max-w-2xl bg-white shadow-lg rounded-xl">
        <div className="px-6 py-8 sm:p-10 text-center">
          <h1 className="text-slate-900  text-3xl font-bold  pb-2">How do you want to find help?</h1>
          <p className="text-gray-600  text-base font-normal leading-normal pb-6">Choose your path to find the right professional for your job.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link to={`/services/providers/${category}` }className="flex flex-col gap-4 rounded-xl border border-gray-300  bg-background-light  p-6 text-left hover:border-blue-900  hover:shadow-lg transition-all duration-300  hover:scale-105">
              <div className="text-primary">
                <span > <AiOutlineSearch color='#1173D4' size='3em' fontWeight='5rem' /></span>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-slate-900  text-lg font-bold leading-tight">Browse {category}</h2>
                <p className="text-slate-900  text-sm font-normal leading-normal">See available professionals, compare profiles, and book the one you like.</p>
              </div>
            </Link>
             <Link to="/services/booking-details" className="flex flex-col gap-4 rounded-xl border border-gray-300  bg-background-light  p-6 text-left hover:border-blue-900  hover:shadow-lg transition-all duration-300  hover:scale-105">
               <div className="text-primary">
                <span><MdEditDocument color='#1173D4' size='3rem' /></span>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-slate-900  text-lg font-bold ">Post Your Job</h2>
                <p className="text-slate-900  text-sm font-normal leading-normal">Describe your problem, and let interested professionals send you quotes.</p>
              </div>
            </Link>
          </div>
          <div className="flex justify-center pt-8">
            <Link to="/services" className="flex cursor-pointer max-w-full items-center justify-center rounded-lg h-10 px-4 bg-white 
             text-gray-600  text-sm font-bold leading-normal  hover:bg-gray-100 ">
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseBookingMethod