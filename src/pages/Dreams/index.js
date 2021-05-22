import React from 'react'
import { ContainerDreamsPage, DivDonation, Section, Div, ButtonDonation, DonationH1, DonationP, DivSection, DivCarousel, DivDescription, DivDesc } from './style'
import CarouselDreams from './components/carouselDream'
import Description from '../../components/description'

const DreamSection = () => {

    return (
        <>
        <ContainerDreamsPage>
            <h1>Título do sonho</h1>
            <p>Autor do sonho</p>
        <Section>
            <DivCarousel>
                <CarouselDreams />
            </DivCarousel>
            
            <Div>
                <DivDonation>
                    <DonationH1>R$ 0000,00</DonationH1>
                    <DonationP>Arrecadado 0000,00</DonationP>
                    <ButtonDonation>Apoiar sonho</ ButtonDonation>
                </DivDonation> 
            </Div>
        </ Section>
        </ ContainerDreamsPage>
            <DivSection>
            <DivDesc>
                <DivDescription >Descrição</DivDescription>
            <Description />
            </DivDesc>
            </DivSection>
        </>
    )
}

export default DreamSection
