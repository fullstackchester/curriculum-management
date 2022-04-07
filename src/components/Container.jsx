import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Container() {
    return (
        <div className='w-full h-auto'>
            <Outlet />
        </div>
    )
}
