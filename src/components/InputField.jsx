import React from 'react'

export default function InputField(
    {
        name,
        label,
        placeholder,
        type,
        required,
        onChange
    }) {
    return (
        <div className='flex flex-col'>
            <label
                htmlFor={name}
                className='text-sm text-zinc-700 mb-1'>{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                required={required}
                className='p-3 border border-zinc-300 outline-none
                 bg-white text-zinc-800 rounded-md mb-4 text-sm
                 focus:border-sky-600 focus:ring-1 focus:ring-sky-600 ' />

        </div>
    )
}
