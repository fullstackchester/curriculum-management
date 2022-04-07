import React from 'react'
import InputField from './InputField'
import { useNavigate } from 'react-router-dom'



export default function Navbar(
    {
        actions,
        children,

    }
) {
    const nav = useNavigate()


    return (
        <div className='flex flex-col'>
            <nav
                className='h-14 border-b border-zinc-200 text-zinc-600
                 flex flex-row justify-end items-center py-2 px-4'>
                {actions && actions.map((val, key) => {
                    return (
                        <span
                            key={key}
                            onClick={(e) => {
                                e.preventDefault()
                                nav(val.link)
                            }}
                            className='h-full w-10 text-xl text-zinc-700 flex items-center
                             justify-center cursor-pointer hover:text-zinc-500'
                        >{val.icon}</span>
                    )
                })}
            </nav>
            {children}
        </div>
    )
}
