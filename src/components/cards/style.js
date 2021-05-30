import styled from 'styled-components';

export const DreamsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    margin-bottom: 10px;


    @media screen and (max-width: 768px) {
        height: 1000px;
    }

    @media screen and (max-width: 480px) {
        height: auto;
    }
`;

export const DreamsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    margin-bottom: 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        width: 80%;
        padding: 0 20px;
    }
`;

export const DreamsCard = styled.div`
    background: #01bf71;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const DreamsIcon = styled.img`
    height: 200px;
    width: 100%;
    margin-bottom: 10px;
`;

export const DreamsH1 = styled.h1`
    font-size: 2.5rem;
    color: #01bf71;
    margin: auto;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        margin-top: 0;
    }

`;

export const DreamsH3 = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #fff;
`;

export const DreamsSpan = styled.span`
    font-size: 0.8rem;
    text-align: center;
    color: #fff;
`;

export const DreamsDescription = styled.span `
    font-size: 16px;
    text-align: center;
    color: #fff;
    margin-top: 3px;
`

export const DreamsProfile = styled.div`
    display: flex;
`
export const DreamsUserImage = styled.img`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    overflow: hidden;
    margin-top: 5px;
`

export const DreamUsername = styled.p`
    font-size: 1rem;
    color: #fff;
    text-align: center;
    margin-top: 25px;
    margin-left: 10px;
    font-weight: bold;
`
export const DreamsDonations = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const DreamsCollected = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #fff;
    font-weight: bold;
    margin-bottom: 5px;
`
export const DreamsObjective = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #fff;
    font-weight: bold;
`
