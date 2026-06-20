import React from 'react'
import ServiceCard from './serviceCard'
import ElectricianImg from '../assets/images/electrician.jpg'
import PlumberImg from '../assets/images/plumber.jpg'
import GardnerImg from '../assets/images/gardner.jpg'

const ServiceSection = () => {
  return (
    <section className=' section '>
      <div className='container'>
        <h2 className="text-3xl font-bold text-center mb-8 text-slate-900">Our Popular Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ServiceCard image={ElectricianImg} text="Electrician" description="Top-rated service for repairing home items" />
          <ServiceCard image={PlumberImg} text="Plumber" description="Our most booked service for urgent plumbing needs." />
          <ServiceCard image={GardnerImg} text="Gardner" description="Trending service for a pristine lawn" />
        </div>
      </div>
    </section>
  )
}
export default ServiceSection;