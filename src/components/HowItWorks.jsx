import React from 'react'
import { MdManageSearch } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import WorkingSteps from './workingSteps';
const HowItWorks = () => {
    return (
        <section className='section bg-gray-50'>
            <div className='container'>
                <h2 className="text-3xl font-bold text-center text-slate-900  mb-12">How It Works</h2>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    <WorkingSteps title="1.Choose Service" description="Select the service you need from our wide range of categories." icon={<MdManageSearch size='2em' color="#1173D4" />} />
                    <WorkingSteps title="2. Pick Date and Time" description="Choose a time that works best for you and your schedule." icon={<MdDateRange size='2em' color="#1173D4" />} />
                    <WorkingSteps title="3. Confirm & Pay" description="Confirm your booking details and pay securely online.." icon={<MdOutlinePayment size='2em' color="#1173D4" />} />
                    <WorkingSteps title="4. Service Done" description="A verified professional will arrive and complete the job." icon={<IoCheckmarkDoneSharp size='2em' color="#1173D4" />} />
                </div>
            </div>
        </section>
    )
}

export default HowItWorks