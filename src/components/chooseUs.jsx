import React from 'react'
import { MdVerifiedUser } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { RiPriceTag3Fill } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import ChooseUsImg from '../assets/images/image.png'

const ChooseUs = () => {
    return (
        <section className='section'>
            <div className='container '>
                <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
                <div className='grid md:grid-cols-2 gap-8 '>
                    <img  className='rounded' src={ChooseUsImg} alt="Service Environment" />
                    <div className=' '>
                        <h3 className='text-3xl font-semibold mb-4'>Why choose HomeCare?</h3>
                        <p className='text-[14px]'>HomeCareHub is your trusted local platform that connects you with skilled and verified service providers right here in Sargodha.
                            Our goal is to make home maintenance and repair easier, safer, and more reliable for everyone.</p>
                        <ul className=' text-xl  list-none list-inside mt-4 space-y-5'>
                            <li className='flex items-center gap-5'><MdVerifiedUser size="1.5em " color='#1173D4'  /> Experienced,Trained and Verified Professionals</li>
                            <li className='flex items-center gap-5'><BsTools size="1.5em " color='#1173D4'/> Easy Booking</li>
                            
                            <li className='flex items-center gap-5'><RiPriceTag3Fill size="1.5em  " color='#1173D4' />Affordable and Upfront Pricing </li>
                            <li className='flex items-center gap-5'><MdOutlineSupportAgent size="1.5em  " color='#1173D4' /> Customer Support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ChooseUs