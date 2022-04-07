import React from 'react'

export default function TableHeader({ titles }) {
    return (
        <div className='w-full h-fit px-4 py-1 font-base poppins text-xs text-zinc-500 flex flex-row justify-between'>
            {titles.map((val, key) => {
                return (
                    <span key={key}> {val.title} </span>
                )
            })}

        </div>
    )
}
