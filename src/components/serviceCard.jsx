import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ServiceCard = ({ text, image, description }) => {

    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/providers/${text}`);
    };

    return (
        <div
            onClick={handleCardClick}
            className='rounded-xl bg-slate-100 overflow-hidden shadow-xl shadow-slate-300 cursor-pointer' >
            <img
                className='hover:scale-105 hover:duration-300 opacity-95'
                src={image}
                alt="image" />

            <div className='flex flex-col mx-3'>
                <h3 className="text-2xl font-bold mt-3 mb-2 font-sans">
                    {text}
                </h3>

                <p>{description}</p>

                <Link
                    to={`/services/booking-method/${text}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className='mr-2.5 my-4 w-full rounded-3xl py-2 bg-blue-700/90 text-white'>
                        Book Now
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ServiceCard
