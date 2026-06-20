import React from 'react'

const ReviewCard = ({image,name,review}) => {
    return (
        <div className="bg-gray-100  p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4 mb-4 ">
                <img alt={name} className="size-12 rounded-full  "
                    src={image} />
                <div>
                    <p className="font-semibold text-slate-900 "> {name}</p>
                </div>
            </div>
            <p className="text-slate-700  text-sm">{review}</p>
        </div>
    )
}

export default ReviewCard