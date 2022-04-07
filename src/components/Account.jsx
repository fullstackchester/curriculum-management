import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../js/AuthContext'

export default function Account() {

    const { currentUser, logout } = useAuth()

    function signout(e) {
        e.preventDefault()
        
    }
    return (
        <div className='h-36 w-full flex flex-col p-3 justify-between'>
            <div className='w-full h-auto flex flex-row'>
                <img
                    className='h-16 w-16 rounded-[100%] bg-sky-800 mr-3'
                    src={require('../assets/peep-52.svg').default} />
                <div className='flex flex-col text-xl text-zinc-400 overflow-hidden poppins font-extralight'>
                    <NavLink
                        to='profile'
                        className={({ isActive }) => isActive ? 'text-white font-medium' : ''}>{currentUser.displayName} </NavLink>
                    <span className='text-xs '>{currentUser.email} </span>

                </div>
            </div>
            <button
                onClick={signout}
                className='w-full h-auto bg-zinc-800 text-white
                text-xs rounded-md p-2 poppins hover:bg-zinc-700'>Logout</button>

        </div>
    )
}
