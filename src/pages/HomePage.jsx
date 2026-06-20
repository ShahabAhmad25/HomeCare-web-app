import React from 'react'
import HeroSection from '../components/herosection'
import ServiceSection from '../components/servicesection'
import ChooseUs from '../components/chooseUs'
import HowItWorks from '../components/HowItWorks'
import ClientReview from '../components/clientReviews'
import FAQ from '../components/FAQ/FAQSection'

const HomePage = () => {
    return (
        <div className='class="relative flex min-h-screen w-full flex-col'>
            <main class="min-h-screen bg-white flex flex-col">
               <HeroSection/>
               <ServiceSection/>
               <ChooseUs/>
               <HowItWorks/>
               <ClientReview/>
               <FAQ/>
            </main>
        </div>
    )
}

export default HomePage