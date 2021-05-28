import React, { useState } from 'react'
import { ContainerDreamsPage, DivDonation, Section, Div, ButtonDonation, DonationH1, DivSection, DivCarousel, DivDescription, DivDesc } from './style'
import CarouselDreams from './components/carouselDream'
import Description from '../../components/description'
import ProgressBar from '../../components/progressBar'
import Sidebar from '../../components/sidebar'
import Navbar from '../../components/navbar';
import ModalConfirm from '../../components/modalConfirm';

const DreamSection = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const [visible, setVisible] = useState(false);

    function showModal() {
        if (visible == true) {
            return <ModalConfirm switchVisible={switchVisible}/>
        }
    }
    function switchVisible() {
        setVisible(!visible);
    }
    


    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <ContainerDreamsPage>
            <div>oi</div>
            <p>oi</p>
        <Section>
            <DivCarousel>
                <CarouselDreams />
            </DivCarousel>

            <Div>
                <DivDonation>
                    <DonationH1>oi</DonationH1>
                    <ProgressBar done/>
                    <ButtonDonation
                        onClick={switchVisible}
                    
                    >Apoiar sonho</ ButtonDonation>
                </DivDonation>
            </Div>
        </ Section>
        </ ContainerDreamsPage>
            <DivSection>
            <DivDesc>
                <DivDescription>Descrição</DivDescription>
            <Description>oi</Description>
            </DivDesc>
            </DivSection>

            {showModal()}
        </>
    )
}

export default DreamSection
