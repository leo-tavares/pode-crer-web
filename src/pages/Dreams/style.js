import styled from 'styled-components';

export const ContainerDreamsPage = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f1f4f4;

`

export const Section = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-itemns: center;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;

    }
`
export const ImageDream = styled.img`
    height: 500px;
    width: 700px;

    @media screen and (max-width: 768px) {
        width: 100vh;
        height: 400px;
        
    }
`

export const DivCarousel = styled.div`
    width: 700px;
    height: 500px;
`

export const Div = styled.div`
    height: 300px;
    width: 370px;
    background-color: #f8f8ff;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    margin-left: 10px;

`
export const DivDonation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    margin: 50px;
`

export const ButtonDonation = styled.button`
    padding: 15px 50px;
    border-style: none;
    background-color: #01bf71;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    color: #fff;

    &:hover {
        background-color: #fff;
        border-bottom: 5px solid #01bf71;
        color: #000;
    }
`

export const DonationH1 = styled.h1`
    font-size: 45px;
`
export const DonationP = styled.p`
    font-size: 20px;
    margin: 20px;
`

export const DivSection = styled.div`
    display: flex;
`

export const DivDesc = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    width: 50%;
`

export const DivDescription = styled.div`
    border-style: none;
    margin: 10px;
    font-size: 20px;
    font-weight: bold;
    color: #000;
    padding: 10px 160px;
    border-bottom: 5px solid #01bf71;
    background-color: #f1f4f4;

`