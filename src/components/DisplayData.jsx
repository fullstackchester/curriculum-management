import React, { useState } from 'react'
import { GoVerified, GoUnverified } from 'react-icons/go'


function DisplayData(
    {
        name,
        title,
        data,
    }
) {


    return (
        <div className='flex flex-col poppins mb-5'>
            <label
                className='text-xs font-medium text-zinc-500'
                htmlFor={name} >{title}</label>

            <span className='text-xl font-base text-zinc-800'>{data} </span>
        </div>
    )
}

export default DisplayData