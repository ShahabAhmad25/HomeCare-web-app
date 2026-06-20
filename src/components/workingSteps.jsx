import React from 'react'

const WorkingSteps = ({title,description,icon}) => {
    return (
        <div className="flex flex-col items-center">
            <div
                className="flex items-center justify-center size-16 rounded-full bg-primary/10 text-primary mb-4">
                <span classNameName='p-4 rounded-[50%] bg-slate-100'>{icon}</span>
            </div>
            <h3 className="text-lg font-semibold  mb-2">{title}</h3>
            <p className="text-sm text-slate-700 ">{description}</p>
        </div>
    )
}

export default WorkingSteps