import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ProviderDetails = ({id,category,image,name,location,description,reviewCount,rating}) => {
  return (
     <div
              className="bg-white  rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/4">
                  <img alt="John Doe" className="h-45 w-full sm:h-full object-cover"
                    src={image} />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 ">{name}</h3>
                        <p
                          className="text-sm text-slate-600  flex items-center gap-1 mt-1">
                          <span> <IoLocationOutline /></span>
                          <span>{location}</span>
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-slate-900">
                        <span className="font-bold text-base">{rating}</span>
                        <span><FaStar/></span>
                        <span className="text-sm text-slate-600 ">({reviewCount})</span>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-slate-600 ">
                     {description}
                    </p>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <Link to='/booking/provider-booking-details' className="w-full sm:w-auto text-center rounded-lg px-5 py-2.5 text-sm font-bold bg-blue-700/90 hover:bg-blue-700 text-white  transition-colors"
                      >Book now</Link>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default ProviderDetails