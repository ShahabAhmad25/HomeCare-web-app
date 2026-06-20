import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import FAQItem from './FAQItem';
const FAQ = () => {
    return (
        <section className="section bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-slate-900  mb-12">Frequently Asked Questions</h2>
                <div className="max-w-2xl mx-auto space-y-4">
                    <FAQItem question="How do I book a service?" answer="To book a service, simply browse through our list of available services, select the one you need, and follow the prompts to schedule an appointment at your convenience." />
                    <FAQItem question="What areas do you serve?" answer="We serve a wide range of locations. Please check our service area page to see if we cover your location." />
                    <FAQItem question="Are your service providers licensed and insured?" answer="Yes, all our service providers are fully licensed and insured to ensure the highest quality and safety standards." />
                </div>
            </div>
        </section>
    )
}

export default FAQ