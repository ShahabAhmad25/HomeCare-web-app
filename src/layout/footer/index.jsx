import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (

    <footer className="bg-slate-100 border-t border-slate-200 py-5">
      <div className="container mx-auto pt-5 px-3">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <a className="flex items-center gap-2 text-lg font-bold text-black" href="#">
              HOMECARE
            </a>
            <p className="text-sm text-black mt-2">
              From repair to care — we’re always there.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <FaFacebook size='1.5rem'  />
              <FaInstagramSquare size='1.5rem'  />
              <FaLinkedin size='1.5rem'  />
            </div>
          </div>
          <div>
            <h4 className="font-semibold  text-black mb-4">Quick Links</h4>
            <nav className="flex flex-col  text-black gap-2">
              <a className="text-sm  hover:text-blue-900 transition-colors"
                href="#">About Us</a>
              <a className="text-sm  hover:text-blue-900  transition-colors"
                href="#">Services</a>
              <a className="text-sm  hover:text-blue-900  transition-colors"
                href="#">Contact</a>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold  text-black mb-4">Contact Info</h4>
            <ul className="text-sm  text-black space-y-2">
              <li className="flex items-center gap-2">123 Main Road,
                Sattelite Town, Sargodha</li>
              <li className="flex items-center gap-2">HomeCare.com</li>
              <li className="flex items-center gap-2">0341-860-1959</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black mb-4">Newsletter</h4>
            <p className="text-sm  mb-4">Subscribe to our newsletter for
              updates and offers.</p>
            <form className="flex ">
              <input
                className="w-full rounded-l-full border-[1.5px] border-r-0 border-black bg-white  px-4 py-2 text-sm text-slate-900  focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent placeholder:text-black"
                placeholder="Your email" type="email" />
              <button
                className="rounded-r-full  px-4 py-2 text-sm font-semibold  text-white shadow-sm bg-blue-700 transition-colors  "
                type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div
          className="mt-8 pt-8 border-t  border-slate-800 text-center text-sm text-black">
          <p>© 2025 HomeCareHub. All rights reserved.</p>
        </div>
      </div>
    </footer>

  )
}

export default Footer