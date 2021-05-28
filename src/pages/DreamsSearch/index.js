import React, { useState } from 'react'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import CardsSearch from './components/cardsSearch'


const DreamsSearch = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <CardsSearch/>  
        </>
    )
}

export default DreamsSearch