import React, { useState } from 'react'
import { ArrowForward, ArrowRight, GetStartedBg, GetStartedBtnWrapper, GetStartedContainer, GetStartedContent, GetStartedH1, GetStartedP, GetStartedTitle, VideoBg } from './style'
import  Video from '../../videos/video.mp4';
import { Button } from '../buttonGetStarted/style';
import { useHistory } from 'react-router';



const GetStarted = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    const history = useHistory();
    const navigateTo = (path) => () => {
    history.push(path);
  };

    return (
        <GetStartedContainer id="getstarted">
            <GetStartedBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </GetStartedBg>
            <GetStartedContent>
                <GetStartedTitle>
                    PodeCrer
                </GetStartedTitle>
                <GetStartedH1>
                    Venha sonhar com a gente
                </GetStartedH1>
                <GetStartedP>
                    Cadastre-se e junte-se a milhares de sonhadores
                </GetStartedP>
                <GetStartedBtnWrapper>
                    <Button onClick={navigateTo("/signUp")} onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Cadastre-se {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </GetStartedBtnWrapper>
            </GetStartedContent>
        </GetStartedContainer>
    )
}

export default GetStarted
