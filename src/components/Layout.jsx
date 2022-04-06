import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { SidebarData } from '../json/sidebar';
import Header from './Header';
import { motion } from 'framer-motion';
import Account from './Account';

export default function Layout() {

    return (
        <div className='w-full h-auto flex flex-row'>
            <div className='w-[240px] h-screen bg-zinc-900 flex flex-col sticky top-0 '>
                {/* NAVIGATION SIDEBAR */}
                <header className='h-12 flex flex-row text-white items-center'>
                    <img
                        className='h-10 w-auto'
                        src={require('../assets/logo.svg').default} />
                    <h1 className='text-2xl font-light headings'>Curriculum</h1>

                </header>
                <ul className='flex flex-col flex-grow'>
                    {SidebarData.map((val, key) => {
                        return (

                            <NavLink
                                to={val.link}
                                key={key}
                                className={({ isActive }) => isActive ? 'text-white font-light' : 'text-zinc-500'} >
                                <li
                                    className='w-full h-12 text-inherit hover:text-white py-2 px-4 text-sm
                                     poppins flex font-light items-center hover:bg-zinc-800 outline-none'>
                                    {val.icon} <span className='ml-2'>{val.title}</span>
                                </li>

                            </NavLink>
                        )
                    })}
                </ul>
                <Account />
            </div>
            <div className='h-auto w-[calc(100%-240px)]'>
                <Header />
                <div className='w-full h-auto bg-zinc-100 p-4'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

