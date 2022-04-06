import React from 'react'
import InputField from './InputField'

export default function Form(
    {
        formSubmit,
        formTitle,
        formData,
        formErr,
        buttonTitle,
        children
    }
) {
    return (
        <form
            onSubmit={formSubmit}
            spellCheck='false'
            className='w-full h-auto flex flex-col p-10 poppins'>
            <h1 className='text-3xl font-medium text-zinc-800 text-center mb-10 headings'>{formTitle}</h1>

            {formData.map((val, key) => {
                return (
                    <InputField
                        key={key}
                        placeholder={val.placeholder}
                        name={val.name}
                        label={val.title}
                        type={val.type}
                        onChange={val.onChange}
                        required={val.required} />
                )
            })}
            {formErr &&
                <span
                    className='text-sm bg-red-100 border border-red-200 text-red-600
                    rounded-lg text-right p-3 mb-4'>
                    {formErr}
                </span>}

            <button
                type='submit'
                className='border border-zinc-700 bg-zinc-700 
                text-white text-sm poppins rounded-md p-2 font-light'>{buttonTitle}</button>

            {children}
        </form>
    )
}
