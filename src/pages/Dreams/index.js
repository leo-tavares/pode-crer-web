import React from 'react'
import Image from '../../images/image.svg'
import { ContainerDreamsPage, DivDonation, ImageDream, Section, Div, ButtonDonation, DonationH1, DonationP, Menu, A, NavSection } from './style'

const DreamSection = () => {
    return (
        <>
        <ContainerDreamsPage>
            <h1>Título do sonho</h1>
            <p>Autor do sonho</p>
        <Section>
            <ImageDream src={Image}/>
            <Div>
                <DivDonation>
                    <DonationH1>R$ 0000,00</DonationH1>
                    <DonationP>Arrecadado 0000,00</DonationP>
                    <ButtonDonation>Apoiar sonho</ ButtonDonation>
                </DivDonation> 
            </Div>
        </ Section>
        </ ContainerDreamsPage>
            <NavSection>
            <Menu>
                <A  href="description">Sobre</A>
                <A  href="comments" >Comentários</A>
            </Menu>
            </NavSection>
        </>
    )
}

export default DreamSection
