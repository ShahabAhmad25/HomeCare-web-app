import React from 'react'
import ContactCard from '../components/ContactCard'
import ContactForm from '../components/ContactForm'

const ContactUs = () => {
  return (
     <div className=" container px-4  flex justify-center py-10 ">
                <div className=" flex flex-col w-full  max-w-6xl ">
                    <div className="flex flex-col items-center text-center mb-12">
                        <p
                            className="text-4xl lg:text-4xl font-black text-slate-900 ">
                            Let's Talk</p>
                        <p className="text-lg text-gray-600  mt-4 max-w-2xl">Have a question or need
                            assistance? We're here to help. Reach out to us through any of the channels below.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                        <div className="flex flex-col gap-6 p-4">
                           <ContactForm/>
                        </div>
                        <ContactCard/> 
                    </div>
                </div>
            </div>
  )
}

export default ContactUs