import React from 'react'
import { motion } from 'framer-motion'

export default function Item(props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='w-full h-12 flex flex-row border-b border-zinc-200 items-center px-4 py-1 text-sm poppins font-medium text-zinc-600'>

            {props.courseCode}
            {props.name}
        </motion.div>
    )
}
