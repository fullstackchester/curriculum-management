import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Item from '../../components/table/Item'
import TableHeader from '../../components/table/TableHeader'
import { ref, onValue, DataSnapshot } from 'firebase/database'
import { database } from '../../js/Firebase'
import { IoAddCircle } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'



function Subjects() {

    const subjectRef = ref(database, 'subjects')
    const [subjData, setSubjData] = useState()
    const nav = useNavigate()

    useEffect(() => {
        const getSubjects = onValue(subjectRef, (DataSnapshot) => {
            setSubjData(DataSnapshot.val())
        })

        return getSubjects
    }, [])

    const actions = [
        {
            icon: <IoAddCircle />,
            link: 'add-subject'
        }
    ]

    return (
        <div className='h-auto w-full flex flex-row flex-wrap justify-between'>
            <div className='h-auto w-full rounded-lg shadow-lg bg-white mb-3'>
                <Navbar searchBar={true} actions={actions} >
                </Navbar>

                {subjData && subjData.map((val, key) => {
                    return (
                        <Item
                            key={key}

                            courseCode={val.courseCode}
                            name={val.name} />
                    )
                })}
            </div>


        </div>
    )
}

export default Subjects