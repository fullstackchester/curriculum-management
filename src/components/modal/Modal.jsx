import React from 'react'
import Backdrop from './Backdrop'

const Modal = ({ handleClose, children }) => {
    return (

        <Backdrop onClick={handleClose}>
            <div
                onClick={(e) => e.stopPropagation()} // stopPropagation prevents modal from closing when modal content was clicked
                className='w-1/3 h-3/4 bg-white rounded-sm p-5'>
                {children}

            </div>
        </Backdrop>

    )
}

export default Modal