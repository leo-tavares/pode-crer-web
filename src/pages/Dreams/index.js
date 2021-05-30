import React, { useState } from 'react'
import { ContainerDreamsPage, DivDonation, Section, Div, ButtonDonation, DonationH1, DivSection, DivImage, DivDescription, DivDesc, ImageDream } from './style'
import Description from '../../components/description'
import ProgressBar from '../../components/progressBar'
import Sidebar from '../../components/sidebar'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Image from '../../images/image.svg'
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
            <DivImage>
                <ImageDream src={Image} />
            </DivImage>

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
        <Footer />
        </>
    )
}

export default DreamSection
