import React from 'react'
import ValueCard from './ValueCard'
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { TbDiamondFilled } from "react-icons/tb";
import { FaPeopleRoof } from "react-icons/fa6";
import { AiOutlineAudit } from "react-icons/ai";
const OurValues = () => {
    return (
        <section class="section">
            <div class="container flex flex-col ">
                <div class="flex flex-col gap-10 px-4 py-10 @container">
                    <div class="flex flex-col gap-3 text-center">
                        <h1
                            class=" text-3xl font-bold ">
                            Our Values
                        </h1>
                        <p class="text-gray-600 text-md text-center ">
                            We are committed to providing you with the best home service experience.
                        </p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-4  gap-4 p-0">
                        <ValueCard title='Reliability' description='You can count on us to be there when you need us.' icon={<IoShieldCheckmarkOutline color='1173D4' />} />
                        <ValueCard title='Quality Service' description='We provide top-notch services to ensure your satisfaction.' icon={<TbDiamondFilled color='1173D4' />} />
                        <ValueCard title='Customer Focus' description='Your needs and preferences are our top priority.' icon={<FaPeopleRoof color='1173D4' />} />
                        <ValueCard title='Integrity' description='We operate with honesty and transparency in all we do.' icon={<AiOutlineAudit color='1173D4' />} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurValues