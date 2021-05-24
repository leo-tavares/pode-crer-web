import React, { useEffect} from 'react';
import Image from '../../images/image.svg'
import { DreamsCard, DreamsCollected, DreamsContainer, DreamsDescription, DreamsDonations, DreamsH1, DreamsH3, DreamsIcon, DreamsObjective, DreamsProfile, DreamsSpan, DreamsUserImage, DreamsWrapper, DreamUsername } from './style'
import { useDream } from '../../hooks/dream'


const DreamsCards = () => {
    const { dream, getDreams } = useDream();

    useEffect(()=>{
        getDreams()
    },[getDreams])


    return (
        <>
        <DreamsContainer id="dreams">
                <DreamsH1>
                    Alguns sonhos
                </DreamsH1>
                <DreamsWrapper >
            {dream.length > 0 && dream.map((items, key)=>(
                    <DreamsCard key={key}>
                        <DreamsIcon src={Image}/>
                        <DreamsH3 >{items.name}</DreamsH3>
                        <DreamsSpan>Id sonho: {items.id}</DreamsSpan>
                        <DreamsDescription>{items.resume}</DreamsDescription>
                        <DreamsProfile>
                            <DreamsUserImage src={Image}></DreamsUserImage>
                            <DreamUsername>{items.user}</DreamUsername>
                        </DreamsProfile>
                        <DreamsDonations>
                            <DreamsCollected>{items.reached}</DreamsCollected>
                            <DreamsObjective>{items.goal}</DreamsObjective>
                        </DreamsDonations>
                        </DreamsCard>
            ))}
            </DreamsWrapper>
            </DreamsContainer>
            </>

)}

export default DreamsCards;
