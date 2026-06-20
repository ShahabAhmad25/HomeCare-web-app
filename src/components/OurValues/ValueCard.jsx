import React from 'react'

const ValueCard = ({icon,title,description}) => {
    return (
        <div
            class="flex flex-1 gap-4 rounded-lg border border-gray-200 bg-gray-50    p-6 flex-col items-center text-center">
            <div class="text-slate-900 text-4xl">
                <span>{icon}</span>
            </div>
            <div class="flex flex-col gap-1">
                <h2 class="text-slate-700  text-lg font-bold leading-tight">
                   {title}</h2>
                <p class="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">{description}</p>
            </div>
        </div>
    )
}

export default ValueCard