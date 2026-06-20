import React, { useState } from 'react';
import Logo from '../../assets/images/logo site 2.png';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from '../../components/sidebar';

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <header className='sticky top-0 w-full z-50 bg-slate-100 shadow-xl py-4 font-primary'>
            <div className='container font-sans-serif flex justify-between items-center mx-auto px-4'>


                <div className='flex justify-center items-center gap-8'>
                    <div className='flex gap-2 text-2xl'>
                        <img className='w-[30px]' src={Logo} alt="Logo" />
                        <Link to="/">
                            <span className='font-bold'>HOMECARE</span>
                        </Link>
                    </div>


                    <nav className='hidden md:block'>
                        <ul className='flex justify-center items-center gap-4'>
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/services"><li>Services</li></Link>
                            <Link to="/about-us"><li>About Us</li></Link>
                            <Link to="/contact-us"><li>Contact Us</li></Link>
                        </ul>
                    </nav>
                </div>
                <div className='flex justify-center items-center gap-5'>
                    <div className='relative md:block hidden'>
                        <span className='absolute inset-y-0 left-3 flex items-center text-gray-500'>
                            <AiOutlineSearch color='gray' size='1.25em' />
                        </span>
                        <input
                            className='w-full px-4 py-1 border-[1.5px] border-gray-300 rounded-4xl pl-11'
                            type="text"
                            placeholder='Search...'
                        />
                    </div>


                    <div className='md:hidden'>
                        <AiOutlineSearch color='gray' size='1.25em' />
                    </div>

                    <div className='md:hidden'>
                        <GiHamburgerMenu size='1.5em' onClick={toggleSidebar} />
                    </div>
                    <Link to="/login">
                        <button className='hidden md:block rounded-4xl px-5 py-1 text-blue-700 border-[1.5px] border-blue-700'>
                            Login
                        </button>
                    </Link>
                     <Link to="/sign-up">
                    <button className='hidden md:block rounded-4xl px-5 py-2 text-white bg-blue-700 border-[1.5px] border-blue-700'>
                        Signup
                    </button>
                    </Link>
                </div>

            </div>

            {/* Mobile Sidebar */}
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </header>
    );
};

export default Header;
