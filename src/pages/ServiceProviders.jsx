import React from 'react'
import ProviderCard from '../components/ProviderCard'
import { useParams } from 'react-router-dom';
import { providers } from '../data/providersData';
import { MdOutlineExpandMore } from "react-icons/md";

const ServiceProviders = () => {
  const {category}= useParams();
  const filterProviders = providers.filter(
    (provider) => provider.category.toLowerCase() === category.toLowerCase()
  );
  return (
    <main className="container  mx-auto px-4 py-8 sm:py-12">
      <div className=" mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 ">
            {category}</h1>
          <p className="mt-2  text-slate-900 ">Showing professionals near <span className="font-semibold text-slate-900">Sattelite Town,SGD </span>
            <button className="text-sm text-blue-700/90 underline">Change location</button></p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-300 text-sm  hover:bg-slate-100  transition-colors">
              <span>Sort by: </span>
              <span><MdOutlineExpandMore /> </span>
            </button>
            <button className="flex items-center gap-2  px-4 py-2 rounded-lg bg-white border border-slate-300 text-sm  hover:bg-slate-100  transition-colors">
              <span>Rating</span>
              <span > <MdOutlineExpandMore /> </span>
            </button>

          </div>
          <div className="text-sm text-slate-500 ">
            Showing <span className="font-bold text-slate-900 ">1-10</span> of <span className="font-bold text-slate-900 ">45</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 space-y-6">
           {filterProviders.length > 0 ? (
            filterProviders.map((provider) => (
              <ProviderCard
                key={provider.id}
                image={provider.image}
                name={provider.name}
                description={provider.description}
                rating={provider.rating}
                location={provider.location}
                reviewCount={provider.reviewCount}
              />
            ))
          ) : (
            <p>No providers found for this category.</p>
          )}
        
        </div>


      </div>
    </main>
  )
}

export default ServiceProviders