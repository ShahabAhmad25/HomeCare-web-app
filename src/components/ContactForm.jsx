import React from 'react'

const ContactForm = () => {
    return (
        <form className="space-y-6">
            <div className="flex flex-col">
                <label
                    className="text-slate-900  text-base font-medium  pb-2"
                    for="name">Name</label>
                <input
                    className=" flex w-full rounded-lg text-[#111618]  focus:outline-none  border border-gray-300 bg-white h-14 placeholder:text-[#617c89] p-4 text-base font-normal "
                    id="name" placeholder="Enter your name" type="text" />
            </div>
            <div className="flex flex-col">
                <label
                    className="text-slate-900  text-base font-medium  pb-2"
                    for="email">Email</label>
                <input
                    className=" flex w-full rounded-lg text-[#111618]  focus:outline-none  border border-gray-300 bg-white h-14 placeholder:text-[#617c89] p-4 text-base font-normal "
                    id="email" placeholder="Enter your email" type="text" />
            </div>

            <div className="flex flex-col">
                <label
                    className="text-[#111618]  text-base font-medium  pb-2"
                    for="subject">Subject</label>
                <input
                    className=" flex w-full rounded-lg text-[#111618]  focus:outline-none  border border-gray-300 bg-white h-14 placeholder:text-[#617c89] p-4 text-base font-normal "
                    id="subject" placeholder="Enter the subject of your message" type="text" />
            </div>
            <div className="flex flex-col">
                <label
                    className="text-[#111618]  text-base font-medium  pb-2"
                    for="message">Message</label>
                <textarea
                    className=" flex w-full  rounded-lg text-[#111618] focus:outline-none  border border-gray-300 bg-white min-h-36 placeholder:text-[#617c89]  p-4 text-base font-normal "
                    id="message" placeholder="Enter your message"></textarea>
            </div>
            <button
                className="bg-primary text-white font-semibold text-base py-3 px-6 rounded-lg w-full :bg-blue-700/90 focus:outline-none  transition-colors duration-300"
                type="submit">Send Message</button>
        </form>
    )
}

export default ContactForm