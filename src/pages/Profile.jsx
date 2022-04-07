import React from 'react'
import { useNavigate } from 'react-router-dom'
import DisplayData from '../components/DisplayData'
import { AiOutlineEdit } from 'react-icons/ai'
import { useAuth } from '../js/AuthContext'
import Status from '../components/Status'
import { GoVerified, GoUnverified } from 'react-icons/go'


export default function Profile() {

    const nav = useNavigate()

    const { currentUser } = useAuth()
    // get the data and store in JSON format
    const adminProfile = [
        {
            name: 'uid',
            title: 'Administrator ID',
            data: currentUser.uid,
            checkStatus: false
        },
        {
            name: 'displayName',
            title: 'Display name',
            data: currentUser.displayName,
            checkStatus: false
        },
        {
            name: 'email',
            title: 'Email Address',
            data: currentUser.email,
            checkStatus: true

        },
        {
            name: 'phone',
            title: 'Phone number',
            data: currentUser.phoneNumber ? currentUser.phoneNumber : 'N/A',
            checkStatus: false
        }
    ]


    return (
        <div className='h-auto w-full flex flex-row flex-wrap justify-between'>

            <div className='h-auto w-full rounded-lg shadow-lg bg-white mb-3'>
                <nav className='h-12 border-b border-zinc-200 text-zinc-600 flex flex-row justify-end items-center py-2 px-4'>
                    <AiOutlineEdit
                        onClick={() => nav('edit-profile')}
                        className='text-xl h-full' />

                </nav>
                <main className='h-auto p-5 flex flex-row'>

                    <div className='h-full w-3/4 flex flex-col flex-wrap'>
                        {adminProfile.map((val, key) => {
                            return (
                                <DisplayData
                                    key={key}
                                    name={val.name}
                                    title={val.title}
                                    data={val.data}
                                />
                            )
                        })}

                        <span className='text-sm font-semibold text-zinc-700 flex flex-row'>
                            {currentUser.emailVerified ? 'Verified account' : 'Unverified account'}
                            {currentUser.emailVerified ? <GoVerified className='text-sky-600 ml-1' /> : <GoUnverified className='text-zinc-700 ml-1' />}
                        </span>

                    </div>


                </main>
            </div>

        </div>
    )
}
