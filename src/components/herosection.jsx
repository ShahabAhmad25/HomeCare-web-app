import React from 'react'
import HeroImage from '../assets/images/herosection-img.png'
import { Link } from 'react-router-dom'
const HeroSection = () => {
    return (
        <section className="bg-linear-to-r from-blue-700 via-indigo-500 to-purple-700">
            <div className=" mx-auto px-4 py-4 grid gap-3.8 md:grid-cols-[2fr_1fr]  text-white">
               <div className='md:pt-10'>
                 <h1 class="text-4xl md:text-5xl font-black text-center">From repair to care we’re always there.</h1>
                <p class="mt-4 l mx-auto  md:text-lg md:mt-15 text-center text-slate-200">
                    Your one-stop solution for reliable and professional home services.
                </p>
                <div class="mt-10 flex flex-col justify-center items-center md:flex-row  md:mt-15 gap-4">
                    <div className='flex gap-4'>
                      <Link to="/services">
                        <button
                            class="rounded-full bg-blue-900 px-8 py-3  text-base font-bold text-white shadow-lg hover:bg-primary/90 transition-all transform hover:scale-105">
                            Book a Service
                        </button>
                    </Link>
                 
                    </div>
                  <Link to="/services/booking-details">
                     <button class="rounded-full bg-red-600 px-8 py-3 text-base font-bold text-white shadow-lg hover:bg-red-700 transition-all transform hover:scale-105 flex items-center gap-2">
                        Post Urgent Task
                    </button>
                   </Link>
                </div>
                 </div>
               <div>
                 <img className='' src={HeroImage} alt="" />
               </div>
              
            </div>
        </section>
    )
}

export default HeroSection