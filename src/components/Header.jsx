import React from 'react'
import { HiCog } from 'react-icons/hi'
import { IoNotifications, IoPersonCircle } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const nav = useNavigate()

    function navigate(e, link) {
        e.preventDefault()
        nav(link)
    }
    return (
        <div className='h-12 w-full bg-white shadow sticky top-0 flex flex-row py-1 px-4 justify-end '>

            <div className='h-full w-32 flex flex-row items-center justify-evenly'>
                <IoNotifications className='text-xl text-zinc-700' />
                <HiCog className='text-xl text-zinc-700 cursor-pointer hover:text-zinc-500' onClick={(e) => navigate(e, 'settings')} />
                <IoPersonCircle className='text-xl text-zinc-700' />
            </div>
        </div>
    )
}
