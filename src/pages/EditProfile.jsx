import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from '../components/Form'
import { useAuth } from '../js/AuthContext'

export default function EditProfile() {

    const [errMsg, setErrMsg] = useState()
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [phoneNumber, setphoneNumber] = useState()
    const [pass, setPass] = useState()

    const { currentUser } = useAuth()

    const nav = useNavigate()
    const editProfileData = [
        {
            title: 'Display name',
            name: 'displayName',
            placeholder: 'e.g John Smith',
            type: 'text',
            required: true,
            onChange: (e) => setName(e.target.value)
        },
        {
            title: 'Email',
            name: 'email',
            placeholder: 'example@gmail.com',
            type: 'email',
            required: true,
            onChange: (e) => setEmail(e.target.value)
        },
        {
            title: 'Phone Number',
            name: 'phoneNumber',
            placeholder: 'example@gmail.com',
            type: 'tel',
            required: true,
            onChange: (e) => setphoneNumber(e.target.value)
        },
        {
            title: 'Password',
            name: 'password',
            placeholder: 'min. 6 characters',
            type: 'password',
            required: true,
            onChange: (e) => setPass(e.target.value)
        },
    ]

    function updateProfile(e) {
        e.preventDefault();
        console.log(currentUser)

    }

    return (
        <div className='h-auto w-full flex flex-row flex-wrap justify-between'>
            <div className='h-auto w-full rounded-lg shadow-lg bg-white mb-3 p-4'>
                <main className='w-1/2 h-auto'>
                    {/* 
        formSubmit,
        formTitle,
        formData,
        formErr,
        buttonTitle, */}
                    <Form
                        formData={editProfileData}
                        // formTitle='Edit profile'
                        formSubmit={updateProfile}
                        formErr={errMsg}
                        buttonTitle='Update Profile'
                    >

                    </Form>

                </main>

            </div>
        </div>
    )
}
