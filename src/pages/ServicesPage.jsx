import React from 'react'
import FAQItem from '../components/FAQ/FAQItem'
import ServiceCard from '../components/serviceCard'
import categories from '../data/categories.json'
import { AiOutlineSearch } from "react-icons/ai";

const ServicePage = () => {
    return (
        <main className='container mx-auto px-4 py-8 sm:py-12'>
            <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Find the Right Service for Your Needs</h1>
                <p className="mt-4 text-lg text-slate-600">Browse our comprehensive list of home services.</p>
            </div>
            <div className="mb-8 space-y-4">
                <div className="relative">
                  <span className='absolute left-4 top-3.5'> <AiOutlineSearch color='gray' size='1.25em'/></span> 
                    <input
                        className="w-full bg-white dark:bg-background-dark border border-slate-300 rounded-lg pl-12 pr-4 py-3 text-base focus:ring-2 focus:ring-primary focus:outline-none"
                        placeholder="Search for services like 'plumber', 'electrician', etc." 
                        type="text" 
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {categories.map(category => (
                    <ServiceCard 
                        key={category.id}
                        image={category.image}
                        text={category.name} 
                        description={category.description}
                        categoryId={category.id}
                    />
                ))}
            </div>
            <div className="mt-16">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-center">
                    Common Questions About Our Services</h2>
                <div className="mt-8 max-w-2xl mx-auto space-y-4">
                    <FAQItem question="How do I book a service?" answer="To book a service, simply browse our list of services, select the one you need, and click on the 'Book Now' button. Follow the prompts to complete your booking." />
                    <FAQItem question="What areas do you serve?" answer="We serve a wide range of locations. Please check our service area page to see if we cover your location." />
                    <FAQItem question="Are your service providers licensed and insured?" answer="Yes, all our service providers are fully licensed and insured to ensure the highest quality and safety standards." />
                </div>
            </div>
        </main>
    )
}

export default ServicePage