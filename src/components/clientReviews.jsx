import React from 'react'
import ReviewCard from './reviewCard'
import Image from '../assets/images/user.png'
const ClientReview = () => {
    return (
        <section className="bg-white section">
            <div className="container ">
                <h2 className="text-3xl font-bold text-center text-slate-900  mb-12">What Our Clients Say
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                   
                    <ReviewCard image={Image} name="Eman" review='"The electrician from HomeCare was professional and efficient. My issue was fixed in no time. Highly recommend!"'/>
                    <ReviewCard image={Image} name="Ahmad" review='"Booking a plumber was so easy and the service was top-notch.I am so impressed with the quality and price"'/>
                    <ReviewCard image={Image} name="Talha" review='"The electrician from HomeCare was professional and efficient. My issue was fixed in no time. Highly recommend!"'/>

                </div>
            </div>
        </section>
    )
}

export default ClientReview