import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/Form'
import { useAuth } from '../js/AuthContext'

export default function Register() {

    const [errMsg, setErrMsg] = useState()
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [pass, setPass] = useState()
    const [confirmPass, setConfirmPass] = useState()
    const { signup } = useAuth()

    const registerData = [
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
            title: 'Password',
            name: 'password',
            placeholder: 'min. 6 characters',
            type: 'password',
            required: true,
            onChange: (e) => setPass(e.target.value)
        },
        {
            title: 'Confirm password',
            name: 'confirmPassword',
            placeholder: 'min. 6 characters',
            type: 'password',
            required: true,
            onChange: (e) => setConfirmPass(e.target.value)
        },
    ]

    function regAcc(e) {
        e.preventDefault()

        if (pass === confirmPass) {
            signup(email, pass)
                .then(() => {

                }).catch((err) => {
                    setErrMsg(err.code)
                });
        } else {
            return setErrMsg('Passwords dont match')
        }

    }

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-[400px] h-fit bg-white/90 rounded-lg shadow-lg'>
                <Form
                    formSubmit={regAcc}
                    formData={registerData}
                    formTitle='Register'
                    formErr={errMsg}
                    buttonTitle='Register' >
                    <p className='text-sm text-center mt-4'>Already have an accout? <Link to='/' className='font-semibold text-sky-600'>Login</Link></p>
                </Form>
            </div>
        </div>
    )
}
