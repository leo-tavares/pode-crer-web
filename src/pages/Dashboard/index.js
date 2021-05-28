import React, { useState } from 'react'
import Cards from '../../components/cards'
import GetStartedSection from '../../components/getStartedSection'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import Footer from '../../components/footer'

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <GetStartedSection />
            <Cards />
            <Footer />
        </>
    )
};

export default Dashboard;
