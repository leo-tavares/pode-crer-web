import React, { useEffect } from 'react'
import { ContainerDreamsPage, DivDonation, Section, Div, ButtonDonation, DonationH1, DivSection, DivCarousel, DivDescription, DivDesc } from './style'
import CarouselDreams from './components/carouselDream'
import Description from '../../components/description'
import ProgressBar from '../../components/progressBar'
import { useDream } from '../../hooks/dream'

const DreamSection = () => {
    const { dream, getDreams } = useDream();

  useEffect(() => {
    getDreams();
  }, [getDreams]);


    return (
        <>
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
                    <ButtonDonation>Apoiar sonho</ ButtonDonation>
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
        </>
    )
}

export default DreamSection
