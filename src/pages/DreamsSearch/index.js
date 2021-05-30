import React, { useState } from 'react'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import { CardsSearch } from './style'
import Footer from '../../components/footer'


const DreamsSearch = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <CardsSearch />
            <Footer />  
        </>
    )
}

export default DreamsSearch