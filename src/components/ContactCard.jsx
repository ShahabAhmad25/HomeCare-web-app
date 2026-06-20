import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const ContactCard = () => {
    return (
        <div className="flex flex-col gap-8 bg-white  p-8 rounded-xl shadow-sm border border-gray-300 ">
            <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Contact Information
                </h3>
                <div className="space-y-4 text-gray-600 ">
                    <div className="flex items-center gap-4">
                        <span><FaPhoneAlt color='1173D4'/></span>
                        <a className="hover:text-primary transition-colors duration-300"
                            href="tel:0341-8601959">0341-8601959</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <span><MdOutlineEmail color='1173D4' /></span>
                        <a className="hover:text-primary transition-colors duration-300"
                            href="HomeCare.com">HomeCare.com</a>
                    </div>
                    <div className="flex items-start gap-4">
                        <span><LuMapPin  color='1173D4'/></span>
                        <span>123 Main Road,Sattelite Town, Sargodha</span>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>
            <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600 ">
                    <p>Monday - Friday: 9am - 5pm</p>
                    <p>Saturday: 10am - 3pm</p>
                    <p>Sunday: Closed</p>
                </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>
            <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Follow Us</h3>
                <div className="flex items-center  gap-4">
                    <FaFacebook size='1.5rem'  />
                    <FaInstagramSquare size='1.5rem' />
                    <FaLinkedin size='1.5rem' />
                   
                </div>
            </div>
        </div>
    )
}

export default ContactCard