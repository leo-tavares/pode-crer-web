import React from 'react';
import Image from '../../images/image.svg'
import { DreamsCard, DreamsCollected, DreamsContainer, DreamsDescription, DreamsDonations, DreamsH1, DreamsH3, DreamsIcon, DreamsObjective, DreamsProfile, DreamsSpan, DreamsUserImage, DreamsWrapper, DreamUsername } from './style'

const CardDreams = () => {
    return (
        <>
           <DreamsContainer id="dreams">
                <DreamsH1>
                    Alguns sonhos
                </DreamsH1>
                <DreamsWrapper>
                    <DreamsCard>
                        <DreamsIcon src={Image}/>
                        <DreamsH3>Titulo do sonho</DreamsH3>
                        <DreamsSpan>Id sonho</DreamsSpan>
                        <DreamsDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</DreamsDescription>
                        <DreamsProfile>
                            <DreamsUserImage src={Image}></DreamsUserImage>
                            <DreamUsername>Nome do individuo</DreamUsername>
                        </DreamsProfile>
                        <DreamsDonations>
                            <DreamsCollected>Arrecadado R$ 0000, 00</DreamsCollected>
                            <DreamsObjective>Meta R$ 0000,00</DreamsObjective>
                        </DreamsDonations>
                    </DreamsCard>
                    <DreamsCard>
                        <DreamsIcon src={Image}/>
                        <DreamsH3>Titulo do sonho</DreamsH3>
                        <DreamsSpan>Id sonho</DreamsSpan>
                        <DreamsDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</DreamsDescription>
                        <DreamsProfile>
                            <DreamsUserImage src={Image}></DreamsUserImage>
                            <DreamUsername>Nome do individuo</DreamUsername>
                        </DreamsProfile>
                        <DreamsDonations>
                            <DreamsCollected>Arrecadado R$ 0000, 00</DreamsCollected>
                            <DreamsObjective>Meta R$ 0000,00</DreamsObjective>
                        </DreamsDonations>
                    </DreamsCard>
                    <DreamsCard>
                        <DreamsIcon src={Image}/>
                        <DreamsH3>Titulo do sonho</DreamsH3>
                        <DreamsSpan>Id sonho</DreamsSpan>
                        <DreamsDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</DreamsDescription>
                        <DreamsProfile>
                            <DreamsUserImage src={Image}></DreamsUserImage>
                            <DreamUsername>Nome do individuo</DreamUsername>
                        </DreamsProfile>
                        <DreamsDonations>
                            <DreamsCollected>Arrecadado R$ 0000, 00</DreamsCollected>
                            <DreamsObjective>Meta R$ 0000,00</DreamsObjective>
                        </DreamsDonations>
                    </DreamsCard>
                    <DreamsCard>
                        <DreamsIcon src={Image}/>
                        <DreamsH3>Titulo do sonho</DreamsH3>
                        <DreamsSpan>Id sonho</DreamsSpan>
                        <DreamsDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</DreamsDescription>
                        <DreamsProfile>
                            <DreamsUserImage src={Image}></DreamsUserImage>
                            <DreamUsername>Nome do individuo</DreamUsername>
                        </DreamsProfile>
                        <DreamsDonations>
                            <DreamsCollected>Arrecadado R$ 0000, 00</DreamsCollected>
                            <DreamsObjective>Meta R$ 0000,00</DreamsObjective>
                        </DreamsDonations>
                    </DreamsCard>
                </DreamsWrapper>                   
            </DreamsContainer> 
        </>
    )
}

export default CardDreams;
