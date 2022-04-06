import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import { motion } from 'framer-motion';
import { useAuth } from '../js/AuthContext';


export default function Login() {

    const [errMsg, setErrMsg] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const navigate = useNavigate()

    const { login } = useAuth()

    const loginData = [
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
        },]

    function loginAdmin(e) {
        e.preventDefault();
        login(email, pass)
            .then(() => {
                navigate('/dashboard')
            }).catch((err) => {
                setErrMsg(err.code)
            });
    }

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div
                className='w-[400px] h-fit border border-zinc-100 shadow-lg rounded-lg'>
                <Form
                    formData={loginData}
                    formSubmit={loginAdmin}
                    formTitle='Login'
                    formErr={errMsg}
                    buttonTitle='Login' >

                    <p className='text-sm text-center mt-4'>Don't an accout? <Link to='/register' className='font-semibold text-sky-600'>Register</Link></p>

                </Form>
            </div>
        </div>
    )
}
