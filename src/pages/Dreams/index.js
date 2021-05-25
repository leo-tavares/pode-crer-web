import React, { useMemo, useState } from 'react'
import { ContainerDreamsPage, DivDonation, Section, Div, ButtonDonation, DonationH1, DivSection, DivCarousel, DivDescription, DivDesc } from './style'
import CarouselDreams from './components/carouselDream'
import Description from '../../components/description'
import ProgressBar from '../../components/progressBar'

const DreamSection = () => {
    const [goal , setGoal] = useState(0)
    const [reached, setReached] = useState(0)
    
    const value = useMemo(() => ((goal - reached)/goal) * 100, [goal, reached])
    return (
        <>
        <ContainerDreamsPage>
            <h1>Título</h1>
            <p>Autor do sonho</p>
        <Section>
            <DivCarousel>
                <CarouselDreams />
            </DivCarousel>
            
            <Div>
                <DivDonation>
                    <DonationH1>R$ 0000,00</DonationH1>
                    <ProgressBar done/>
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
