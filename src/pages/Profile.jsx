import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Profile() {
    const nav = useNavigate()
    return (
        <div>Profile

            <button
                onClick={(e) => {
                    e.preventDefault()
                    nav('edit-profile')
                }}
                className='w-full h-auto bg-zinc-800 text-white
                text-xs rounded-md p-2 poppins hover:bg-zinc-700'>EditProfile</button>
                <Outlet />
        </div>
    )
}
