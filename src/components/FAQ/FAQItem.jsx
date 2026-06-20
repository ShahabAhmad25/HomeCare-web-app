import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
const FAQItem = ({question,answer}) => {
    return (
        <details className="group bg-white  rounded-lg p-4 shadow-sm">
            <summary className="flex items-center justify-between cursor-pointer">
                <h3 className="text-md font-medium text-slate-900 ">{question}</h3>
                <span></span>
                <MdKeyboardArrowDown size="20px" className='transition-transform duration-300 group-open:rotate-180' />
            </summary>
            <div className="mt-4 text-sm text-slate-800">
                <p>{answer}</p>
            </div>
        </details>
    )
}

export default FAQItem